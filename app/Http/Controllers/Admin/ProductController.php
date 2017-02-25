<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\AdminController;
use App\Product;
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
use URL;
class ProductController extends AdminController
{
    /**
     * Show a list of products
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $keyword = Input::get('keyword') ? Input::get('keyword'):'';   
        $sort = Input::get('so') ? Input::get('so'):'desc';    
        $orderby = Input::get('sf') ? Input::get('sf'):'id';    
        
        $products = Product::getproducts($keyword, $orderby, $sort);
                        
        return view('admin.productmaster.index', compact('products'));
    }
    
    /**
     * Show a page of product creation
     * @return \Illuminate\View\View
     */
    public function create()
    {
        $product = new Product;
        $productcategories = ProductCategory::whereNull('deleted_at')->get()->toArray();
        $action = 'store';
        $backUrl = URL::previous();
        return view('admin.productmaster.create')->with(compact('product', 'action', 'productcategories','backUrl'));
    }
    
    /**
     * Add product data
     * @return \Illuminate\View\View
     */
    public function store(Request $request)
    {
        $data = $request->all();
        
        $data['name'] = $request->name;
        $data['description'] = $request->description;
        $data['product_category_id'] = $request->product_category_id ? $request->product_category_id : '0';
       
        $product = Product::create($data);
        $product->save();
        Session::flash('successMsg', 'Product has been saved successfully');
        return redirect('admin/product');
        
    }
    /**
     * Show a page of product edit
     * @return \Illuminate\View\View
     */
    public function edit($id)
    {
        $product = Product::where('id',$id)->get();
        $product = $product[0];
        $productcategories = ProductCategory::whereNull('deleted_at')->get()->toArray();
        $action = 'update';
        $backUrl = URL::previous();
        return view('admin.productmaster.create')->with(compact('product', 'action', 'productcategories', 'backUrl'));
    }
    
    /**
     * Update product data
     * @return \Illuminate\View\View
     */
    public function update(Request $request,$id)
    {
        $data['name'] = $request->name;
        $data['description'] = $request->description;
        $data['product_category_id'] = $request->product_category_id ? $request->product_category_id : '0';
        
        Product::where('id',$id)->update($data);
        Session::flash('successMsg', 'Product has been edited successfully');
        return redirect($request->backUrl);
        //return redirect('admin/product');
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

            //$isParentCategory = Product::whereIn('parent_id',$checkedValues)->count();
            
            $usersQuery = Product::whereIn('id',$checkedValues)->delete();

            //if($isParentCategory == 0)
            if($usersQuery == true)
            {
                
                Session::flash('successMsg', 'Product(s) has been removed successfully');
                return 1;
            }
            else
            {
                return 0;
                
            }

            
       }
    }
   
    /**
     * Used to export data of product
     * @return \Illuminate\View\View
    */
    public function exportData()
    {
       $products = Product::with('productcategory')->get()->toArray();
       
       $product = array();
       if(isset($products) && count($products) > 0)
       {
          foreach ($products as $kProduct => $vProduct) {
             
              
              $product[$kProduct]['Id'] = $vProduct['id'];
              $product[$kProduct]['Category'] = $vProduct['productcategory']['name'] ? $vProduct['productcategory']['name'] : '-';
              $product[$kProduct]['Name'] = $vProduct['name'];
              $product[$kProduct]['Description'] = $vProduct['description'] ? $vProduct['description'] : '-';

          }
       }
       Excel::create('products', function($excel) use($product) {
            $excel->sheet('Sheet 1', function($sheet) use($product) {
                 $sheet->fromArray($product);
            });
        })->export('xls');
    }

}