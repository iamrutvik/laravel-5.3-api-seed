<?php

namespace App\Api\V1\Controllers;

use Dingo\Api\Exception\ResourceException;
use JWTAuth;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Validator;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Mail\Message;
use Dingo\Api\Routing\Helpers;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Password;
use Tymon\JWTAuth\Exceptions\JWTException;
use Dingo\Api\Exception\ValidationHttpException;
use Mail;
use App\Api\V1\Transformers\UserTransformer;
use Storage;


class AuthController extends Controller
{
    use Helpers;

    public function login(Request $request)
    {
        $credentials = $request->only(['email', 'password']);

        $validator = Validator::make($credentials, [
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);

        if($validator->fails()) {
            throw new ValidationHttpException($validator->errors()->all());
        }

        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return $this->response->error('Username and password are wrong', 500);
            }
        } catch (JWTException $e) {
            return $this->response->error('Could not create token', 500);
        }

        //setting up response
        $user = JWTAuth::user();
        $user->token = $token;

        //sending response
        return $this->response->item( $user, new UserTransformer());
    }

    public function releaseToken(Request $request)
    {
        $credentials = $request->only('email');

        $validator = Validator::make($credentials, [
            'email' => 'required|email',
        ]);

        if($validator->fails()) {
            throw new ValidationHttpException($validator->errors()->all());
        }

        $user = User::where('email', $request->email)->first();

        if(!$user)
            return $this->response->errorNotFound('User not found');

        //generating auth token from user. If failed will send 500 error in response
        try {
            $token = JWTAuth::fromUser($user);
        } catch (JWTException $e) {
            return $this->response->error('Could not create token', 500);
        }

        $user->token = $token;

        //sending response
        return $this->response->item( $user, new UserTransformer());
    }

    public function signup(Request $request)
    {
        $hasToReleaseToken = config('boilerplate.signup_token_release');

        $userData = $request->all();

        //$verification_code = str_random(6);
        //$userData = array_add($userData, 'verification_code' , $verification_code);

        $rules = [
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
            'dob' => 'required|date_format:Y-m-d',
            'gender' => 'required|in:male,female,other',
            'avatar' => 'required|image',
        ];

        $validator = Validator::make($userData, $rules);

        if($validator->fails()) {
            throw new ValidationHttpException($validator->errors()->all());
        }

        User::unguard();
        $user = User::create($userData);

        //uploading avatar in S3
        if($request->hasFile('avatar') && $request->file('avatar')->isValid()){
            $destinationPath = 'avatars/'; // upload path
            $extension = $request->file('avatar')->getClientOriginalExtension(); // getting image extension
            $fileName = $user->id.".".$extension; // renaming image
            Storage::put(
                $destinationPath.$fileName,
                file_get_contents($request->file('avatar')->getRealPath())
            );
            $updateData = [
                'avatar' => $fileName
            ];
            $user->fill($updateData);
            $user->save();
        }

        //uncomment following code if you want to send verification email to user
        /*Mail::send(config('emails.views.verification'), ['user' => $user], function ($message) use ($user){
            $message->to($user->email, $user->name)->subject(config('emails.subjects.verification'));
        });*/


        User::reguard();

        if(!$user->id) {
            return $this->response->error('Could not create user', 500);
        }

        if($hasToReleaseToken) {
            return $this->login($request);
        }
        
        return $this->response->created();
    }

    public function social(Request $request){
        $hasToReleaseToken = config('boilerplate.signup_token_release');

        $userData = $request->all();

        $rules = [
            'name' => 'required|string',
            'email' => 'required|email',
            'password' => 'required|min:6',
            'dob' => 'date_format:Y-m-d',
            'gender' => 'required|in:male,female,other',
            'avatar' => 'required|url',
            'signup_type' => 'in:facebook,google'
        ];

        $validator = Validator::make($userData, $rules);

        if($validator->fails()) {
            throw new ValidationHttpException($validator->errors()->all());
        }

        $user = User::firstOrNew(['email' => $userData['email']]);

        $user->name = $userData['name'];
        $user->email = $userData['email'];
        $user->gender = $userData['gender'];
        $user->dob = $userData['dob'];
        $user->avatar = $userData['avatar'];

        if($user->save()){
            if($hasToReleaseToken) {
                //generating auth token from user. If failed will send 500 error in response
                try {
                    $token = JWTAuth::fromUser($user);
                } catch (JWTException $e) {
                    return $this->response->error('Could not create token', 500);
                }

                $user->token = $token;

                //sending response
                return $this->response->item( $user, new UserTransformer());
            }
        }else{
            return $this->response->error('Could not complete Social Signin', 500);
        }

        return $this->response->created();

    }

    public function recovery(Request $request)
    {
        $validator = Validator::make($request->only('email'), [
            'email' => 'required'
        ]);

        if($validator->fails()) {
            throw new ValidationHttpException($validator->errors()->all());
        }

        $response = Password::sendResetLink($request->only('email'), function (Message $message) {
            $message->subject(Config::get('boilerplate.recovery_email_subject'));
        });

        switch ($response) {
            case Password::RESET_LINK_SENT:
                return $this->response->noContent();
            case Password::INVALID_USER:
                return $this->response->errorNotFound('Email not found');
        }
    }

    public function reset(Request $request)
    {
        $credentials = $request->only(
            'email', 'password', 'password_confirmation', 'token'
        );

        $validator = Validator::make($credentials, [
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|confirmed|min:6',
        ]);

        if($validator->fails()) {
            throw new ValidationHttpException($validator->errors()->all());
        }

        if(!User::where('email', $credentials['email'])->exists())
            throw new NotFoundHttpException("Email not found");
        
        $response = Password::reset($credentials, function ($user, $password) {
            $user->password = $password;
            $user->save();
        });

        switch ($response) {
            case Password::PASSWORD_RESET:
                if(Config::get('boilerplate.reset_token_release')) {
                    return $this->login($request);
                }
                return $this->response->noContent();

            default:
                return $this->response->error('could_not_reset_password', 500);
        }
    }
}