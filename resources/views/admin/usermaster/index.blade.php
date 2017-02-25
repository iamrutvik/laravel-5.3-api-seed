@extends('admin.layouts.master')

@section('content')
        <div class="patten-content">
            <input type="hidden" name="_token" value="{{ csrf_token() }}">
            <div class="content">
                
                <div class="head_filter">
                    <div class="head">
                        <div class="clearfix">
                            <div class="title fl">
                                <h2>Users</h2>
                            </div>
                            <div class="right_head">
                                <form id="frm_search" name="frm_search" action="{{url('/admin/users')}}" method="get">    
                                    <div class="input-search">
                                        <i class="icon-search"></i>
                                        <input type="text" class="search-feild" name="keyword" placeholder="Search" id="textSearch" value="<?php echo app('request')->input('keyword');?>">
                                        <a href="#" class="clear_search" id="clearSearch"></a>
                                    </div>	
                                    <div class="input-search">
                                        <button class="btn-search btn-bg" id="btnSearch" type="submit">Search</button>
                                    </div>
                                    <div class="filter">
                                        <span class="filter-toggle btn-bg">
                                            <i class="fa fa-filter"></i>
                                            <i class="fa fa-times"></i>
                                       </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="filter-toggleslide">
                        <div class="filter-frm">
                            
                            <div class="filter-item">
                                &nbsp;
                            </div>
                            
                            <div class="filter-item">
                                &nbsp;
                            </div>
                            
                            <div class="filter-item">
                                &nbsp;
                            </div>
                            
                            <div class="filter-item">
                                <select class="input-feild no-search" id="searchStatus" onchange="filter_active(this.value);">
                                    <option value=" ">Status</option>
                                    <option value="1" <?php if(app('request')->input('status') && app('request')->input('status') == "1" ){echo "selected='selected'";}?>>Active</option>
                                    <option value="0" <?php if(app('request')->input('status') == "0" ){echo "selected='selected'";}?>>Inactive</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
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
                 </br>
                <input type="hidden" value="id" id="fieldName" name="fieldName">
                <input type="hidden" value="desc" id="orderType" name="orderType">
                <div class="table_listing">
                <div class="table-header clearfix">                
                    <div class="btn-perform fl">
                    <?php if (isset($users) && count($users) > 0) { ?>
						<a href="{{ url('/admin/users/add') }}" class="btn-delete btn-bg"> <i class="fa fa-plus"></i> ADD</a>
                        <!--<a href="javascript:void(0)" onclick="deleteData('users','');" class="btn-add btn-bg"><i class="fa fa-times"></i>DELETE</a>-->
                        <a href="{{ url('/admin/users/exportData') }}" class="btn-add btn-bg"><i class="fa fa-file-excel-o"></i>EXPORT</a>
                        <a href="javascript:void(0)" onclick="changeStatus('users','1','');" class="btn-export btn-bg"> <i class="fa fa-check"></i> Active</a>
                        <a href="javascript:void(0)" onclick="changeStatus('users','0','');" class="btn-delete btn-bg"><i class="fa fa-times"></i>Inactive</a>
                    <?php }else{ ?>
                    	<a href="{{ url('/admin/users/add') }}" class="btn-delete btn-bg"> <i class="fa fa-plus"></i> ADD</a>
                	<?php } ?>
                    </div>
                </div>
                <div class="table-container" id="usersListing">
                   
                    @include('admin.usermaster.partials.listing')
                   
                </div>
             
                <div class="table-footer clearfix">
                    <div class="btn-perform fl">
                    <?php if (isset($users) && count($users) > 0) { ?>
	                    <a href="{{ url('/admin/users/add') }}" class="btn-delete btn-bg"> <i class="fa fa-plus"></i> ADD</a>
                        <!--<a href="javascript:void(0)" onclick="deleteData('users','');" class="btn-add btn-bg"><i class="fa fa-times"></i>DELETE</a>-->
                        <a href="{{ url('/admin/users/exportData') }}" class="btn-add btn-bg"><i class="fa fa-file-excel-o"></i>EXPORT</a>
                        <a href="javascript:void(0)" onclick="changeStatus('users','1','');" class="btn-export btn-bg"> <i class="fa fa-check"></i> Active</a>
                        <a href="javascript:void(0)" onclick="changeStatus('users','0','');" class="btn-delete btn-bg"><i class="fa fa-times"></i>Inactive</a>
                    <?php }else{ ?>
                   		<a href="{{ url('/admin/users/add') }}" class="btn-delete btn-bg"> <i class="fa fa-plus"></i> ADD</a>
                	<?php } ?>
                    </div>
                </div>	
            </div>
            </div>
        </div>
@endsection
