<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vote extends Model
{
    protected $table = 'votes';
    protected $fillable = [
        'resource_id',
        'user_id',
        'is_negative'
      ];

    public function resources() {
      return $this->belongsTo("App\Models\Resource", "resource_id", "id");
    }
}

