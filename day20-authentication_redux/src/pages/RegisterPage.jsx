import React from 'react'
import {useAuth} from '../hooks/authHooks';

const RegisterPage=()=>{
    let {navigate,register,handleSubmit,errors,registerForm} = useAuth();
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                        Create Account
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Sign up to get started with your account
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(registerForm)} className="mt-8 space-y-6">
                    <div className="space-y-4">
                        
                        {/* Full Name Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name
                            </label>
                            <input 
                                {...register('name',{
                                    required:"name is required"
                                })}
                                id="name"
                                type="text"
                                placeholder="John Doe"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                            />
                           { errors.name &&<p className='text-red'>{errors.name.message}</p>}
                            
                        </div>

                        {/* Email Address Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input  
                            {...register('email',{
                                    required:"name is email"
                                })}
                                type="email"
                                placeholder="name@company.com"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                            />
                            { errors.email &&<p className='text-red'>{errors.email.message}</p>}

                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <input  
                                   {...register('password',{
                                    required:"Password is required",
                                    minLength:{
                                        value:8,
                                        message:"minimum 8 characters",
                                    }
                                })}
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                />
                                { errors.password &&<p className='text-red'>{errors.password.message}</p>}

                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full py-3 px-4 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 shadow-md hover:shadow-lg"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>

                {/* Bottom Section: Already have an account? Login */}
                <div className="mt-6 text-center border-t border-gray-100 pt-6">
                    <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <span
                            onClick={()=>navigate("/")}
                            className="font-semibold text-blue-600 hover:text-blue-500 hover:underline cursor-pointer transition duration-200"
                        >
                            Log in here
                        </span>
                    </p>
                </div>

            </div>
        </div>
    )
}
export default RegisterPage;