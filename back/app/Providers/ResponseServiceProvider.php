<?php

namespace App\Providers;

use App\Interfaces\ResponseHandlerInterface;
use App\Services\ResponseHandler;
use Illuminate\Support\ServiceProvider;

class ResponseServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ResponseHandlerInterface::class,ResponseHandler::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
