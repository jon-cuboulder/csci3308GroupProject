<?php

use Illuminate\Http\Request;
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

Route::middleware(['cors'])
  ->post('/login', function (Request $request) {
    $data = $request->json()->all();
    $qry = [
      'email' => $data['email'],
      'password' => $data['password']
    ];

    if(Auth::attempt($qry)) {
      $user = User::where(['email' => $data['email']])->first();
      return \Response::json($user->toArray());
    }

    return \Response::json(['err' => 'Unable to auth'], 401);
  });

Route::middleware(['cors'])
  ->post('/users', function (Request $request) {
    // handler to create a user
    $data = $request->json()->all();
    $user = new User;
    $user->name = $data['name'];
    $user->email = $data['email'];
    $user->password = bcrypt($data['password']);
    $user->save();

    return \Response::json($user->toArray());
  });

Route::middleware(['cors'])
  ->get('/topics', function (Request $request) {
    // I'm putting the query as /api/topics?q=<qry>
    return \Response::json([ 'results' => [[
      'id' => 5,
      'name' => 'React JS'
    ]] ]);
  });
