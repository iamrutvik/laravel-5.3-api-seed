@extends('admin.layouts.app')

@section('content')
<div id="page" class="page table-page">
    	<div class="page-content table-content">
        	<div class="login-container">
            	<div class="patten-content">
                    <div class="login-content">
                        <div class="login-logo">
                            <img src="{{asset('assets/admin/images/logo.png')}}" alt="">
                        </div>	
                        <div class="login-frm">
                            <input type="hidden" name="_token" value="{{ csrf_token() }}">
                            <h1>Login</h1>
                            @if (count($errors) > 0)
<!--                                <ul id="msg">-->
                                    @foreach ($errors->all() as $error)
                                        <div class="alert alert-danger" id="msg">
                                            <i class="fa fa-exclamation-triangle"></i>
                                            <div id="message">{!! $error !!}</div>
                                            <div class="close"><i class="fa fa-times"></i></div>
                                        </div>
<!--                                        <li>{!! $error !!}</li>-->
                                    @endforeach
                                <!--</ul>-->
                            @endif 
                    <form class="form-horizontal" id="loginForm" role="form" method="POST" action="{{ url('/admin/login') }}">
                        {{ csrf_field() }}
						 <div class="frm">
                        <div class="input-style">
						<input type="email" placeholder="Email id" class="form-control required" value="{{ old('email') }}" id="email" name="email">
                                    <span class="input-icon msg-icon"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                                
                            </div>
                        </div>
						<div class="frm">
                        <div class="input-style">
                                <input id="password" placeholder="Password" type="password" class="form-control required" name="password">
								 <span class="input-icon pass-icon"><i class="fa fa-lock" aria-hidden="true"></i></span>
                            </div>
                        </div>

						<div class="frm">
<!--                                <div class="remember fl">
                                   <label class="login-check">
                                        <input type="checkbox" class="check" name="remember">
                                        <span class="check-label">Remember me</span>
                                    </label>
                                </div>-->
                                <div class="forgot fr">
                                    <a href="{{ url('admin/password/reset') }}">Forgot Password?</a>
                                </div>
                            </div>

                        <div class="frm">
                                <button class="btn btn-login">
                                    Sign in
                                </button>
                            </div>
                    </form>
               </div>
                    </div>
                </div>
            </div>
        </div>
    </div>			
<script type="text/javascript" src="{{asset('assets/admin/js/pages/login.js')}}"></script>
@endsection
