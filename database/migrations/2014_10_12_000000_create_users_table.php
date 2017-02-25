<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->enum('type', ['bar', 'user', 'admin'])->default('user');
            $table->enum('signup_type', ['facebook', 'google', 'normal'])->default('normal');
            $table->string('email', 100)->unique();
            $table->string('password')->nullable();
            $table->string('name', 100)->nullable();
            $table->enum('gender', ['male', 'female', 'other']);
            $table->date('dob')->nullable();
            $table->longText('address')->nullable();
            $table->longText('bio')->nullable();
            $table->string('avatar', 100)->nullable();
            $table->string('banner', 100)->nullable();
            $table->float('latitude', 8, 2)->nullable();
            $table->float('longitude', 8, 2)->nullable();
            $table->bigInteger('postal_code', false, false)->nullable();
            $table->boolean('is_verified')->default(true);
            $table->string('verification_code')->nullable();
            $table->boolean('is_active')->default(true);
            $table->boolean('is_paid')->default(false);
            $table->boolean('is_tos')->default(false);
            $table->boolean('is_group_on')->default(true);
            $table->boolean('is_notify')->default(true);
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
