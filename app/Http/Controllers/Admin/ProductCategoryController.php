<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\AdminController;
use App\ProductCategory;
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
use Validator;
use Redirect;
use URL;
class ProductCategoryController extends AdminController
{
    /**
     * Show a list of productcategories
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $keyword = Input::get('keyword') ? Input::get('keyword'):'';   
        $sort = Input::get('so') ? Input::get('so'):'desc';    
        $orderby = Input::get('sf') ? Input::get('sf'):'id';    
        
        $productcategories = ProductCategory::getproductcategories($keyword, $orderby, $sort);
                        
        return view('admin.productcategotymaster.index', compact('productcategories'));
    }
    
    /**
     * Show a page of productcategory creation
     * @return \Illuminate\View\View
     */
    public function create()
    {
        $productcategory = new ProductCategory;
        //$parentcategories = ProductCategory::get()->toArray();
        $action = 'store';
        $backUrl = URL::previous();
        return view('admin.productcategotymaster.create')->with(compact('productcategory', 'action', 'backUrl'));
    }
    
    /**
     * Add productcategory data
     * @return \Illuminate\View\View
     */
    public function store(Request $request)
    {
        $data = $request->only(['name', 'description']);
        
        
        //set validation rules
        $validator = Validator::make($data, [
            'name' => 'required|unique:product_categories'
        ]);

        //check validation
        if($validator->fails()) {
            $err = $validator->errors()->all();
            $errMsg = "Something went wrong, Please try again later.";
            if(count($err) > 0){
                $errMsg = $err[0];
            }
            Session::flash('errorMsg', $errMsg);
            return Redirect::back()->withInput($data);

        }
       
        $productcategory = ProductCategory::create($data);
        $productcategory->save();
        Session::flash('successMsg', 'Product category has been saved successfully');
        return redirect('admin/productcategory');
        
    }
    /**
     * Show a page of productcategory edit
     * @return \Illuminate\View\View
     */
    public function edit($id)
    {
        $productcategory = ProductCategory::where('id',$id)->get();
        $productcategory = $productcategory[0];
        //$parentcategories = ProductCategory::get()->toArray();
        $action = 'update';
        $backUrl = URL::previous();
        //return view('admin.productcategotymaster.create')->with(compact('productcategory', 'action', 'parentcategories'));
        return view('admin.productcategotymaster.create')->with(compact('productcategory', 'action', 'backUrl'));
    }
    
    /**
     * Update productcategory data
     * @return \Illuminate\View\View
     */
    public function update(Request $request,$id)
    {
        $data = $request->only(['name', 'description']);
        //$data['parent_id'] = $request->parent_id ? $request->parent_id : '0';

        ProductCategory::where('id',$id)->update($data);
        Session::flash('successMsg', 'Product category has been edited successfully');
        return redirect($request->backUrl);
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

            //$isParentCategory = ProductCategory::whereIn('parent_id',$checkedValues)->count();
            
            $usersQuery = ProductCategory::whereIn('id',$checkedValues)->delete();

            //if($isParentCategory == 0)
            if($usersQuery == true)
            {
                 //$usersQuery = ProductCategory::whereIn('id',$checkedValues)->delete();
                 
//                 if($usersQuery == true)
//                 {
//                     Session::flash('successMsg', 'Product category(s) has been removed successfully');
//                     return 1;
//                 }
//                 else {
//                     return 0;
//                 }
                Session::flash('successMsg', 'Product category(s) has been removed successfully');
                return 1;
            }
            else
            {
                return 0;
                
            }

            
       }
    }
   
    /**
     * Used to export data of productcategory
     * @return \Illuminate\View\View
    */
    public function exportData()
    {
       //$productcategories = ProductCategory::with('parentcategory')->get()->toArray();
       $productcategories = ProductCategory::get()->toArray();
       
       $productcategory = array();
       if(isset($productcategories) && count($productcategories) > 0)
       {
          foreach ($productcategories as $kProductCategory => $vProductCategory) {
             
              
              $productcategory[$kProductCategory]['Id'] = $vProductCategory['id'];
              $productcategory[$kProductCategory]['Name'] = $vProductCategory['name'];
              $productcategory[$kProductCategory]['Description'] = $vProductCategory['description'] ? $vProductCategory['description'] : '-';
              //$productcategory[$kProductCategory]['Parent Category'] = $vProductCategory['parentcategory']['name'] ? $vProductCategory['parentcategory']['name'] : '-';
          }
       }
       Excel::create('productcategories', function($excel) use($productcategory) {
            $excel->sheet('Sheet 1', function($sheet) use($productcategory) {
                 $sheet->fromArray($productcategory);
            });
        })->export('xls');
    }

}