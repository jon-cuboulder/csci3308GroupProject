<?php

namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\Resource;

class ResourceCollection extends Resource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        $votes = 0;

        foreach($this->votes as $vote) {
            if($vote->is_negative) {
                $votes--;
            } else {
                $votes++;
            }
        }

        return [
            'id' => $this->id,
            'name' => $this->name,
            'url' => $this->url,
            'abstract' => $this->abstract,
            'votes' => $votes,
            'comments' => Comment::collection($this->comments),
            'user_id' => $this->user_id,
            'topic_id' => $this->topic_id
        ];
    }
}
