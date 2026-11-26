<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoveLetterController;

Route::get('/', [LoveLetterController::class, 'index']);