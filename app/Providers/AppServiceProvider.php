<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Response;
use Validator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {

        if(config('app.secure')){
            $this->app['request']->server->set('HTTPS','on');
        }

        app('Dingo\Api\Exception\Handler')->register(function (\Dingo\Api\Exception\ValidationHttpException $exception) {

            $message = array_first($exception->getErrors()->all());
            return Response::make([
                'success' => false,
                'message' => $message,
                'errors' => $exception->getErrors(),
                'data' => []
            ], 422);
        });

        app('Dingo\Api\Exception\Handler')->register(function (\Symfony\Component\HttpKernel\Exception\HttpException $exception) {

            return Response::make([
                'success' => false,
                'message' => $exception->getMessage(),
                'errors' => (object)[],
                'data' => []
            ], $exception->getStatusCode());
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
