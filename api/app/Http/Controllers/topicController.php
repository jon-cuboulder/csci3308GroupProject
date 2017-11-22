<?php

namespace App\Http\Controllers;

use App\Models\Topic;
use Illuminate\Http\Request;
use JWTAuth;

class topicController extends Controller
{
    public function __construct() {
        $this->middleware('cors');
        $this->middleware('jwt.auth')->only(['store', 'update', 'destroy']);
    }

    public function index(Request $request){
        if($qry = $request->query('q')) {
            $qry .= '%';
            $topics = Topic::where('name', 'like', $qry)
                ->orderBy('name', 'asc')
                ->get();
        } else {
            $topics = Topic::orderBy('name','asc')->get();
        }
        return response()->json($topics);
    }

    public function store(Request $request){
        $user = JWTAuth::parseToken()->authenticate();

        $topic = new Topic;
        $topic->name = $request->input('name');
        $topic->user_id = $user->id;
        $topic->save();

        return response()->json($topic);
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
