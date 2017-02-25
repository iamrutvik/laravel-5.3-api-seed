<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\AdminController;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Input;
use Carbon\Carbon;
use Excel;
use Session;
use Flash;
use Auth;
use Crypt;
use Redirect;
use Validator;
use Cookie;
use Storage;
use URL;
use Config;

class UserController extends AdminController
{
    /**
     * Show a list of users
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $keyword = Input::get('keyword') ? Input::get('keyword'):'';   
        $sort = Input::get('so') ? Input::get('so'):'desc';    
        $orderby = Input::get('sf') ? Input::get('sf'):'id';   
        $verify = trim(Input::get('verify'));    
        $active = trim(Input::get('status')); 
        
        $users = User::getusers($keyword, $orderby, $sort, $active, $verify);
                
        return view('admin.usermaster.index', compact('users'));
    }
    
    /**
     * Show a page of user creation
     * @return \Illuminate\View\View
     */
    public function create()
    {
        $user = new User;
        $action = 'store';
		$backUrl = URL::previous();
        return view('admin.usermaster.create')->with(compact('user', 'action','backUrl'));
    }
    
    /**
     * Add user data
     * @return \Illuminate\View\View
     */
    public function store(Request $request)
    {
        $data = $request->all();
        //$userData = Session::get('user');
        
		$password = 'password@123';
        $data['name'] = $request->name;
        $data['email'] = $request->email;
        $data['is_active'] = $request->is_active;
        $data['password'] = \Hash::make($password);
		$data['dob'] = date('Y-m-d',strtotime($request->dob));
		$data['latitude'] = $request->latitude;
		$data['longitude'] = $request->longitude;
		$data['postal_code'] = $request->postal_code;
		
		//avtar save
		$data['avatar'] = '';
		if($request->hasFile('avatar') && $request->file('avatar')->isValid()){
			$image = Input::file('avatar');
			//simple file uploading
			//$request->file('avatar')->store('avatars');
	
			//file uploading USING S3
			$extension = $request->file('avatar')->getClientOriginalExtension(); // getting image extension
            $fileName  = time().'_'.rand(0,9999). '.' . $extension;
			//$imageNormal = Image::make($image->getRealPath())->orientate();		 
            Storage::disk('s3')->put(Config::get('constants.STORAGE_S3_PATH_PROFILEPIC').$fileName,'public');
			$data['avatar'] = $fileName;
		}
		//avtar save
		
		//banner save
		$data['banner'] = '';
		if($request->hasFile('banner') && $request->file('banner')->isValid()){
			$image = Input::file('banner');
			//simple file uploading
			//$request->file('banner')->store('banners');
	
			//file uploading USING S3
			$extension = $request->file('banner')->getClientOriginalExtension(); // getting image extension
            $fileName  = time().'_'.rand(0,9999). '.' . $extension;
			//$imageNormal = Image::make($image->getRealPath())->orientate();		 
            Storage::disk('s3')->put(\Config::get('constants.STORAGE_S3_PATH_BANNER').$fileName, 'public');
			$data['banner'] = $fileName;
		}
		//banner save
		
        $validator = Validator::make(
            array(
                'email' => $request->email,
            ),
            array(
                'email' => 'unique:users,email',
            )
        );

        if ( $validator->fails() ) {
            Session::flash('errorMsg', 'This email has already been taken. Please use a different email.');
           return Redirect::back()->withInput($request->all());
           
        }
        else
        {
            $user = User::create($data);
            $user->save();
            Session::flash('successMsg', 'User has been saved successfully');
            return redirect('admin/users');
        }
        
    }
    /**
     * Show a page of user edit
     * @return \Illuminate\View\View
     */
    public function edit($id)
    {
        $user = User::where('id',$id)->get();
        $user = $user[0];
        $action = 'update';
        $backUrl = URL::previous();
        return view('admin.usermaster.create')->with(compact('user', 'action', 'backUrl'));
    }
    
