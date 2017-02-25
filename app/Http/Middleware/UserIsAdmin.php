<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests;
use Illuminate\Http\Request;
use Redirect;

class UserIsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        //echo Auth::user()->is_admin; die();
        //dd(Auth::user());exit;
        //$currentUser = JWTAuth::parseToken()->authenticate();
        if(Auth::user()->type != 'admin'){
            
            return redirect('admin/logout')->withErrors(['msg', 'These credentials do not match our records.']);
            //Session::flash('errorMsg', 'These credentials do not match our records.');
            //return redirect('admin/logout');
        }
        return $next($request);
    }
}
