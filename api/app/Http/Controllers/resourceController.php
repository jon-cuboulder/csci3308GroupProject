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

    // GET /api/resource
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
    public function update($id){

    }

    // DELETE /api/resource/{id}
    // delete a resource
    public function destroy($id){
        $resource = Resource::find($id);
        $user = JWTAuth::parseToken()->authenticate();
        if($user == $resource -> user_id);
        {
            $resource->delete();
        }
        else
        {
            throw new error('Error 403');
        }
        // todo: make sure user can delete this resource -- if they can't respond 403
        

        // todo: figure out how to respond 204 (success but no body) when successful
        return response();
    }
}
