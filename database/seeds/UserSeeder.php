<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'type' => 'admin',
            'signup_type    ' => 'normal',
            'email' => 'me@admin.com',
            'password' => '$2y$10$Yoea0/qY3rOfxx5Kz2dfC.8JJOGbbxDbouK4W..phBb0xdWK3Nzg2',
            'name' => 'Admin',
            'is_active' => true,
            'gender' => 'male'
        ]);

    }
}
