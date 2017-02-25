<header class="header">
        <div class="wrapper clearfix">
                <div class="logo fl">
            <a href="{{ url('/admin/home') }}" title="Auto Assist">
                <img src="{{asset('assets/admin/images/logo.png')}}" alt="">
            </a>
        </div>
        <div class="admin-user fr">
                <a href="#" class="user-dropmenu">
                        <span class="user-image"><img src="{{asset('assets/admin/images/user-image.png')}}" alt=""></span>
                <strong>Welcome,</strong>
                <?php echo Auth::user()->name; ?> <span class="drop-icon"><img src="{{asset('assets/admin/images/droparrow.png')}}" alt=""></span>
            </a>
            <div class="user-popup clearfix">
              <ul>
                <li><a href="{{ url('/admin/settings') }}"> <i class="fa fa-cog"></i> Settings </a></li>
                <li><a href="{{ url('/admin/logout') }}"> <i class="fa fa-power-off"></i> logout </a></li>
              </ul>
            </div>
        </div>
    </div>
</header>
