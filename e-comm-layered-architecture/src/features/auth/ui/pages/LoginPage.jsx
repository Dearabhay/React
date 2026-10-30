import React from 'react'
import {useAuth} from '../../hooks/useAuthHook';
  
const LoggingPage=()=>{
    let {navigate,register,loggingForm,handleSubmit} = useAuth();
    
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please sign in to your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(loggingForm)} className="mt-8 space-y-6">
          <div className="space-y-4">
            
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                User Name
              </label>
              <div className="relative">
                <input
                 {...register("username",{
                    required:"username is required"
                 })}
                  type="text"
                  placeholder="username"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                />
              </div>
              
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <span 
                  className="text-xs font-semibold text-blue-600 hover:text-blue-500 hover:underline cursor-pointer"
                >
                  Forgot password?
                </span>
              </div>
              <div className="relative">
                <input
                {...register("password",{
                    required:"password is required"
                })}
                
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                />
              </div>
             
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 shadow-md hover:shadow-lg"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Footer: Register Link */}
        <div className="mt-6 text-center border-t border-gray-100 pt-6">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <span
             onClick={()=>navigate("/register")}
              className="font-semibold text-blue-600 hover:text-blue-500 hover:underline cursor-pointer transition duration-200"
            >
              Register here
            </span>
          </p>
        </div>

      </div>
    </div>
    )
}
export default LoggingPage;