import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
    const { LoginUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState(null);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password);
        
        // Clear previous login error
        setLoginError(null);

        LoginUser(email, password)
            .then((result) => {
                console.log(result.user);
                // Show toast message upon successful login
                toast.success('Successfully logged in.');
                // Navigate after login
                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                console.error(error);
                // Set login error state
                setLoginError("Failed to login. Please check your email and password.");
            });
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
                </div>
            </div>
        </>
    );
};

export default Login;
