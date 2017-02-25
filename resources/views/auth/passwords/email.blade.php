@extends('admin.layouts.app')

<!-- Main Content -->
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
                            <h1>Reset Password</h1>
                            @if (session('status'))
                                <div class="alert alert-success">
                                    {{ session('status') }}
                                </div>
                            @endif
                          
                    <form class="form-horizontal" id="forgotForm" name="forgotForm" role="form" method="POST" action="{{ url('/admin/password/email') }}">
                        {{ csrf_field() }}
                    <div class="frm">
                        <div class="input-style{{ $errors->has('email') ? ' has-error' : '' }}">
							<input type="email" placeholder="Email id" class="form-control required" value="{{ old('email') }}" id="email" name="email">
                                    <span class="input-icon msg-icon"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                                @if ($errors->has('email'))
                                    <em class="error">
                                        {{ $errors->first('email') }}
                                    </em>
                                @endif
                            </div>
                        </div>
                        
                        <div class="back_login">
                          <a href="{{ url('/admin/login') }}"> <i class="fa fa-long-arrow-left" aria-hidden="true"></i> Back To Login</a>
                        </div>

                        <div class="frm">
                            <button class="btn btn-login" type="submit">
                                Send Password Reset Link
                            </button>
                        </div>
                        
                    </form>
               </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection