<?php


namespace App\Services;

use App\Interfaces\ResponseHandlerInterface;

class ResponseHandler implements ResponseHandlerInterface
{

    public function make200($response)
    {
        return response()->json($response, 200);
    }

    public function make($response,$code)
    {
        return response()->json($response, $code);
    }

    public function make400($response)
    {
        $data = [
            'code' => 'error',
            'response' => $response
        ];
        return response()->json($data, 400);
    }

    public function make401($response)
    {
        $data = [
            'code' => 'error',
            'response' => $response
        ];
        return response()->json($data, 401);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function make403()
    {
        $data = [
            'code' => 'error',
            'response' => 'Unauthorized'
        ];
        return response()->json($data, 403);
    }
    public function make404($response)
    {
        $data = [
            'code' => 'error',
            'response' => $response
        ];
        return response()->json($data, 404);
    }

    public function make500($response)
    {
        $data = [
            'code' => 'error',
            'response' => $response
        ];
        return response()->json($data, 500);
    }
}
