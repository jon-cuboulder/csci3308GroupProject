<?php

namespace App\Http\Controllers;

use App\Models\Resource;
use Illuminate\Http\Request;

class resourceController extends Controller
{
    public function __construct() {
        $this->middleware('cors');
    }

    // GET /resource
    // returns list of all entries in table
    public function index(){
        return response()->json(Resource::all());
    }


    // POST /resource
    // creates resource
    public function store(Request $request) {
        $newResource = new Resource;
        $newResource->name = $request->input('name');
        $newResource->abstract = $request->input('abstract');
        $newResource->user_id = $request->input('user_id');
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
