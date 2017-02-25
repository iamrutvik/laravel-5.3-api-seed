@extends('admin.layouts.master')

@section('content')
    <div class="content">
     <div class="head clearfix">
        <div class="title fl">
            <h2>User View</h2>
            <input type="hidden" name="_token" value="{{ csrf_token() }}">
        </div>
    </div>
        
    
        <div class="form-row">
            <div class="form-cell">
                <div class="form-group">
                    <label class="form-label">ID</label>
                    <?php echo $user['id'];?>
                </div>
            </div>
            <div class="form-cell">
                <div class="form-group">
                    <label class="form-label">Name</label>
                    <?php echo $user['first_name'].' '.$user['name'];?>
                </div>
            </div>
        </div>
        <div class="form-row">
            <div class="form-cell">
                <div class="form-group">
                    <label class="form-label">Email</label>
                    <?php echo $user['email'];?>
                </div>
            </div>
            <div class="form-cell">
                <div class="form-group">
                    <label class="form-label">Gender</label>
                    <?php echo $user['gender'];?>
                </div>
            </div>
        </div>
        <div class="form-row">
            <div class="form-cell">
                <div class="form-group">
                    <label class="form-label">Date Of Birth</label>
                    <?php echo date('m/d/Y',strtotime($user['dob']));?>
                </div>
            </div>
            <div class="form-cell">
                <div class="form-group">
                    <label class="form-label">Address</label>
                    <?php echo $user['address'] ? $user['address'] : '-';?>
                </div>
            </div>
        </div>
        <div class="form-row">
            <div class="form-cell">
                <div class="form-group">
                    <label class="form-label">Bio</label>
                    <?php echo $user['bio'] ? $user['bio'] : '-';?>
                </div>
            </div>
            <div class="form-cell">
                <div class="form-group">
                    <label class="form-label">Profile Picture</label>
                     <?php if (isset($user->avatar) && $user->avatar != "") { ?>
                     	<div class="previmage"><img src="<?php echo Storage::url(Config::get('constants.STORAGE_S3_PATH_PROFILEPIC'). $user->avatar)?>" /></div>
               		 <?php } ?>
                </div>
            </div>
        </div>
        <div class="form-row">
            <div class="form-cell">
                <div class="form-group">
                    <label class="form-label">Banner Image</label>
                    <?php if (isset($user->banner) && $user->banner != "") { ?>
                    	 <div class="previmage"><img src="<?php echo Storage::url(Config::get('constants.STORAGE_S3_PATH_BANNER'). $user->banner)?>" /></div>
                	<?php } ?>
                </div>
            </div>
            <div class="form-cell">
                <div class="form-group">
                    <label class="form-label">Latitude</label>
                    <?php echo $user['latitude'] ? $user['latitude'] : '0.0';?>
                </div>
            </div>
        </div>
        <div class="form-row">
            <div class="form-cell">
                <div class="form-group">
                    <label class="form-label">Longitude</label>
                    <?php echo $user['longitude'] ? $user['longitude'] : '0.0';?>
                </div>
            </div>
            <div class="form-cell">
                <div class="form-group">
                    <label class="form-label">Postal Code</label>
                    <?php echo $user['postal_code'] ? $user['postal_code'] : '-';?>
                </div>
            </div>
        </div>
        <div class="form-row">
            <div class="form-cell">
                <div class="form-group">
                    <label class="form-label">Is Active ?</label>
                    <?php if($user['is_active'] == '1'){ echo "Yes"; }else{ echo "No";}?>
                </div>
            </div>
        </div>
        
        <div class="btn-submit">
          <button class="fr-btn btn-delete" type="submit" id="btnCancel" onclick="backtolist()"><span>Back</span></button>
        </div>
    
    </div>
@endsection
