<?php

namespace App\Http\Controllers;

use App\Models\Topic;
use Illuminate\Http\Request;

class topicController extends Controller
{
    public function __construct() {
        $this->middleware('cors');
        $this->middleware('jwt.auth')->only(['store', 'update', 'destroy']);
    }

    public function index(){
        return response()->json(Topic::all());
    }

    public function store(Request $request){
        $newtopic = Topic::updateOrCreate(
            ['name' => $request->input('name')]
        );
        return response()->json($newtopic);
    }


    public function show($id){
        $topic = Topic::find($id);
        // make sure resources are loaded so they are included in the response
        $resources = $topic->resources;
        return response()->json($topic);
    }

    public function update($id){

    }


    public function destroy($id){
        $resource = Topic::find($id);
        $resource->delete();
    }
}
