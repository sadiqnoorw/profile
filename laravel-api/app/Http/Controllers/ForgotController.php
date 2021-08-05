<?php

namespace App\Http\Controllers;

use App\Http\Requests\ForgotRequest;
use App\Http\Requests\ResetRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class ForgotController extends Controller
{
    public function forgot(ForgotRequest $request)
    {
        $email = $request->email;

        if(User::where('email', $email)->doesntExist()){
            return response([
                'message' => 'User doesn\'t exist!'
            ], 404);
        }

        $token = Str::random(20);

        try {
           
            DB::table('password_resets')->insert([
                'email' => $email,
                'token' => $token 
            ]);
            
            //Send email
            Mail::send('Email.forgot', ['token' => $token], function ($message) use($email) {
                $message->from('john@johndoe.com', 'John Doe');
                $message->to('john@johndoe.com', 'John Doe');
                $message->subject('Subject');
            });

            return response([
                'message' => 'check your email'
            ]);

        } catch (\Exception $exception) {
            return response([
                'message' => $exception->getMessage()
            ], 400);
        }
    }

    public function reset(ResetRequest $request)
    {
        $token = $request->token;

        if(!$passwordRequest = DB::table('password_resets')->where('token', $token)->first()){
            return response([
                'message' => 'invalid token'
            ], 400);
        }

        /*** @var User $user **/
        if(!$user = User::where('email', $passwordRequest->email)->first()){
            return response([
                'message' => 'User doesn\'t exist'
            ], 400);
        }

        $user->password = Hash::make($request->password);
        $user->save();

        return response([
            'message' => 'success'
        ], 200);
    }
}
