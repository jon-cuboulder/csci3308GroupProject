<?php

namespace App\Http\Middleware;

use Closure;
use App\Cors as Allowed;

class Cors
{
  /**
   * Allow cross origin requests ... FROM EVERYWHERE. Need CORS so we can
   * host javascript client independent of php api server. Do not need to allow
   * all origins but for now this works. It's bad security to allow it from everywhere.
   *
   * http://en.vedovelli.com.br/2015/web-development/Laravel-5-1-enable-CORS/
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \Closure  $next
   * @return mixed
   */
  public function handle($request, Closure $next)
  {
    return $next($request)
      ->header('Access-Control-Allow-Origin', Allowed::$origin)
      ->header('Access-Control-Allow-Headers', Allowed::$headers)
      ->header('Access-Control-Allow-Methods', Allowed::$methods);
  }
}
