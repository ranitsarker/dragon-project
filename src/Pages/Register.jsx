import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Register = () => {
    const { createUser, handleUpdateProfile}= useContext(AuthContext)
    const navigate = useNavigate();
    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        // create user:
        createUser(email, password)
        .then(() =>{
            // console.log(result.user)
            handleUpdateProfile(name, photo)
            .then(() => {
                toast.success('User created successfully.')
                navigate('/')
            })
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <>
            <Helmet>
                <title>Dragon News | Register</title>
            </Helmet>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded shadow-md w-96">
                    <h2 className="text-2xl font-semibold mb-4">Register</h2>
                    <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                        </label>
                        <input
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photoUrl">
                        Photo URL
                        </label>
                        <input
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        type="text"
                        id="photo"
                        name="photo"
                        placeholder="Enter your photo URL"
                        />
                    </div>
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
                        className="w-full btn btn-outline py-2 rounded-lg"
                        type="submit"
                    >
                        Register
                    </button>
                    </form>
                </div>
        </div>
        </>
    );
};

export default Register;