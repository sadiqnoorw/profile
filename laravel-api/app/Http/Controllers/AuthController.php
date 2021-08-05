<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        try {
            if (Auth::attempt($credentials)) {
                /** @var User $user **/
                $user = Auth::user();
                $token = $user->createToken('app')->accessToken;

                return response([
                    'message' => 'success',
                    'token' => $token,
                    'user' => $user
                ]);
            }
        } catch (\Exception $exception) {

            return response([
                    'message' => $exception->getMessage()
                ], 400);
        }

        return response([
            'message' => "invalid username/password"
        ], 401);
    }

    public function user()
    {
        return Auth::user();
    }

    public function register(RegisterRequest $request)
    {
        try {
            
            return   $user = User::create([
                        'first_name' => $request->first_name,
                        'last_name' => $request->last_name,
                        'email' => $request->email,
                        'password' => Hash::make($request->password) 
                    ]);
        } catch (\Exception $exception) {

            return response([
                'message' => $exception->getMessage()
            ], 400);
        }
    }
}
