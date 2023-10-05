import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
  const { LoginUser, googleLogin, githubLogin } = useContext(AuthContext);
  const [loginError, setLoginError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // Clear previous login error
    setLoginError(null);

    LoginUser(email, password)
      .then((result) => {
        console.log(result.user);
        // Show toast message upon successful login
        toast.success('Successfully logged in.');
        // Navigate after login
        // You can add your navigation logic here
      })
      .catch((error) => {
        console.error(error);
        // Set login error state
        setLoginError("Failed to login. Please check your email and password.");
      });
  };
    // Function to handle Google login
    const handleGoogleLogin = async () => {
        try {
          await googleLogin();
          // Show toast message upon successful Google login
          toast.success('Successfully logged in.');
        } catch (error) {
          console.error("Google login error:", error);
        }
      };
    
      // Function to handle GitHub login
      const handleGitHubLogin = async () => {
        try {
          await githubLogin();
          // Show toast message upon successful GitHub login
          toast.success('Successfully logged in.');
        } catch (error) {
          console.error("GitHub login error:", error);
        }
      };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          {loginError && (
            <div className="mb-4 text-red-600 font-semibold">
              {loginError}
            </div>
          )}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <button
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              type="submit"
            >
              Login
            </button>
          </form>

          {/* Google login button */}
          <button
            onClick={handleGoogleLogin}
            className="btn my-3 btn-outline w-full"
          >
            <FaGoogle /> Login with Google
          </button>

          {/* GitHub login button */}
          <button
            onClick={handleGitHubLogin}
            className="btn my-3 btn-outline w-full"
          >
            <FaGithub /> Login with GitHub
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
