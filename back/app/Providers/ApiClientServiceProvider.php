<?php

namespace App\Providers;

use App\Interfaces\ApiClientHandlerInterface;
use App\Services\ApiClientHandler;
use Illuminate\Support\ServiceProvider;

class ApiClientServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ApiClientHandlerInterface::class,ApiClientHandler::class);
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
