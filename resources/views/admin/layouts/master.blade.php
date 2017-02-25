@include('admin.layouts.inner')
<body>
    <div id="page" class="page">
        @include('admin.layouts.header')
        <div class="innerpage-content">
                <div class="wrapper">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    @include('admin.layouts.nav')
                    @yield('content')
                </div>
        </div>
        @include('admin.layouts.footer')
    </div>

@include('admin.layouts.scripts')
</body>
</html>
