<?php

namespace App\Console\Commands;

use App\Models\Car;
use App\Services\ApiClientHandler;
use Illuminate\Console\Command;

class UpdateCars extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cars:update';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'update lists cars of the api';

    /**
     * @var ApiClientHandler
     */
    private $apiClientHandler;

    /**
     * Create a new command instance.
     *
     * @param ApiClientHandler $apiClientHandler
     * @return void
     */
    public function __construct(ApiClientHandler $apiClientHandler)
    {
        parent::__construct();
        $this->apiClientHandler = $apiClientHandler;
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        try {
            $cars = $this->apiClientHandler->get('/car_listing_presentation?list_length=100');
            foreach ($cars['carList'] as $car) {
                try {
                    // TODO ownerid is not unique
                    Car::updateOrCreate((array)$car);
                } catch (\Exception $e) {
                    $this->error($e->getMessage());
                }
            }

        }catch (\Exception $e) {
            $this->error($e->getMessage());
        }

        $this->info('Update cars');
        return 1;
    }
}
