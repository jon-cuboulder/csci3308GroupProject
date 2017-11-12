<?php

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\User;

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

// Handle preflight OPTIONS requests for CORS
Route::options('{all}', function (Request $request, Response $response) {
  $response->header('Access-Control-Allow-Origin', '*');
  $response->header('Access-Control-Allow-Headers', 'origin, content-type, accept');
  $response->header('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PATCH, DELETE');
  return $response;
})->where('all', '.*');

Route::middleware(['cors'])
  ->post('/login', function (Request $request) {
    $qry = [
      'email' => $request->input('email'),
      'password' => $request->input('password')
    ];

    if(Auth::attempt($qry)) {
      $user = User::where(['email' => $request->input('email')])->first();
      return response()->json($user->toArray());
    }

    return response()->json(['err' => 'Unable to auth'], 401);
  });

Route::middleware(['cors'])
  ->post('/users', function (Request $request) {
    // handler to create a user
    $user = new User;
    $user->name = $request->input('name');
    $user->email = $request->input('email');
    $user->password = bcrypt($request->input('password'));
    $user->save();

    return response()->json($user->toArray());
  });

Route::apiResource('/resources', 'resourceController');
Route::apiResource('/topics', 'topicController');
