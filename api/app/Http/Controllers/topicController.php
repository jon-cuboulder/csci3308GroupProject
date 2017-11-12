<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Topic;

class topicController extends Controller
{
    public function index(){
        return json_encode(Topic::all());
    }

    public function store(Request $request){
        Topic::updateOrCreate(
            ['name' => $request->input('name')]
        );
        return "successfully added Topic";
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
