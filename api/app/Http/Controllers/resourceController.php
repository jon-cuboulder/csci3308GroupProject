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
        return "heelo";
    }

    // POST /resource
    // updates/creates resource
    public function store(Request $request){
        //return $request->input('votes');
        Resource::updateOrCreate(
            ['name' => $request->input('name'),
                'user_id' => $request->input('user_id')],
            ['abstract' => $request->input('abstract'),
                'votes' => $request->input('votes')] // New resource therefore no one has voted for it yet
        );
        return "succesfully added";
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
        return "SUP";
    }

    // DELETE /resource/{resource}
    // delete a resource
    public function destroy($id){
        $resource = Resource::find($id);
        $resource->delete();
    }
}
