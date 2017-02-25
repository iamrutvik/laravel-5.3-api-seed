

<?php

$style = [
    /* Layout ------------------------------ */

    'body' => 'margin: 0; padding: 0; width: 100%; background-color: #F2F4F6;',
    'email-wrapper' => 'width: 100%; margin: 0; padding: 0; background-color: #F2F4F6;',

    /* Masthead ----------------------- */

    'email-masthead' => 'padding: 25px 0; text-align: center;',
    'email-masthead_name' => 'font-size: 16px; font-weight: bold; color: #2F3133; text-decoration: none; text-shadow: 0 1px 0 white;',

    'email-body' => 'width: 100%; margin: 0; padding: 0; border-top: 1px solid #EDEFF2; border-bottom: 1px solid #EDEFF2; background-color: #FFF;',
    'email-body_inner' => 'width: auto; max-width: 570px; margin: 0 auto; padding: 0;',
    'email-body_cell' => 'padding: 35px;',

    'email-footer' => 'width: auto; max-width: 570px; margin: 0 auto; padding: 0; text-align: center;',
    'email-footer_cell' => 'color: #AEAEAE; padding: 35px; text-align: center;',

    /* Body ------------------------------ */

    'body_action' => 'width: 100%; margin: 30px auto; padding: 0; text-align: center;',
    'body_sub' => 'margin-top: 25px; padding-top: 25px; border-top: 1px solid #EDEFF2;',

    /* Type ------------------------------ */

    'anchor' => 'color: #3869D4;',
    'header-1' => 'margin-top: 0; color: #2F3133; font-size: 19px; font-weight: bold; text-align: left;',
    'paragraph' => 'margin-top: 0; color: #74787E; font-size: 16px; line-height: 1.5em;',
    'paragraph-sub' => 'margin-top: 0; color: #74787E; font-size: 12px; line-height: 1.5em;',
    'paragraph-center' => 'text-align: center;',

    /* Buttons ------------------------------ */

    'button' => 'display: block; display: inline-block; width: 200px; min-height: 20px; padding: 10px;
                 background-color: #3869D4; border-radius: 3px; color: #ffffff; font-size: 15px; line-height: 25px;
                 text-align: center; text-decoration: none; -webkit-text-size-adjust: none;',

    'button--green' => 'background-color: #22BC66;',
    'button--red' => 'background-color: #dc4d2f;',
    'button--blue' => 'background-color: #3869D4;',
];
?>

<?php $fontFamily = 'font-family: Arial, \'Helvetica Neue\', Helvetica, sans-serif;'; ?>
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <title>Welcome NyteNibe</title>
</head>

<body style="margin:0; padding:0; font-size:15px; font-family:Arial, Helvetica, sans-serif; color:#000; background:#ddd;text-align: center">

<table align="center" cellspacing="0" cellpadding="0" width="600" border="0" style="margin: 0 auto; background-image:url(<?php echo url('images/home_bg.png'); ?>); padding:0; background-size:cover; background-color:#000; font-family:Arial, Helvetica, sans-serif; background-position:center center;">
    <tr>
        <td align="center" style="padding:20px 0 0; vertical-align:bottom;"><img src="<?php echo url('images/logo.png'); ?>" alt="" style="width:220px; vertical-align:bottom;"></td>
    </tr>
    <tr>
        <td width="540px;" style="padding:0px 30px 20px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td align="center" style="background:#fff; padding:25px 30px; border-radius:10px; -webkit-border-radius:10px; -o-border-radius:10px; -moz-border-radius:10px; -ms-border-radius:10px; box-shadow:0px 6px 10px rgba(0, 0, 0, 0.3);">
                        <table width="100%" style="margin:0;">
                            <tr>
                                <td align="left" style="font-size:15px; font-weight:400; font-family:Arial, Helvetica, sans-serif; color:#555;">

                                    <!-- Greeting -->
                                    <h1 style="{{ $style['header-1'] }}">
                                        @if (! empty($greeting))
                                            {{ $greeting }}
                                        @else
                                            @if ($level == 'error')
                                                Whoops!
                                            @else
                                                Hello!
                                            @endif
                                        @endif
                                    </h1>
                                    <br/>
                                    <!-- Intro -->
                                    @foreach ($introLines as $line)
                                        <p style="{{ $style['paragraph'] }}">
                                            {{ $line }}
                                        </p>
                                    @endforeach

                                <!-- Action Button -->
                                    @if (isset($actionText))
                                        <table style="{{ $style['body_action'] }}" align="center" width="100%" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td align="center">
                                                    <?php
                                                    switch ($level) {
                                                        case 'success':
                                                            $actionColor = 'button--green';
                                                            break;
                                                        case 'error':
                                                            $actionColor = 'button--red';
                                                            break;
                                                        default:
                                                            $actionColor = 'button--blue';
                                                    }
                                                    ?>

                                                    <a href="{{ $actionUrl }}"
                                                       style="{{ $fontFamily }} {{ $style['button'] }} {{ $style[$actionColor] }}"
                                                       class="button"
                                                       target="_blank">
                                                        {{ $actionText }}
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    @endif

                                <!-- Outro -->
                                    @foreach ($outroLines as $line)
                                        <p style="{{ $style['paragraph'] }}">
                                            {{ $line }}
                                        </p>
                                    @endforeach

                                <!-- Salutation -->
                                    <p style="{{ $style['paragraph'] }}">
                                        <br/>Regards,<br>{{ config('app.name') }}
                                    </p>

                                    <!-- Sub Copy -->
                                    @if (isset($actionText))
                                        <table style="{{ $style['body_sub'] }}">
                                            <tr>
                                                <td style="{{ $fontFamily }}">
                                                    <p style="{{ $style['paragraph-sub'] }}">
                                                        If you’re having trouble clicking the "{{ $actionText }}" button,
                                                        copy and paste the URL below into your web browser:
                                                    </p>

                                                <p style="{{ $style['paragraph-sub'] }}">
                                                            <a style="{{ $style['anchor'] }}" href="{{ $actionUrl }}" target="_blank">
                                                                {{ $actionUrl }}
                                                        </a>
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                    @endif





                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <!--<tr>
                    <td><img src="images/templete-bg.png" style="width:100%;" alt=""></td>
                </tr>-->
            </table>

            <table cellspacing="0" cellpadding="0" width="100%" border="0" style="text-align:center; padding:0; border-radius:10px 10px 0 0; margin:0;font-size:12px;">
                <tr>
                    <td align="center" style="padding:20px 0 0 0;"><p style="margin:0; font-family:Arial, Helvetica, sans-serif; color:#fff">Copyright &copy; 2017. All Rights Reserved.</p></td>
                </tr>
            </table>

        </td>
    </tr>
</table>

</body>
</html>

