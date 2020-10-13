<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;

    protected $table = 'cars';
    protected $fillable = [
        'ownerId',
        'carId',
        'title',
        'doors',
        'cost',
        'url',
        'fuelType',
        'description',
        'modelDescription',
        'brandDescription',
        'placeDescription',
        'latitude',
        'longitude',
        'location',
        'calificationsAvg',
        'currency',
        'year'
    ];
}
