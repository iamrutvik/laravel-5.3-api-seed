<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\AdminController;
use App\Http\Requests;
use Illuminate\Http\Request;
use Session;
use DB;
use App\User;

class HomeController extends AdminController
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    //home page
    public function index()
    {
       
        return view('admin.home');
        
        
    }
}
