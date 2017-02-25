<?php
namespace  App\Api\V1\Transformers;
use App\User as User;
use Storage;
class UserTransformer extends \League\Fractal\TransformerAbstract
{
    /**
     * Transform user response
     *
     * @param User $user
     * @return array
     */

    public static function transform(User $user)
    {
        $token = "";

        if($user->avatar == "") {
            $avatar = null;
        } else {
            if($user->signup_type == 'normal')
                $avatar = Storage::url(env('STORAGE_S3_PATH_AVATAR') . $user->avatar);
            else
                $avatar = $user->avatar;
        }


        if($user->banner == ""){
            $banner = null;
        }
        else{
            if($user->signup_type == 'normal')
                $banner = Storage::url(env('STORAGE_S3_PATH_BANNERS') . $user->banner);
            else
                $banner = $user->banner;
        }



        $userData = [
            'id' => (int)$user->id,
            'type' => $user->type,
            'signup_type' => $user->signup_type,
            'email' => $user->email,
            'full_name' => $user->name,
            'gender' => $user->gender,
            'dob' => $user->dob,
            'address' => $user->address,
            'bio' => $user->bio,
            'avatar' => $avatar,
            'banner' => $banner,
            'region' => $user->region,
            'latitude' => $user->latitude,
            'longitude' => $user->longitude,
            'postal_code' => $user->postal_code,
            'is_verified' => $user->is_verified,
            'is_active' => $user->is_active,
            'is_paid' => $user->is_paid,
            'is_tos' => $user->is_tos,
            'is_group_on' => $user->is_group_on,
            'is_notify' => $user->is_notify
        ];

        if($user->getTokenAttribute() != "")
            array_set($userData, 'token', $user->getTokenAttribute());

        return $userData;
    }

}

?>