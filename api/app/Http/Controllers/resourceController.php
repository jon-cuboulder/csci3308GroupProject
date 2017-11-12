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
    //returns list of all entries in table
    public function index(){
        return response()->json(Resource::all());
    }


    // POST /resource
    // updates/creates resource
    public function store(Request $request){
        $newResource = Resource::updateOrCreate(
            ['name' => $request->input('name'),
                'user_id' => $request->input('user_id')],
            ['abstract' => $request->input('abstract'),
                'votes' => $request->input('votes')] // New resource therefore no one has voted for it yet
        );
        return response()->json($newResource);
    }

    // GET /resource/{resource}
    // returns info on a specific resource
    public function show($id){
        return response()->json(Resource::find($id));
    }


    // PUT/PATCH /resource/{resource}
    public function update($id){

    }

    // DELETE /resource/{resource}
    // delete a resource
    public function destroy($id){
        $resource = Resource::find($id);
        $resource->delete();
    }
}
