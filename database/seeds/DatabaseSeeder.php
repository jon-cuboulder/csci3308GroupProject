<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class, 50)->create()->each(function ($user) {
            factory(App\Models\Topic::class, 1)->create(['user_id' => $user->id])
                ->each(function($topic) use ($user) {
                    factory(App\Models\Resource::class, 1)->create([
                        'user_id' => $user->id,
                        'topic_id' => $topic->id
                    ]);
                });
        });
    }
}
