<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Auth;
use Session;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use App\Notifications\UserAdminResetPasswordNotification;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    /**
     * Get the identifier that will be stored in the subject claim of the JWT
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getId();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    protected $appends = ['token'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'type', 'email', 'password', 'name', 'gender', 'dob', 'address', 'bio', 'avatar', 'banner',
        'latitude', 'longitude', 'postal_code', 'is_verified', 'verification_code', 'is_active', 'is_paid', 'is_tos',
        'is_group_on', 'is_notify'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'verification_code'
    ];

    /**
     * Mutators and accessors for User model
     * -----------------------------------------------------------------------------------------------------------------
     */

    /**
     * This mutator automatically hashes the password.
     *
     * @var string
     */
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = \Hash::make($value);
    }

    /**
     * @param $value
     */
    public function setNameAttribute($value)
    {
        $this->attributes['name'] = ucwords($value) ;
    }

    /**
     * @param $value
     */
    public function setEmailAttribute($value)
    {
        $this->attributes['email'] = strtolower($value) ;
    }

    /**
     * @param $value
     * @return bool
     */
    public function getIsActiveAttribute($value)
    {
        if($value == 1)
            return true;
        else
            return false;
    }

    /**
     * @param $value
     * @return bool
     */
    public function getIsVerifiedAttribute($value)
    {
        if($value == 1)
            return true;
        else
            return false;
    }

    /**
     * @param $value
     * @return bool
     */
    public function getIsPaidAttribute($value)
    {
        if($value == 1)
            return true;
        else
            return false;
    }

    /**
     * @param $value
     * @return bool
     */
    public function getIsTosAttribute($value)
    {
        if($value == 1)
            return true;
        else
            return false;
    }

    /**
     * @param $value
     * @return bool
     */
    public function getIsGroupOnAttribute($value)
    {
        if($value == 1)
            return true;
        else
            return false;
    }

    /**
     * @param $value
     * @return bool
     */
    public function getIsNotifyAttribute($value)
    {
        if($value == 1)
            return true;
        else
            return false;
    }



    /**
     * @param $value
     * @return null
     */
    public function getAvatarAttribute($value)
    {
        if($value == "")
            return null;
        else
            return $value;
    }

    /**
     * @param $value
     * @return null
     */
    public function getBannerAttribute($value)
    {
        if($value == "")
            return null;
        else
            return $value;
    }

    /**
     * @param $value
     * @return string
     */
    public function getGenderAttribute($value){
        return ucfirst($value);
    }


    /**
     * @return int
     */
    public function getId(){
        return (int)$this->id;
    }

    /**
     * @return mixed
     */
    public function getTokenAttribute()
    {
        return $this->token;
    }

    public function setTokenAttribute($value)
    {
        $this->token = $value;
    }
	
	/**
     * Send the password reset notification.
     *
     * @param  string  $token
     * @return void
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new UserAdminResetPasswordNotification($token));
    }
	
	//get users list
    public static function getusers($search_string = NULL, $orderby, $sort, $active = NULL, $verify = NULL) {

        $userId = Auth::id(); 
        $userdata = DB::table('users')
                   ->select('users.*');
        
        if (isset($active) && $active != '')
        {
            $userdata->where('is_active',$active);
        }
        
        if (isset($search_string) && $search_string != '')
        {
            
            $userdata->where(
                function($query) use ($search_string){
                    $query->where('name', 'like', '%' . $search_string . '%');
                    $query->orWhere('email', 'like', '%' . $search_string . '%');
                    $query->orWhere('gender', 'like', '%' . $search_string . '%');
                    $query->orWhere(DB::raw("CONCAT_WS(' ', name)"), "like",  '%' . $search_string . '%');
                }
            );
        }
        
        $userdata->where('id','!=',$userId);
        $userdata->where('type','user');
        $userdata->orderBy($orderby, $sort); 
        //echo $userdata->toSql();
        $result = $userdata->paginate(10);
        
        $result->appends(Input::all())->render();
      
        return $result;
    }



}
