<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*Route::get('/', function () {
    return view('welcome');
});*/
use App\AuthenticateUser;
use Illuminate\Http\Request;

//Auth::routes();

/************** Routes for main website *******************************/
//Route::get('/home', 'HomeController@index');


/***************  Start Admin routes  **********************************/

    //Login Routes...

    Route::get('/admin' , 'Auth\LoginController@showLoginForm');   
    
    
    Route::group(['prefix' => 'admin'], function() {
        // Authentication Routes...
        Route::post('/password/reset', 'Auth\ResetPasswordController@reset');
        Route::post('/password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
        Route::get('admin/password/reset/{token}', 'Auth\ResetPasswordController@showResetForm');
        Route::get('/logout' , 'Auth\LoginController@logout');
        Auth::routes();
      
    });
    
    Route::group(['prefix' => 'admin', 'middleware' => ['auth', 'isadmin','revalidate']], function() {
		
		# Admin Dashboard
		Route::get('home', 'Admin\HomeController@index');
	
		# Routes for Users at admin panel
		Route::get('/users', 'Admin\UserController@index');
		Route::get('/users/view/{id}', 'Admin\UserController@view');
		Route::get('/users/add', 'Admin\UserController@create');
		Route::get('/users/edit/{id}', 'Admin\UserController@edit');
		Route::post('/users/store', 'Admin\UserController@store');
		Route::post('/users/update/{id}', 'Admin\UserController@update');
		Route::post('/users/searchtext', 'Admin\UserController@searchtext');
		Route::post('/users/filterData', 'Admin\UserController@filterData');
		Route::post('/users/deleteData', 'Admin\UserController@deleteData');
		Route::post('/users/changeStatus', 'Admin\UserController@changeStatus');
		Route::post('/users/changeOrder', 'Admin\UserController@changeOrder');
		Route::get('/users/exportData', 'Admin\UserController@exportData');
    
    # Routes for Product Category at admin panel
    /*Route::get('/productcategory', 'Admin\ProductCategoryController@index');
    Route::get('/productcategory/add', 'Admin\ProductCategoryController@create');
    Route::get('/productcategory/edit/{id}', 'Admin\ProductCategoryController@edit');
    Route::post('/productcategory/store', 'Admin\ProductCategoryController@store');
    Route::post('/productcategory/update/{id}', 'Admin\ProductCategoryController@update');
    Route::get('/productcategory/view/{id}', 'Admin\ProductCategoryController@view');
    Route::post('/productcategory/searchtext', 'Admin\ProductCategoryController@searchtext');
    Route::post('/productcategory/filterData', 'Admin\ProductCategoryController@filterData');
    Route::post('/productcategory/deleteData', 'Admin\ProductCategoryController@deleteData');
    //Route::post('/productcategory/changeStatus', 'Admin\ProductCategoryController@changeStatus');
    Route::post('/productcategory/changeOrder', 'Admin\ProductCategoryController@changeOrder');
    Route::get('/productcategory/exportData', 'Admin\ProductCategoryController@exportData');*/
    
    # Routes for Product at admin panel
    /*Route::get('/product', 'Admin\ProductController@index');
    Route::get('/product/add', 'Admin\ProductController@create');
    Route::get('/product/edit/{id}', 'Admin\ProductController@edit');
    Route::post('/product/store', 'Admin\ProductController@store');
    Route::post('/product/update/{id}', 'Admin\ProductController@update');
    Route::get('/product/view/{id}', 'Admin\ProductController@view');
    Route::post('/product/searchtext', 'Admin\ProductController@searchtext');
    Route::post('/product/filterData', 'Admin\ProductController@filterData');
    Route::post('/product/deleteData', 'Admin\ProductController@deleteData');
    //Route::post('/product/changeStatus', 'Admin\ProductController@changeStatus');
    Route::post('/product/changeOrder', 'Admin\ProductController@changeOrder');
    Route::get('/product/exportData', 'Admin\ProductController@exportData');*/
    
    # Routes for Cms at admin panel
    /*Route::get('/cms', 'Admin\CmsController@index');
    Route::get('/cms/add', 'Admin\CmsController@create');
    Route::get('/cms/edit/{id}', 'Admin\CmsController@edit');
    Route::post('/cms/store', 'Admin\CmsController@store');
    Route::post('/cms/update/{id}', 'Admin\CmsController@update');
    Route::get('/cms/view/{id}', 'Admin\CmsController@view');
    Route::post('/cms/searchtext', 'Admin\CmsController@searchtext');
    Route::post('/cms/filterData', 'Admin\CmsController@filterData');
    Route::post('/cms/deleteData', 'Admin\CmsController@deleteData');
    //Route::post('/cms/changeStatus', 'Admin\CmsController@changeStatus');
    Route::post('/cms/changeOrder', 'Admin\CmsController@changeOrder');
    Route::get('/cms/exportData', 'Admin\CmsController@exportData');*/
    
    
    # Routes for Setting at admin panel
    Route::get('/settings', 'Admin\SettingController@index');
    Route::post('/settings/update', 'Admin\SettingController@update');
    /***************   End  Admin routes  **********************************/
});