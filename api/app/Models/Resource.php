<?php
/**
 * Created by PhpStorm.
 * User: 92fiv
 * Date: 11/11/2017
 * Time: 8:26 PM
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Resource extends Model
{
    protected $table = 'resources';
    protected $fillable = [
        'name',
        'url',
        'abstract',
        'user_id',
        'topic_id'
    ];

    public function comments() {
        return $this->hasMany('App\Models\Comment');
    }

    public function votes() {
        return $this->hasMany('App\Models\Vote');
    }
}
