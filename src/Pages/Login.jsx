import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {
    const {LoginUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in that login page', location);
    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        LoginUser(email, password)
        .then(result => {
            console.log(result.user)
            // navigate after login
            navigate(location?.state ? location.state : '/');
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded shadow-md w-96">
                    <h2 className="text-2xl font-semibold mb-4">Login</h2>
                    <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
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
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
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