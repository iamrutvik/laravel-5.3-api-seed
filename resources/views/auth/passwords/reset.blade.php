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
                        <h1>Login</h1>
                        <form id="resetForm" name="resetForm" action="{{ url('/admin/password/reset') }}" class="form" role="form" method="POST">
                            <input type="hidden" name="_token" value="{{ csrf_token() }}">
                            <input type="hidden" name="token" value="{{ $token }}">
                            <div class="frm">
                                <div class="input-style{{ $errors->has('email') ? ' has-error' : '' }}">
                                    <input type="email" placeholder="Email id" class="form-control required" value="{{ $email or old('email') }}" id="email" name="email">
                                    <span class="input-icon msg-icon"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                                    @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>
                            <div class="frm">
                                <div class="input-style{{ $errors->has('password') ? ' has-error' : '' }}">
                                    <input id="password" placeholder="Password" type="password" class="form-control required" name="password">
                                    <span class="input-icon pass-icon"><i class="fa fa-lock" aria-hidden="true"></i></span>
                                    @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>
                            <div class="frm">
                                <div class="input-style{{ $errors->has('password_confirmation') ? ' has-error' : '' }}">
                                    <input id="password-confirm" placeholder="Confirm Password" type="password" class="form-control required" name="password_confirmation">
                                    <span class="input-icon pass-icon"><i class="fa fa-lock" aria-hidden="true"></i></span>
                                    @if ($errors->has('password_confirmation'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password_confirmation') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>

                            <div class="frm">
                                <button type="submit" class="btn btn-login">
                                    Reset Password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    var token = '{{$token}}';
    if("standalone" in window.navigator){
        window.location.replace('nytevibe://resetpassword?token='+token);

        setTimeout(function(){
            var userAgent = navigator.userAgent || navigator.vendor || window.opera;
            //alert(userAgent);
            if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
            {
                window.location.replace('http://www.apple.com/itunes/');
            }
            else if( userAgent.match( /Android/i ) )
            {
                window.location.replace('https://play.google.com/store/apps');
            }else{
                if(userAgent.match( /Macintosh/i )){
                    window.location.replace('http://www.apple.com/itunes/');
                }else{
                    window.location.replace('https://play.google.com/store/apps');
                }
            }
        }, 9000);

    }else{
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
        {
            window.location.replace('http://www.apple.com/itunes/');
        }
        else if( userAgent.match( /Android/i ) )
        {
            window.location.replace('https://play.google.com/store/apps');
        }else{
            if(userAgent.match( /Macintosh/i )){
                window.location.replace('http://www.apple.com/itunes/');
            }else{
                window.location.replace('https://play.google.com/store/apps');
            }
        }
    }
</script>
@endsection