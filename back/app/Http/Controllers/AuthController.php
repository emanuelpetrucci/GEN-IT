<?php

namespace App\Http\Controllers;

use App\Interfaces\ResponseHandlerInterface;
use App\Services\ApiClientHandler;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{

    /**
     * @var ResponseHandlerInterface
     */
    private $responseHandler;
    /**
     * @var ApiClientHandler
     */
    private $apiClientHandler;

    /**
     * AuthController constructor.
     * @param ResponseHandlerInterface $responseHandler
     * @param ApiClientHandler $apiClientHandler
     */
    public function __construct(ResponseHandlerInterface $responseHandler, ApiClientHandler $apiClientHandler)
    {
        $this->responseHandler = $responseHandler;
        $this->apiClientHandler = $apiClientHandler;
    }

    /**
     * register of users
     * TODO Password
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $req = array_map('trim', $request->all());
        /**
         * TODO this validator should by generic by key de array
         */
        $validate = Validator::make($req, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'phone' => ['required', 'numeric', 'digits_between:7,11'],
        ]);

        if ($validate->fails()) {
            return $this->responseHandler->make400($validate->errors()->first());
        } else {
            try {
                $user = User::create([
                    'name' => $req['name'],
                    'email'=> $req['email'],
                    'phone'=> $req['phone'],
                ]);
                return $this->responseHandler->make200([
                    'id' => $user->id,
                    'createAt' => $user->created_at->format('d-m-Y'),
                    'name' => $user->name,
                    'email'=> $req['email'],
                    'phone'=> $req['phone'],
                ]);
            } catch (\Exception $e) {
                return $this->responseHandler->make500('Ocurrio un error al crear el usuario');
            }
        }
    }
}
