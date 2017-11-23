<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class Vote extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'resource' => $this->resources,
            'user_id' => $this->user_id,
            'is_negative' => $this->is_negative
        ];
    }
}
