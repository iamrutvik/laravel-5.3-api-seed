@extends('admin.layouts.master')
@section('content')    
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
            @if($action == 'update')
            <h2>Update User</h2>
            @else
            <h2>Add User</h2>
            @endif
        </div>
    </div>
    <div class="form">
        @if($action == 'update')
        <form class="form" method="POST"  enctype="multipart/form-data" id="addUser" name="addUser" action="{{ url('admin/users/'.$action).'/'.$user->id }}">
        @else
        <form class="form" method="POST"  enctype="multipart/form-data" id="addUser" name="addUser" action="{{ action('Admin\UserController@'.$action) }}">
        @endif
        <input type="hidden" name="_token" value="{{ csrf_token() }}">
        <input type="hidden" name="backUrl" value="{{ $backUrl }}">
        <input type="hidden" id="old_photo" name="old_photo" value="{{ $user->avatar }}" />
        <input type="hidden" id="old_banner" name="old_banner" value="{{ $user->banner }}" />
        <div class="form-row">
            <div class="form-cell">
                <div class="form-group">
                    <label class="form-label">Name</label>
                    <input type="text" class="form-control required" value="{{ $user->name or old('name')}}" id="name" name="name">
                </div>
            </div>
            <div class="form-cell">
                <div class="form-group">
                    <label class="form-label">Email</label>
                    <input type="text" class="form-control required" value="{{ $user->email }}" id="email" name="email" value="">
                </div>
            </div>
        </div>
        <div class="form-row">
            
            <div class="form-cell">
                <div class="form-group">
                    <label class="form-label">Gender</label>
                    <label class="radio radio-inline">
                      <input type="radio" class="rdb" name="gender" id="female" value="female" <?php echo (isset($user->gender) && ($user->gender == 'Female' || $user->gender == '')) ? 'checked' : '' ?> > 
                      <span class="radio-label"> Female </span>
                    </label>
                    <label class="radio radio-inline" name="usergender">
                      <input type="radio" class="rdb" name="gender" id="male" value="male" <?php echo (isset($user->gender) && $user->gender == 'Male') ? 'checked' : '' ?> >
                      <span class="radio-label"> Male </span>
                    </label> 
                </div>
            </div>
            
            <div class="form-cell">
                <div class="form-group">
                    <label class="form-label">Date Of Birth</label>
                    <?php if(isset($user->dob) && $user->dob != ""){
                    		$dob = date('m/d/Y',strtotime($user->dob));
							}
							else{
								$dob = "";
							}
                    ?>
                    <input type="datetime" class="form-control" value="{{ old('dob',$dob) }}" id="dob" name="dob">
                </div>
            </div>
        </div>
        
        <div class="form-row">
            <div class="form-cell">
                <div class="form-group">
                    <label class="form-label">Address</label>
                    <textarea class="form-control" id="address" name="address">{{ $user->address or old('address') }}</textarea>
                </div>
            </div>
            
            <div class="form-cell">
                <div class="form-group">
                    <label class="form-label">Bio</label>
                    <textarea class="form-control" id="bio" name="bio">{{ $user->bio or old('bio') }}</textarea>
                </div>
            </div>
        </div>
        
        <div class="form-row">
            <div class="form-cell">
                <div class="form-group">
                    <label class="form-label">Profile Picture</label>
                    <div class="my_file">
                      <input type="file" class="form-control" id="avatar" name="avatar" onchange="setfilename(this.value);">
                      <span class="cus_input" id="setfilename">Upload Profile Picture</span>
                    </div>
                </div>
                <?php if (isset($user->avatar) && $user->avatar != "") { ?>
                     <div class="previmage"><img src="<?php echo Storage::url(Config::get('constants.STORAGE_S3_PATH_PROFILEPIC'). $user->avatar)?>" /></div>
                <?php } ?>
            </div>
            <div class="form-cell">
                <div class="form-group">
                    <label class="form-label">Banner Image</label>
                    <div class="my_file">
                      <input type="file" class="form-control" id="banner" name="banner" onchange="setfilename1(this.value);">
                      <span class="cus_input" id="setfilename1">Upload Profile Picture</span>
                    </div>
                </div>
                <?php if (isset($user->banner) && $user->banner != "") { ?>
                     <div class="previmage"><img src="<?php echo Storage::url(Config::get('constants.STORAGE_S3_PATH_BANNER'). $user->banner)?>" /></div>
                <?php } ?>
            </div>
            
        </div>
        
        <div class="form-row">
            <div class="form-cell">
                <div class="form-group">
                    <label class="form-label">Latitude</label>
                    <input type="text" class="form-control required" value="{{ $user->latitude or old('latitude') }}" id="latitude" name="latitude">
                </div>
            </div>
            <div class="form-cell">
                <div class="form-group">
                    <label class="form-label">Longitude</label>
                    <input type="text" class="form-control required" value="{{ $user->longitude or old('longitude') }}" id="longitude" name="longitude">
                </div>
            </div>
        </div>
        
        <div class="form-row">
            <div class="form-cell">
                <div class="form-group">
                    <label class="form-label">Postal Code</label>
                    <input type="text" class="form-control required" value="{{ $user->postal_code or old('postal_code') }}" id="postal_code" name="postal_code">
                </div>
            </div>
            <div class="form-cell">
                <div class="form-group">
                    <label class="form-label">Is active</label>
                    <label class="radio radio-inline">
                      <input type="radio" class="rdb" name="is_active" id="isactive" value="1" <?php echo (isset($user->is_active) && ($user->is_active == '1' || $user->is_active == '')) ? 'checked' : '' ?> > 
                      <span class="radio-label"> Yes </span>
                    </label>
                    <label class="radio radio-inline" name="cat_type">
                      <input type="radio" class="rdb" name="is_active" id="isinactive" value="0" <?php echo (isset($user->is_active) && $user->is_active == '0') ? 'checked' : '' ?> >
                      <span class="radio-label"> No </span>
                    </label> 
                </div>
            </div>
        </div>
        
      <div class="btn-submit">
      <button class="fr-btn btn-bg" type="submit" id="btnSubmit"><span>Save</span></button>
      <button class="fr-btn btn-delete" type="button" id="btnCancel" onclick="backtolist();"><span>Cancel</span></button>
      </div>  
        
        
        </form>
    
</div>
</div>
@endsection