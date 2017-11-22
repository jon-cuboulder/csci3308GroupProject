<?php

namespace App\Http\Controllers;

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
        $newResource->abstract = $request->input('abstract');
        $newResource->user_id = $user->id;
        $newResource->topic_id = $request->input('topic_id');
        $newResource->votes = 0;
        $newResource->save();

        return response()->json($newResource);
    }

    // GET /resource/{id}
    // returns info on a specific resource
    public function show($id){
        return response()->json(Resource::find($id));
    }


    // PUT/PATCH /resource/{id}
    public function update($id){

    }

    // DELETE /resource/{resource}
    // delete a resource
    public function destroy($id){
        $resource = Resource::find($id);
        $resource->delete();
    }
}
