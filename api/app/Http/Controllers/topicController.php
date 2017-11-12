<?php

namespace App\Http\Controllers;

use App\Models\Topic;
use Illuminate\Http\Request;

class topicController extends Controller
{
    public function __construct() {
        $this->middleware('cors');
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
        return response()->json(Topic::find($id));
    }

    public function update($id){

    }


    public function destroy($id){
        $resource = Topic::find($id);
        $resource->delete();
    }
}
