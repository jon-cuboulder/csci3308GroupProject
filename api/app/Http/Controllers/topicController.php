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
        return json_encode(Topic::all());
    }

    public function store(Request $request){
        $newtopic = Topic::updateOrCreate(
            ['name' => $request->input('name')]
        );
        return json_encode($newtopic);
    }


    public function show($id){
        return json_encode(Topic::find($id));
    }

    public function update($id){

    }


    public function destroy($id){
        $resource = Topic::find($id);
        $resource->delete();
    }
}
