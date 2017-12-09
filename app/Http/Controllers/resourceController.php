<?php

namespace App\Http\Controllers;

use App\Http\Resources\ResourceCollection;
use App\Models\Resource;
use Illuminate\Http\Request;
use JWTAuth;

class resourceController extends Controller
{
    public function __construct() {
        $this->middleware('cors');
        $this->middleware('jwt.auth');
    }

    // GET /resource
    // returns list of all entries in table
    public function index(){
        return response()->json(Resource::all());
    }


    // POST /resource
    // creates resource
    public function store(Request $request) {
        $user = JWTAuth::parseToken()->authenticate();
        
        $newResource = new Resource;
        $newResource->name = $request->input('name');
        $newResource->url = $request->input('url');
        $newResource->abstract = $request->input('abstract');
        $newResource->user_id = $user->id;
        $newResource->topic_id = $request->input('topic_id');
        $newResource->save();

        return response()->json(new ResourceCollection($newResource));
    }

    // GET /resource/{id}
    // returns info on a specific resource
    public function show($id){
        return response()->json(Resource::find($id));
    }


    // PUT/PATCH /resource/{id}
    public function update($id, Request $request){
        $user = JWTAuth::parseToken()->authenticate();
        $resource = Resource::find($id);
        if($user->id != $resource->user_id) {
            return response()->json(['error' => 'Forbidden',],403);
        }
        $resource->name = $request->input('name');
        $resource->save();
        return response()->json(new ResourceCollection($resource));
    }

    // DELETE /resource/{resource}
    // delete a resource
    public function destroy($id){
        $resource = Resource::find($id);
        $user = JWTAuth::parseToken()->authenticate();

        if($user->id != $resource->user_id) {
            return response()->json(['error' => 'Forbidden',],403);
        }

        $resource->DELETE();
        return response()->json([],204);
    }
}
