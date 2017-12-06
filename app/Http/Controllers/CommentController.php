<?php

namespace App\Http\Controllers;

use App\Http\Resources\Comment as CommentResource;
use App\Models\Comment;
use Illuminate\Http\Request;
use JWTAuth;
use Illuminate\Support\Facades\Log;

class CommentController extends Controller
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

        $comment = new Comment;
        $comment->user_id = $user->id;
        $comment->resource_id = $request->input('resource_id');
        $comment->text = $request->input('text');
        $comment->save();

        return response()->json(new CommentResource($comment));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function show(Comment $comment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Comment $comment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Comment $comment)
    {
        //
    }
}