    /**
     * Update user data
     * @return \Illuminate\View\View
     */
    public function update(Request $request,$id)
    {
        //$userData = Session::get('user');
        
        $data['name'] = $request->name;
        $data['gender'] = $request->gender;
        if($request->dob!="")
          $data['dob'] = date('Y-m-d',strtotime($request->dob));
        $data['address'] = $request->address;
        $data['bio'] = $request->bio;
        $data['latitude'] = $request->latitude ? $request->latitude : 0.00;
        $data['longitude'] = $request->longitude ? $request->longitude : 0.00;
        $data['postal_code'] = $request->postal_code? $request->postal_code : 0;
        $data['is_active'] = $request->is_active;
        
		$oldUser = User::where('id','=',$id)->get()->first(); //get user's details By id
        if($request->hasFile('avatar') && $request->file('avatar')->isValid()){
				$image = Input::file('avatar');
 	            $filename  = time().'_'.rand(0,9999). '.' . $image->getClientOriginalExtension();
                //$imageNormal = Image::make($image->getRealPath())->orientate();		 
                Storage::disk('s3')->put(Config::get('constants.STORAGE_S3_PATH_PROFILEPIC').$filename, 'public');

                $data['avatar'] = $filename;
                if($oldUser->avatar!='')
                   Storage::disk('s3')->delete(Config::get('constants.STORAGE_S3_PATH_PROFILEPIC').$oldUser->avatar);
        
        }
        
         if($request->hasFile('banner') && $request->file('banner')->isValid()){
				$image = Input::file('banner');
 	            $filename  = time().'_'.rand(0,9999). '.' . $image->getClientOriginalExtension();
                //$imageNormal = Image::make($image->getRealPath())->orientate();		 
                Storage::disk('s3')->put(Config::get('constants.STORAGE_S3_PATH_BANNER').$filename,'public');

                $data['banner'] = $filename;
                if($oldUser->banner!='')
                   Storage::disk('s3')->delete(Config::get('constants.STORAGE_S3_PATH_BANNER').$oldUser->banner);
        
        }
 
        $updateuser = User::where('id',$id)->update($data);
        if($updateuser)
        {
            Session::flash('successMsg', 'User has been edited successfully');
            return redirect($request->backUrl);
        }
        else 
        {
            Session::flash('errorMsg', 'Error in user upadte process. Please try again!.');
            return Redirect::back();
        }
    }
    
    /**
     * view user profile
     * @return \Illuminate\View\View
     */
    public function view($id)
    {
        $userInfo = User::find($id);
        $user = User::where('id',$id)->first();
		return view('admin.usermaster.view')->with(compact('user'));
    }
    
     /**
     * Used to delete user data
     * @return \Illuminate\View\View
    */
//    public function deleteData()
//    {
//       $userId = Auth::id();
//       if(isset($_POST['checkedValues']) && $_POST['checkedValues'] != '')
//           $checkedValues = explode(',',$_POST['checkedValues']);
//       $usersQuery = User::whereIn('id',$checkedValues)->delete();
//       
//       $users = User::getusers(); 
//       //Session::flash('successMsg', 'User(s) have been deleted successfully');
//       return view('admin.usermaster.partials.listing', compact('users'));
//    }
    
    /**
     * Used to change user status
     * @return \Illuminate\View\View
    */
    public function changeStatus()
    {
       $status = $_POST['status'];
       
       if(isset($_POST['checkedValues']) && $_POST['checkedValues'] != ''){
           $checkedValues = explode(',',$_POST['checkedValues']);
       $usersQuery = User::whereIn('id',$checkedValues)->update(array('is_active' => $status));
       
       if($usersQuery == true)
        {
            Session::flash('successMsg', 'Status(s) changed successfully');
            return 1;
        }
        else
        {
            return 0;
        }
       }
    }
    
   
    /**
     * Used to export data of user
     * @return \Illuminate\View\View
    */
    public function exportData()
    {
       $userId = Auth::id(); 
       $users = User::where('id','!=',$userId)->where('type','user')->get(array('id','email','name','gender','dob','address','bio','latitude','longitude'
       ,'postal_code','is_active'));
       $userArr = array();
       if(isset($users) && count($users) > 0)
       {
          foreach ($users as $kUser => $vUser) {
              
              if($vUser['is_active'] == 1){
                  $status = "Active";
              }else{
                  $status = "InActive";
              }
              
              $userArr[$kUser]['ID'] = $vUser['id'];
              $userArr[$kUser]['Email'] = $vUser['email'];
              $userArr[$kUser]['Name'] = $vUser['name'];
              $userArr[$kUser]['Gender'] = $vUser['gender'];
              $userArr[$kUser]['DOB'] = $vUser['dob'];
              $userArr[$kUser]['Address'] = $vUser['address'];
              $userArr[$kUser]['Bio'] = $vUser['bio'];
              $userArr[$kUser]['lattitude'] = $vUser['latitude'];
              $userArr[$kUser]['Longitude'] = $vUser['longitude'];
              $userArr[$kUser]['Pincode'] = $vUser['postal_code'];
              $userArr[$kUser]['Status'] = $status;
          }
       }
       Excel::create('users', function($excel) use($userArr) {
            $excel->sheet('Sheet 1', function($sheet) use($userArr) {
                 $sheet->fromArray($userArr);
            });
        })->export('xls');
    }
}