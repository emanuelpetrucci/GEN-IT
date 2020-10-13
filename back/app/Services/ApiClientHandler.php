<?php


namespace App\Services;

use App\Interfaces\ApiClientHandlerInterface;
use App\Interfaces\ResponseHandlerInterface;
use Illuminate\Support\Facades\Http;

/**
 * TODO this should be a base class
 *
 * Class ApiClientHandler
 * @package App\Services
 */
class ApiClientHandler implements ApiClientHandlerInterface
{
    private $baseUrl;

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
        $this->baseUrl = env('API_BASE_URL');
    }

    /**
     * @param string $url
     * @return mixed
     * @throws \Exception
     */
    public function get($url = '') {
        // TODO it would be necessary to define attempts, timeout, headers, etc
        $response = Http::get($this->baseUrl.$url);
        return $this->handleResponse($response);
    }

    private function handleResponse(\Illuminate\Http\Client\Response $response)
    {
        if ($response->successful())
        {
            return json_decode($response->body(),true);
        }
        if ($response->failed())
        {
            throw new \Exception($response->body(),$response->status());
        }
    }
}
