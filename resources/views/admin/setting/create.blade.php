@extends('admin.layouts.master')

@section('content')    
<div class="patten-content">
<div class="content">
   @if (session('successMsg'))
       <div class="alert alert-success">
           <i class="fa fa-check"></i>
           <div id="message">{{ session('successMsg') }}</div>
           <div class="close"><i class="fa fa-times"></i></div>
       </div>
   @endif
   @if (session('errorMsg'))
       <div class="alert alert-danger">
           <i class="fa fa-exclamation-triangle"></i>
           <div id="message">{{ session('errorMsg') }}</div>
           <div class="close"><i class="fa fa-times"></i></div>
        </div>
   @endif
    @if ($errors->any())
        <div class="alert alert-danger">
           <i class="fa fa-exclamation-triangle"></i>
           <div id="message">{{ implode('', $errors->all(':message')) }}</div>
           <div class="close"><i class="fa fa-times"></i></div>
        </div>
    @endif
    <div class="head clearfix">
        <div class="title fl">
            <h2>Settings</h2>
        </div>
         
    </div>
    <div class="form">
        <form class="form" method="POST"  enctype="multipart/form-data" id="setting" name="setting" action="{{ url('admin/settings/'.$action)}}">
        <input type="hidden" name="_token" value="{{ csrf_token() }}">
        <div class="form-row">
            <div class="form-cell">
                <div class="form-group">
                    <label class="form-label"><em>*</em>Name</label>
                    <input type="text" class="form-control required" value="{{ $admin->name }}" id="name" name="name" placeholder="Enter First Name">
                </div>
            </div>
            
            <div class="form-cell">
                <div class="form-group">
                    <label class="form-label"><em>*</em> Email</label>
                    <input type="email" class="form-control required" value="{{ $admin->email }}" id="email" name="email" placeholder="Enter Email">
                </div>
            </div> 
        </div>
        <div class="form-row">
            <div class="form-cell">
                <div class="form-group">
                    <label class="form-label">Change Password</label>
                    <input type="password" class="form-control" value="" id="password" name="password" >
                </div>
            </div>
        </div>
        <div class="btn-submit">
            <button class="fr-btn btn-bg" type="submit" id="btnSubmit"><span>Save</span></button>
            <button class="fr-btn btn-delete" type="button" id="btnCancel" onclick="backtolist()"><span>Cancel</span></button>
        </div>
        </form>
        
    
</div>

</div>               
<!--<script type="text/javascript" src="{{asset('assets/admin/js/pages/setting.js')}}"></script>-->
@endsection
