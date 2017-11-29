<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Cors;

class CorsTest extends TestCase
{
    public function testAllowsOrigin()
    {
        $response = $this->json('get', '/api/users/1');
        $response->assertHeader('Access-Control-Allow-Origin', Cors::$origin);
    }

    public function testAllowsHeaders()
    {
        $response = $this->json('get', '/api/users/1');
        $response->assertHeader('Access-Control-Allow-Headers', Cors::$headers);
    }

    public function testAllowsMethods()
    {
        $response = $this->json('get', '/api/users/1');
        $response->assertHeader('Access-Control-Allow-Methods', Cors::$methods);
    }
}
