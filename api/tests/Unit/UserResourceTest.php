<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\User;
use App\Http\Resources\User as UserResource;

class UserResourceTest extends TestCase
{

    public function testPasswordNotInJson()
    {
        $user = new User();
        $user->password = "foo";

        $json = (new UserResource($user))->toArray(null);
        $this->assertTrue(!isset($json["password"]));
    }

}
