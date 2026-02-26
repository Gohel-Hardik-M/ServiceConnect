import React from "react";

const Login = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-[440px] animate-in fade-in zoom-in duration-300">
        
        {/* Brand Logo/Header */}
        <div className="flex flex-col items-center mb-8 gap-2">
          <div className="bg-primary p-3 rounded-xl shadow-sm">
            <svg
              className="w-8 h-8 text-[#111813]"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_logo)">
                <path
                  d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_logo">
                  <rect fill="white" height="48" width="48" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold text-[#111813] dark:text-white tracking-tight">
            Service Connect
          </h1>
        </div>

        {/* Login Card */}
        <div className="bg-white dark:bg-[#1a2e20] rounded-xl shadow-xl shadow-primary/5 p-8 border border-[#dbe6df] dark:border-[#2a4434]">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-[#111813] dark:text-white mb-2">
              Welcome back!
            </h2>
            <p className="text-[#608a6e] dark:text-[#a0c4ac] text-sm">
              Please enter your details to sign in.
            </p>
          </div>

          <form className="space-y-6">
            
            {/* Email Field */}
            <div className="space-y-2">
              <label
                className="block text-sm font-semibold text-[#111813] dark:text-white"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="w-full h-12 px-4 rounded-lg border border-[#dbe6df] dark:border-[#2a4434] bg-white dark:bg-[#102216] text-[#111813] dark:text-white placeholder:text-[#608a6e]/60 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                id="email"
                type="email"
                placeholder="name@company.com"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label
                className="block text-sm font-semibold text-[#111813] dark:text-white"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  className="w-full h-12 pl-4 pr-12 rounded-lg border border-[#dbe6df] dark:border-[#2a4434] bg-white dark:bg-[#102216] text-[#111813] dark:text-white placeholder:text-[#608a6e]/60 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  id="password"
                  type="password"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input
                className="w-4 h-4 rounded border-[#dbe6df] text-primary focus:ring-primary"
                id="remember"
                type="checkbox"
              />
              <label
                className="text-sm text-[#608a6e] dark:text-[#a0c4ac]"
                htmlFor="remember"
              >
                Remember me for 30 days
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-[#111813] font-bold h-12 rounded-lg transition-all shadow-lg shadow-primary/20 active:scale-[0.98]"
            >
              Login
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center mt-8 text-[#608a6e] dark:text-[#a0c4ac] text-sm">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-primary font-bold hover:underline transition-all"
          >
            Sign up
          </a>
        </p>

        {/* Terms */}
        <div className="mt-12 flex justify-center gap-6 text-xs text-[#608a6e]/60 dark:text-[#a0c4ac]/40">
          <a href="#" className="hover:text-primary transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Help Center
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;