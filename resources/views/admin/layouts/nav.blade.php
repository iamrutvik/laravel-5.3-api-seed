<nav class="nav">
    <ul class="menu">
        <?php $module =  Request::segment(2);  ?>
        <li class="<?php if($module=='home') {echo 'active';}?>"><a href="{{ url('admin/home') }}">Home</a></li>
        <li class="<?php if($module=='users') {echo 'active';}?>"><a href="{{ url('admin/users') }}">Users</a></li>
    </ul>
</nav>