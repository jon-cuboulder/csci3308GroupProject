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

        if ($request->input('type') === 'down' && $vote->id) {
            $vote->delete();
            Log::info('vote deleted');
        } else if ($request->input('type') === 'up' && !$vote->id) {
            $vote->save();
            Log::info('vote created');
        } else {
            return response()->json([]);
        }

        return response()->json($vote);
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
}
