<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!--<meta name="csrf-token" content="{{ csrf_token() }}">-->

<title><?php echo Config::get('constants.APP_NAME');?></title>

<link rel="stylesheet" href="{{asset('assets/admin/css/font-awesome.min.css')}}">
<link rel="stylesheet" href="{{asset('assets/admin/css/style.css')}}">
<link rel="stylesheet" href="{{asset('assets/admin/css/media.css')}}">

<script type="text/javascript" src="{{asset('assets/admin/js/jquery-2.1.4.js')}}"></script>
<script type="text/javascript" src="{{asset('assets/admin/js/jquery.validate.min.js')}}"></script>
<script type="text/javascript" src="{{asset('assets/admin/js/additional-methods.min.js')}}"></script>

<link href='https://fonts.googleapis.com/css?family=Archivo+Narrow:400,400italic,700,700italic' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,700,600italic,700italic' rel='stylesheet' type='text/css'>
</head>
<body id="app-layout">
    @yield('content')
<?php if(!Request::segment(3) == 'reset'){ ?>
<script type="text/javascript" src="{{asset('assets/admin/js/custom.js')}}"></script>
<?php  } ?>
<script type="text/javascript" src="{{asset('assets/admin/js/common.js')}}"></script>
<script type="text/javascript" src="{{asset('assets/admin/js/select2.min.js')}}"></script>
<script type="text/javascript" src="{{asset('assets/js/jquery.datetimepicker.full.js')}}"></script>
</body>
</html>
