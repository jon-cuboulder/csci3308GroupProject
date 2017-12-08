<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Cors;

class CorsTest extends TestCase
{
    /*
     * Test that controllers respond with access control headers
     */
    public function testControllerMiddleware()
    {
        $response = $this->json('get', '/api/users/1');
        $response->assertHeader('Access-Control-Allow-Origin', Cors::$origin);
        $response->assertHeader('Access-Control-Allow-Headers', Cors::$headers);
        $response->assertHeader('Access-Control-Allow-Methods', Cors::$methods);
    }

    /*
     * Test browser preflight cors requests have access control headers
     */
    public function testPreflight()
    {
        $response = $this->json('options', '/api/users/1');
        $response->assertHeader('Access-Control-Allow-Origin', Cors::$origin);
        $response->assertHeader('Access-Control-Allow-Headers', Cors::$headers);
        $response->assertHeader('Access-Control-Allow-Methods', Cors::$methods);
    }
}
