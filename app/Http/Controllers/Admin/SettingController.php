<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\AdminController;
use App\User;
use Validator;
//use App\Department;
//use App\SubCategory;
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

class SettingController extends AdminController
{
    /**
     * Show a list of available setting for user
     * @return \Illuminate\View\View
     */
    public function index()
    {
        //Get Current Admin User
        $admin = Auth::user();
        $action = 'update';
        return view('admin.setting.create')->with(compact('admin','action'));
    }

    /**
     * Update user settings data
     * @return \Illuminate\View\View
     */
    public function update(Request $request)
    {
        $userData = Auth::user();   
        if(isset($userData) && count($userData) > 0)
            $userId = $userData->id;
        
        $validator = Validator::make(
            array(
                'email' => $request->email,
            ),
            array(
                'email' => 'unique:users,email,"'.$userId.'"',
            )
        );

        if ( $validator->fails() ) {
            Session::flash('errorMsg', 'This email has already been taken. Please use a different email.');
           return Redirect::back();
           
        }
        else
        {
            
            $data['name'] = $request->name;
            $data['email'] = $request->email;
            
            $password = trim($request->password);
            if(isset($password) && $password != '')
            {
                $data['password'] =  \Hash::make($request->password);
            }

            User::where('id',$userId)->update($data);
            Session::flash('successMsg', 'Settings have been saved successfully');
            return redirect('admin/settings');
        }
    }
}