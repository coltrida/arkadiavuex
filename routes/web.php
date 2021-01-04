<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('homevuex');
//});

Route::view('/', 'homevuex');
Route::view('/{any}', 'homevuex');
// e anche un secondo livello di rotta per il metodo show ad esempio
Route::view('/{any}/{any1}', 'homevuex');

/*Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');*/
