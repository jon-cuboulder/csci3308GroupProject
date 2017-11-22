<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vote;
use JWTAuth;
use Illuminate\Support\Facades\Log;

class VoteController extends Controller
{
    public function __construct() {
        $this->middleware('cors');
        $this->middleware('jwt.auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = JWTAuth::parseToken()->authenticate();
        
        $vote = Vote::firstOrNew([
            'user_id' => $user->id,
            'resource_id' => $request->input('resource_id')
        ]);

        if ($request->input('type') === 'down') {
            return $this->voteDown($vote);
        } else {
            return $this->voteUp($vote);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    private function voteUp($vote) {
        if ($vote->id && !$vote->isNegative) {
            Log::info("Already voted up");
            return response()->json([]);
        } else if ($vote->id && $vote->isNegative) {
            Log::info("Removing down vote");
            $vote->delete();
        } else {
            Log::info("Adding up vote");
            $vote->isNegative = false;
            $vote->save();
        }

        return response()->json($vote);
    }

    private function voteDown($vote) {
        if ($vote->id && $vote->isNegative) {
            Log::info("Already voted down");
            return response()->json([]);
        } else if ($vote->id && !$vote->isNegative) {
            Log::info("Removing up vote");
            $vote->delete();
        } else {
            Log::info("Adding down vote");
            $vote->isNegative = true;
            $vote->save();
        }

        return response()->json($vote);
    }
}
