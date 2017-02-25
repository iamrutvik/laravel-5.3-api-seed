<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\AdminController;
use App\Cms;
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
use URL;
class CmsController extends AdminController
{
    /**
     * Show a list of cmsdata
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $keyword = Input::get('keyword') ? Input::get('keyword'):'';   
        $sort = Input::get('so') ? Input::get('so'):'desc';    
        $orderby = Input::get('sf') ? Input::get('sf'):'id';    
        
        $cmsdata = Cms::getcmsdata($keyword, $orderby, $sort);
                        
        return view('admin.cmsmaster.index', compact('cmsdata'));
    }
    
    /**
     * Show a page of cms creation
     * @return \Illuminate\View\View
     */
    public function create()
    {
        $cms = new Cms;
        $action = 'store';
        $backUrl = URL::previous();
        return view('admin.cmsmaster.create')->with(compact('cms', 'action', 'backUrl'));
    }
    
    /**
     * Add cms data
     * @return \Illuminate\View\View
     */
    public function store(Request $request)
    {
        $data = $request->all();
        
        $data['type'] = $request->type;
        $data['content'] = trim($request->content);
       
        $cms = Cms::create($data);
        $cms->save();
        Session::flash('successMsg', 'Cms has been saved successfully');
        return redirect('admin/cms');
        
    }
    /**
     * Show a page of cms edit
     * @return \Illuminate\View\View
     */
    public function edit($id)
    {
        $cms = Cms::where('id',$id)->get();
        $cms = $cms[0];
        $action = 'update';
        $backUrl = URL::previous();
        return view('admin.cmsmaster.create')->with(compact('cms', 'action', 'backUrl'));
    }
    
    /**
     * Update cms data
     * @return \Illuminate\View\View
     */
    public function update(Request $request,$id)
    {
        $data['type'] = $request->type;
        $data['content'] = trim($request->content);
        
        Cms::where('id',$id)->update($data);
        Session::flash('successMsg', 'Cms has been edited successfully');
        return redirect($request->backUrl);
        //return redirect('admin/cms');
    }
    
    /**
     * Used to delete user data
     * @return \Illuminate\View\View
    */
    public function deleteData()
    {
       if(isset($_POST['checkedValues']) && $_POST['checkedValues'] != '')
       {
            $checkedValues = explode(',',$_POST['checkedValues']);
            
            $usersQuery = Cms::whereIn('id',$checkedValues)->delete();

            if($usersQuery == true)
            {
                Session::flash('successMsg', 'Cms(s) has been removed successfully');
                return 1;
            }
            else
            {
                return 0;
            }
       }
    }
   
    /**
     * Used to export data of cms
     * @return \Illuminate\View\View
    */
    public function exportData()
    {
       $cmsdata = Cms::get()->toArray();
       
       $cms = array();
       if(isset($cmsdata) && count($cmsdata) > 0)
       {
          foreach ($cmsdata as $kCms => $vCms) {
             
              $vCms['content'] = strip_tags($vCms['content']);
              
              $cms[$kCms]['Id'] = $vCms['id'];
              $cms[$kCms]['Type'] = $vCms['type'];
              $cms[$kCms]['Content'] = $vCms['content'] ? $vCms['content'] : '-';
          }
       }
       Excel::create('cms', function($excel) use($cms) {
            $excel->sheet('Sheet 1', function($sheet) use($cms) {
                 $sheet->fromArray($cms);
            });
        })->export('xls');
    }

}