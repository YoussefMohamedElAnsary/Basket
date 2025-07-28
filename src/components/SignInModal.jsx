import React from 'react';
import { Link } from 'react-router-dom';


const SignInModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-[#35AFA0] text-white py-2 rounded-md hover:bg-[#2e998e]"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-sm text-center">
          <p className="text-gray-600">
            Don’t have an account?{' '}
            <button
              onClick={() => {
                onClose(); // يقفل مودال SignIn
                // تفتح مودال SignUp من خارج باستخدام state
                const openSignUpModal = new CustomEvent('openSignUp');
                window.dispatchEvent(openSignUpModal);
              }}
              className="text-[#35AFA0] hover:underline"
            >
              Create one
            </button>
          </p>
          <p className="text-gray-600 mt-2">
            <Link to="/reset-password" className="text-blue-600 hover:underline">
              Forgot your password?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
