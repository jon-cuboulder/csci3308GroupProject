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
  $response->header('Access-Control-Allow-Headers', 'origin, content-type, accept, authorization');
  $response->header('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PATCH, DELETE');
  return $response;
})->where('all', '.*');

// https://github.com/tymondesigns/jwt-auth/wiki/Creating-Tokens
Route::middleware(['cors'])
  ->post('/login', function (Request $request) {
    // grab credentials from the request
    $credentials = $request->only('email', 'password');

    try {
      // attempt to verify the credentials and create a token for the user
      if (! $token = JWTAuth::attempt($credentials)) {
        return response()->json(['error' => 'invalid_credentials'], 401);
      }
    } catch (JWTException $e) {
      // something went wrong whilst attempting to encode the token
      return response()->json(['error' => 'could_not_create_token'], 500);
    }

    // all good so return the token
    return response()->json(compact('token'));
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
