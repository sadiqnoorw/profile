<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ForgotController;
use App\Http\Controllers\HelloController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/hello', [HelloController::class, 'hello']);
Route::post('/forgot', [ForgotController::class, 'forgot']);
Route::post('/reset', [ForgotController::class, 'reset']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

Route::middleware('auth:api')->get('/user', [AuthController::class, 'user']);
