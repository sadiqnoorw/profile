<?php

namespace Database\Seeders;

use Carbon\Factory;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Factory(\App\User::class, 10)->create();
    }
}
