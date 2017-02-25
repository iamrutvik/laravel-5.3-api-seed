@if (! $users->isEmpty())
<table id="tableData" class="table_saller table-responsive" width="100%" cellspacing="0">
    <thead>
        <tr>
            
            <th class="th-check">
                <label class="checkbox">
                    <input type="checkbox" class="check maincheckbox" value="">
                </label>
            </th>

            <th align="center" style="width:150px;">
                <a href="javascript:void(0);" data-id="1" onclick="sort_order('name');">Name
                    <?php if (app('request')->input('sf') && app('request')->input('sf') == "name" && app('request')->input('so') && app('request')->input('so') == "asc") { ?>
                                                <i class="fa fa-sort-asc"></i>
                                            <?php } else if (app('request')->input('sf') && app('request')->input('sf') == "name" && app('request')->input('so') && app('request')->input('so') == "desc") { ?>
                                                <i class="fa fa-sort-desc"></i>
                    <?php } else { ?>
                                                <i class="fa fa-sort"></i>
                                            <?php } ?>
                </a>
            </th>
            
                                    
            <th align="center">
                <a href="javascript:void(0);" data-id="1" onclick="sort_order('email');">Email
                    <?php if (app('request')->input('sf') && app('request')->input('sf') == "email" && app('request')->input('so') && app('request')->input('so') == "asc") { ?>
                                                <i class="fa fa-sort-asc"></i>
                                            <?php } else if (app('request')->input('sf') && app('request')->input('sf') == "email" && app('request')->input('so') && app('request')->input('so') == "desc") { ?>
                                                <i class="fa fa-sort-desc"></i>
                    <?php } else { ?>
                                                <i class="fa fa-sort"></i>
                                            <?php } ?>
                </a>
            </th>
            
            <th align="center">
                <a href="javascript:void(0);" data-id="1" onclick="sort_order('gender');">Gender
                    <?php if (app('request')->input('sf') && app('request')->input('sf') == "gender" && app('request')->input('so') && app('request')->input('so') == "asc") { ?>
                                                <i class="fa fa-sort-asc"></i>
                                            <?php } else if (app('request')->input('sf') && app('request')->input('sf') == "gender" && app('request')->input('so') && app('request')->input('so') == "desc") { ?>
                                                <i class="fa fa-sort-desc"></i>
                    <?php } else { ?>
                                                <i class="fa fa-sort"></i>
                                            <?php } ?>
                </a>
            </th>
 
            <th align="center" style="width:150px;">
                <a href="javascript:void(0);" data-id="1" onclick="sort_order('is_active');">Is Active
                    <?php if (app('request')->input('sf') && app('request')->input('sf') == "is_active" && app('request')->input('so') && app('request')->input('so') == "asc") { ?>
                                                <i class="fa fa-sort-asc"></i>
                                            <?php } else if (app('request')->input('sf') && app('request')->input('sf') == "is_active" && app('request')->input('so') && app('request')->input('so') == "desc") { ?>
                                                <i class="fa fa-sort-desc"></i>
                    <?php } else { ?>
                                                <i class="fa fa-sort"></i>
                                            <?php } ?>
                </a>
            </th>
            
            <th>Actions</th>
        </tr>
    </thead>
   <tbody>
     @foreach($users as $user)
     <?php
     if($user->is_verified == 1){
        $verify  = "Yes"; }
     else{
        $verify  = "No"; 
     }?>
        <tr>
            <td align="center" style="width:50px;">
                <label class="checkbox">
                    <input type="checkbox" class="check" value="{{ $user->id }}">
                </label>
            </td>
            
            <td align="center"><a href="{{ url('admin/users/view').'/'.$user->id }}" title="View"><?php echo ucfirst($user->name);?></a></td>
            
            <td align="center">{{ $user->email }}</td>
            <td align="center">{{ ucfirst($user->gender) }}</td>

            @if(isset($user->is_active) && $user->is_active == '1')
                <td align="center" style="width:110px;"><a href="javascript:void(0)" onclick="changeStatus('users','0',{{ $user->id }});" class="chk_status active">Active</a></td>
            @else
                <td align="center" style="width:110px;"><a href="javascript:void(0)" onclick="changeStatus('users','1',{{ $user->id }});" class="chk_status">Inactive</a></td>
            @endif
            
            <td align="center" class="column-action" style="width:100px;">
                <a href="{{ url('admin/users/edit').'/'.$user->id }}" title="Update"><i class="fa fa-pencil-square-o"></i></a>
                <a href="{{ url('admin/users/view').'/'.$user->id }}" title="View"><i class="fa fa-eye"></i></a>
<!--            <a href="javascript:void(0)" onclick="deleteData('user',{{ $user->id }});" title="Delete"><i class="fa fa-trash"></i></a>-->
            </td>
        </tr>
        @endforeach
</tbody>
</table>
@else
	<p>Sorry! There is no product category currently available</p>
@endif

<?php 
    $users->setPath('users');
    ?>
    @include('admin.layouts.pagination', ['paginator' => $users])
    
