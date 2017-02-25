<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <title>Welcome To Ride Along</title>
</head>

<body style="margin:0; padding:0; font-size:15px; font-family:Arial, Helvetica, sans-serif; color:#000; background:#ddd;">

<table align="center" cellspacing="0" cellpadding="0" width="600" border="0" style="background:url(images/email-bg.jpg) no-repeat 100% 50%; padding:0; background-size:100% 100%; background-color:#F37778; font-family:Arial, Helvetica, sans-serif;">
    <tr>
        <td align="center" style="padding:20px 0;"><img src="<?php echo url('images/logo.png');?>" alt="" style="width:220px"></td>
    </tr>
    <tr>
        <td width="540px;" style="padding:0px 30px 20px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td align="center" style="background:#fff; padding:25px 30px; border-radius:10px; -webkit-border-radius:10px; -o-border-radius:10px; -moz-border-radius:10px; -ms-border-radius:10px; box-shadow:0px 6px 10px rgba(0, 0, 0, 0.3);">
                        <table width="100%" style="margin:0;">
                            <tr>
                                <td align="left" style="font-size:14px; color:#000; padding:0 0 15px; font-family:Arial, Helvetica, sans-serif;">Hi,</td>
                            </tr>
                            <tr>
                                <td align="left" style="font-size:13px; line-height:23px; color:#000; padding:0 0 12px; font-family:Arial, Helvetica, sans-serif;"><?php echo $data['name']; ?> has generated a support request.</td>
                            </tr>
                            <tr>
                                <td align="left" style="font-size:18px; font-weight:500; font-family:Arial, Helvetica, sans-serif; color:#000; padding:5px 0 0;">Name</td>
                            </tr>
                            <tr>
                                <td align="left" style="padding:0 0 5px 0; color:#F37778;"><?php echo $data['name']; ?></td>
                            </tr>
                            <tr>
                                <td align="left" style="font-size:18px; font-weight:500; font-family:Arial, Helvetica, sans-serif; color:#000; padding:5px 0 0;">Email</td>
                            </tr>
                            <tr>
                                <td align="left" style="padding:0 0 5px 0; color:#F37778;"><?php echo $data['email']; ?></td>
                            </tr>
                            <tr>
                                <td align="left" style="font-size:18px; font-weight:500; font-family:Arial, Helvetica, sans-serif; color:#000; padding:5px 0 0;">Category</td>
                            </tr>
                            <tr>
                                <td align="left" style="padding:0 0 5px 0; color:#F37778;"><?php echo $data['category']; ?></td>
                            </tr>
                            <tr>
                                <td align="left" style="font-size:18px; font-weight:500; font-family:Arial, Helvetica, sans-serif; color:#000; padding:5px 0 0;">Message</td>
                            </tr>
                            <tr>
                                <td align="left" style="padding:0 0 5px 0; color:#F37778;"><?php echo $data['message']; ?></td>
                            </tr>
                            <tr>
                                <td style="padding:15px 0 5px; font-family:Arial, Helvetica, sans-serif;">
                                    <p style="margin:0; font-size:13px; line-height:20px; font-family:Arial, Helvetica, sans-serif; color:#000;">Thank You, <br>Ride Along</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

            </table>

            <table cellspacing="0" cellpadding="0" width="100%" border="0" style="text-align:center; padding:0; border-radius:10px 10px 0 0; margin:0;font-size:12px;">
                <tr>
                    <td align="center" style="padding:20px 0 0 0;"><p style="margin:0; font-family:Arial, Helvetica, sans-serif; color:#fff">Copyright &copy; 2016. All Rights Reserved. </p></td>
                </tr>
            </table>

        </td>
    </tr>
</table>

</body>
</html>
