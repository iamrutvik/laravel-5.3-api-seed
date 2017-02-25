@extends('admin.layouts.master')
@section('content')
    <div class="patten-content">
    <div class="content">
        <div class="dashboard">
            <ul class="dashgrid">
                <li>
                  <div class="rd_theme panel panel-primary">  
                    <a class="dashbox" href="{{ url('/admin/users') }}">
                        <div class="dash-content">
                          <div class="panel-heading">  
                            <div class="dash_icon">
                                <i class="fa fa-user" aria-hidden="true"></i>
                            </div>
                          </div>  
                          <div class="panel-footer">
                            <div class="title">Users</div>
                            <div class="pull-left read_icon"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
                          </div>  
                        </div>
                    </a>
                  </div>  
                </li>
                
            </ul>
        </div>
    </div>
</div>
@stop