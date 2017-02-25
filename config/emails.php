<?php

return [

    'views' => [
        'verification' => 'emails.verification',
        'contact' => 'emails.contact'
    ],

    'subjects' => [
        'verification' => "Verify your account",
        'contact' => "Nyte Vibe - Support request",
    ],

    'address' => [
        'contact' => env('SUPPORT_EMAIL'),
        'name' => env('SUPPORT_NAME')
    ]



];
