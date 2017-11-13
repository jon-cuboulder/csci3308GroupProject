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
        'abstract',
        'votes',
        'user_id',
        'topic_id'
    ];
}
