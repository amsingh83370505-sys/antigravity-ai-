import Link from "next/link";
import { Bot, Quote } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Abstract Design Section */}
      <div className="relative hidden w-0 flex-1 lg:block bg-neutral-900 border-r border-neutral-800">
        <div className="absolute inset-0 bg-neutral-900 overflow-hidden">
           {/* Decorative elements representing AI connections */}
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 border-white"></div>
           <svg className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/4 opacity-30" width="800" height="800" fill="none" viewBox="0 0 800 800"><circle cx="400" cy="400" r="300" stroke="url(#gradient)" strokeWidth="100" strokeDasharray="10 20" /><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#4F46E5" /><stop offset="100%" stopColor="#EC4899" /></linearGradient></defs></svg>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center px-16 text-white z-10">
          <Bot className="h-16 w-16 text-blue-400 mb-8" />
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
            Scale your operations <br/> with AI Agents
          </h2>
          <p className="mt-6 text-xl text-neutral-300 max-w-lg font-light leading-relaxed">
            Deploy intelligent voice operators, chatbots, and lead automation systems in minutes. Experience the next generation of SaaS tools.
          </p>
          <div className="mt-16 flex items-center gap-4 border-l-2 border-blue-500 pl-6">
             <Quote className="h-5 w-5 text-neutral-500 flex-shrink-0" />
             <p className="text-sm italic text-neutral-400">"This platform replaced our entire initial outreach team. Absolute game-changer." - Agency Alpha</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="lg:hidden flex items-center justify-center mb-10">
             <Bot className="h-12 w-12 text-blue-600" />
          </div>
          <div>
            <h2 className="mt-8 text-3xl font-bold tracking-tight text-neutral-900 uppercase font-sans">
              Welcome Back
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Not a member?{" "}
              <Link href="/register" className="font-semibold text-blue-600 hover:text-blue-500 transition-colors">
                Start your 14-day free trial
              </Link>
            </p>
          </div>

          <div className="mt-10">
            <div>
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-neutral-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="john@agency.com"
                      className="block w-full rounded-md border-0 py-2.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-4 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-neutral-900">
                    Password
                  </label>
                  <div className="mt-2 text-right absolute w-[26rem] -mt-[1.75rem]">
                    <a href="#" className="font-semibold text-blue-600 hover:text-blue-500 text-sm">
                        Forgot password?
                      </a>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      placeholder="••••••••"
                      className="block w-full rounded-md border-0 py-2.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-4 transition-all"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600" />
                    <label htmlFor="remember-me" className="block text-sm leading-6 text-gray-900">Remember me</label>
                </div>

                <div>
                  <Link href="/dashboard">
                    <button
                      type="button"
                      className="flex w-full justify-center rounded-md bg-neutral-900 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 transition-colors"
                    >
                      Sign In to Dashboard
                    </button>
                  </Link>
                </div>
              </form>

              <div className="mt-10">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-neutral-200" />
                  </div>
                  <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="bg-white px-6 text-neutral-500">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 hover:bg-neutral-50 focus-visible:ring-transparent transition-colors"
                  >
                    Google
                  </a>
                  <a
                    href="#"
                    className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 hover:bg-neutral-50 focus-visible:ring-transparent transition-colors"
                  >
                    Microsoft
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
