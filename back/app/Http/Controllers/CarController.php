<?php

namespace App\Http\Controllers;

use App\Helpers\Paginate;
use App\Interfaces\ResponseHandlerInterface;
use App\Models\Car;

class CarController extends Controller
{
    /**
     * @var ResponseHandlerInterface
     */
    private $responseHandler;

    /**
     * @param ResponseHandlerInterface $responseHandler
     */
    public function __construct(ResponseHandlerInterface $responseHandler)
    {
        $this->responseHandler = $responseHandler;
    }

    /**
     * List cars of table 'cars'
     * @return mixed
     */
    public function list() {
        try {
            $cars = Car::paginate(Paginate::PAGINATE);
            return $this->responseHandler->make200($cars ?? []);
        }catch (\Exception $e)
        {
            return $this->responseHandler->make($e->getMessage(),$e->getCode());
        }

    }
}
