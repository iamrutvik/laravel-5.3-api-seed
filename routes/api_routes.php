<?php

$api = app('Dingo\Api\Routing\Router');

$api->version('v1', ['namespace' => 'App\Api\V1\Controllers', 'domain' => env('API_ROUTE_DOMAIN', 'localhost'), 'middleware' => 'cors'], function ($api) {

    $api->post('auth/login', 'AuthController@login');
    $api->post('auth/signup', 'AuthController@signup');
    $api->post('auth/social', 'AuthController@social');
    $api->post('auth/recovery', 'AuthController@recovery');
    $api->post('auth/reset', 'AuthController@reset');
    $api->post('auth/token', 'AuthController@releaseToken');

});
