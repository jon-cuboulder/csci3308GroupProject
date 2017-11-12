<?php

namespace App\Http\Controllers;

use App\Models\Resource;
use Illuminate\Http\Request;

class resourceController extends Controller
{
    // GET /resource
    //returns list of all entries in table
    public function index(){
        return json_encode(Resource::all());
    }

    // GET /resource/create
    public function create(){
    }

    // POST /resource
    // updates/creates resource
    public function store(Request $request){

        Resource::updateOrCreate(
            ['name' => $request->name,
                'user_id' => $request->user_id],
            ['abstract' => $request->abstract,
                'votes' => $request->votes] // New resource therefore no one has voted for it yet
        );
    }

    // GET /resource/{resource}
    // returns info on a specific resource
    public function show($id){
        return json_encode(Resource::find($id));
    }

    // GET /resource/{resource}/edit
    public function edit($id){

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