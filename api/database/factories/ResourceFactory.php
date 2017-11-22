<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Resource::class, function (Faker $faker) {
    return [
        'name' => $faker->bs(),
        'url' => $faker->url(),
        'abstract' => $faker->text(50),
        'votes' => $faker->randomDigit()
    ];
});
