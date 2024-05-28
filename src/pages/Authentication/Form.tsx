import React from 'react'

function Form() {
  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <form className="space-y-4">
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="you@example.com"/>
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" name="password" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="••••••••"/>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
                </div>
                <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
                </div>
            </div>
            <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Sign in
                </button>
            </div>
        </form>
    </div>
  )
}

export default Form