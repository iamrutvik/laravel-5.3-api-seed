## Laravel API Boilerplate

Laravel API Boilerplate is a ready-to-use "starting pack" that you can use to build your first API in seconds. As you can easily imagine, it is built on top of the awesome Laravel Framework Version 5.3. A true and complete implementation of REST API using Laravel. This also comes with Admin Panel.

If you are looking for API seed/boilerplate with Laravel 5.2, you can check my another repo at [Laravel 5.2 API Seed](https://github.com/iamrutvik/laravel-api-seed-boilerplate)

It has in-built support for :

* Token based api authentication
* API versioning, throttling, API Docs generation
* Request and Response modifiers, Error Codes and Transformers

It also benefits from three pacakages:

* JWT-Auth - [tymondesigns/jwt-auth](https://github.com/tymondesigns/jwt-auth)
* Dingo API - [dingo/api](https://github.com/dingo/api)
* Laravel-CORS [barryvdh/laravel-cors](http://github.com/barryvdh/laravel-cors)

With a similar foundation is really easy to get up and running in no time. I just made an "integration" work, adding here and there something that I found useful.

## Installation

Run following commands in Command Prompt

* Redirect to desired directory where you want to place your code
* Run '_git clone https://github.com/iamrutvik/laravel-api-seed-boilerplate.git_.' [Git for windows](https://git-scm.com/download/win) Required.
* Rename .env.example to .env file and add your app settings and database settings.
* Run _composer install_. This will install all vendor dependencies and Laravel Framework.
* Run '_php artisan migrate_'. This will run the [Migration](https://laravel.com/docs/5.2/migrations) and will create tables for authentication module.
* Run '_php artisan db:seed_'. This will seed 'users' table and add a default admin user.
* Run '_php artisan serve_'. This will run Laravel default web server and you can access it using 'http://localhost:8000'.

By default to make the installation process smooth, I have removed storage/ and bootstrap/cache/ folder from .gitignore file.
Later You might want to modify your .gitignore file to add them.

## Basic Usage

Run 'http://localhost:8000/api/auth/signup'

Open a [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) or any utility that can send the HTTP request, and Call 'http://localhost:8000/api/auth/signup'. Specify name, email and password in Form data and send request.
You will receive the Auth token in response which you can use to send other API request later.

You can pass this authentication token in request parameter :
_http://localhost/api/user/cards?token=YOUR_ACCESS_TOKEN_

To Perform login, call http://localhost:8000/api/auth/login and specify email and password in Form data.

## How to start

* Create a controller in app\Api\V1\Controllers and add your logic
* Specify the Route in app\Http\api_routes.php file.
* Use the specified Route in Postman

Done!

### Configuration

As I already told before, this boilerplate is based on _dingo/api_ and _tymondesigns/jwt-auth_ packages. So, you can find many informations about configuration <a href="https://github.com/tymondesigns/jwt-auth/wiki/Configuration" target="_blank">here</a> and <a href="https://github.com/dingo/api/wiki/Configuration">here</a>.

However, there are some extra options that I placed in a _config/boilerplate.php_ file.

* **signup_fields**: you can use this option to specify what fields you want to use to create your user;
* **signup_fields_rules**: you can use this option to specify the rules you want to use for the validator instance in the signup method;
* **signup_token_release**: if "true", an access token will be released from the signup endpoint if everything goes well. Otherwise, you will just get a _201 Created_ response;
* **reset_token_release**: if "true", an access token will be released from the signup endpoint if everything goes well. Otherwise, you will just get a _200_ response;
* **recovery_email_subject**: here you can specify the subject for your recovery data email;

### Creating Endpoints

You can create endpoints in the same way you could to with using the single _dingo/api_ package. You can <a href="https://github.com/dingo/api/wiki/Creating-API-Endpoints" target="_blank">read its documentation</a> for details.

After all, that's just a boilerplate! :)

## Main Features

### A Ready-To-Use AuthController

I've put an "AuthController" in _App\Api\V1\Controllers_. It supports the four basic authentication/password recovery operations:

* _login()_;
* _signup()_;
* _recovery()_;
* _reset()_;

In order to work with them, you just have to make a POST request with the required data.

You will need:

* _login_: just email and password;
* _signup_: whatever you like: you can specify it in the config file;
* _recovery_: just the user email address;
* _reset_: token, email, password and password confirmation;

### A Separate File for Routes

You can specify your routes in the `api_routes.php` file, that will be automatically loaded. In this file you will find many examples of routes.

### Utilizing 'jwt.refresh' Middleware

The problem with protected routes as specified in api_routes.php that if one user keeps using login route to generate new token, all previously generated tokens are also active and they can use them which is a breach of API security.

To overcome this issue, You can use newly created token for each request. You can do that by using 'jwt.refresh' middleware, as specified in api_routes.php. So when you send one request you will get another newly generated token in authentication header with response. All previous token will be get invalidated.

### Using Password Recovery function

When you use recovery() route, it will use default Laravel Password Facade to send email reset link, which in order to send mail uses a template from /resources/views/auth/emails/password.php.

To make the directory structure more API development friendly, I have modified the structure to /resources/views/emails/auth/password.php. Thus you can manage all modules' mails in emails directory, module wise.
Though you can configure and change the view path in config/auth.php by setting "email" key. The view file only utilize $token which will be used to reset password using reset() route. Check /resources/views/emails/auth/password.php file for more details.

### Secrets Generation

Every time you create a new project starting from this repository, the _php artisan jwt:generate_ command will be executed.

## Cross Origin Resource Sharing

If you want to enable CORS for a specific route or routes group, you just have to use the _cors_ middleware on them.

Thanks to the _barryvdh/laravel-cors_ package, you can handle CORS easily. Just check <a href="https://github.com/barryvdh/laravel-cors" target="_blank">the docs at this page</a> for more info.

## Notes

I currently removed the _VerifyCsrfToken_ middleware from the _$middleware_ array in _app/Http/Kernel.php_ file. If you want to use it in your project, just use the route middleware _csrf_ you can find, in the same class, in the _$routeMiddleware_ array.

## Admin Panel

This installation comes with admin panel designed with Auth module, Grid, search filters, pagination and CRUD and Export to Excel. You can check it at http://localhost:8000/admin.

Login Credentials : 

Email : me@admin.com
Password : 123456

Do Check the routes/web.php file to check other admin routes.

## Feedback

I currently made this project for personal purposes. I decided to share it here to help anyone with the same needs. If you have any feedback to improve it, feel free to make a suggestion, or open a PR!

## Contribution

I am planning to improve Responses and want to implement standards from <a href="http://jsonapi.org/" target="_blank">json api</a>. Those who are willing to contribute, can open a PR.

## Roadmap

* Implement JSON API Standards from <a href="http://jsonapi.org/" target="_blank">json api</a>
* Implement Swagger 2.0 with annotations. Though, This Package comes with in built support for [API Documentation](https://github.com/dingo/api/wiki/API-Blueprint-Documentation).
