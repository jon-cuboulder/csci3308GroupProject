<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class TopicResource extends Resource
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
            'resources' => ResourceCollection::collection($this->resources),
            'name' => $this->name
        ];
    }
}
