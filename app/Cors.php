<?php

namespace App;

class Cors {
    static public $origin = '*';
    static public $headers = 'origin, content-type, accept, authorization';
    static public $methods = 'GET, HEAD, OPTIONS, POST, PATCH, DELETE';
}
