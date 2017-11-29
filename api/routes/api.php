<?php

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\User;
use App\Cors;

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
    $response->header('Access-Control-Allow-Origin', Cors::$origin);
    $response->header('Access-Control-Allow-Headers', Cors::$headers);
    $response->header('Access-Control-Allow-Methods', Cors::$methods);
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

Route::apiResources([
    '/resources' => 'resourceController',
    '/topics' => 'topicController',
    '/comments' => 'CommentController',
    '/users' => 'UserController',
    '/votes' => 'VoteController'
]);
