<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
      ];

    public function resources() {
      return $this->hasMany('App\Models\Resource');
    }

    public function topics() {
      return $this->hasMany('App\Models\Topic');
    }

    public function votes() {
      return $this->hasMany('App\Models\Vote');
    }
}
