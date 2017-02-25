<?php

return[

    /*
    |--------------------------------------------------------------------------
    | Signup Token Release
    |--------------------------------------------------------------------------
    |
    | If this field is "true", an authentication token will be automatically
    | released after signup. Otherwise, the signup method will return a simple
    | success message.
    |
    */
    'signup_token_release' => env('API_SIGNUP_TOKEN_RELEASE', true),

    /*
    |--------------------------------------------------------------------------
    | Password Reset Token Release
    |--------------------------------------------------------------------------
    |
    | If this field is "true", an authentication token will be automatically
    | released after password reset. Otherwise, the signup method will return a
    | simple success message.
    |
    */
    'reset_token_release' => env('API_RESET_TOKEN_RELEASE', true),

    /*
    |--------------------------------------------------------------------------
    | Recovery Email Subject
    |--------------------------------------------------------------------------
    |
    | The email address you want use to send the recovery email.
    |
    */
    'recovery_email_subject' => env('API_RECOVERY_EMAIL_SUBJECT', "Reset your password"),

]

?>