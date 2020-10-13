<?php


namespace App\Interfaces;


interface ResponseHandlerInterface
{
    public function make($response,$code);
    public function make200($response);
    public function make400($response);
    public function make401($response);
    public function make403();
    public function make404($response);
    public function make500($response);
}
