import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import moment from 'moment';
import Marquee from "react-fast-marquee";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [news, setNews] = useState([]); // State to store news data

    useEffect(() => {
        // Fetch your news data here, e.g., from /news.json
        fetch('/news.json')
            .then(response => response.json())
            .then(data => setNews(data))
            .catch(error => console.error('Error fetching news data:', error));
    }, []);
    // Logout: 
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Successfully logged out.'); // Display the success toast
            })
            .catch()
    }

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-content w-full">
                    <div className="navbar-start inline-block">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li className="font-bold text-base">
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li className="font-bold text-base">
                                    <NavLink to="/login">Login</NavLink>
                                </li>
                                <li className="font-bold text-base">
                                    <NavLink to="/register">Register</NavLink>
                                </li>
                                
                            </ul>
                        </div>
                        <div>
                            <a className="btn btn-ghost normal-case text-xl">Dragon News</a>
                            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li className="mx-2 font-bold text-base">
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li className="mx-2 font-bold text-base">
                                <NavLink to="/login">Login</NavLink>
                            </li>
                            <li className="mx-2 font-bold text-base">
                                <NavLink to="/register">Register</NavLink>
                            </li>
                        </ul>
                    </div>
                        {
                            user ? (
                                <div className="navbar-end inline-block">
                                <span className="mr-2 text-xs">
                                    {user.photoURL && (
                                    <img
                                        className="inline-block mx-2 w-8 h-8 rounded-full"
                                        src={user.photoURL}
                                        alt={`${user.displayName}'s photo`}
                                    />
                                    )}
                                    {user.displayName ? (
                                    <>
                                        {user.displayName}
                                        <button className="btn mx-2" onClick={handleLogOut}>
                                        Logout
                                        </button>
                                    </>
                                    ) : (
                                    <>
                                        {user.email || 'Unknown'}
                                        <button className="btn" onClick={handleLogOut}>
                                        Logout
                                        </button>
                                    </>
                                    )}
                                </span>
                                </div>
                            ) : (
                                <div className="navbar-end">
                                <Link to="/login" className="btn">
                                    Login
                                </Link>
                                </div>
                            )
                        }
                </div>
            </div>
            <div className="m-4 flex">
                <button className="btn">Lasted news:</button>
                <Marquee pauseOnHover="true">
                {news.map((post) => (
                            <Link
                                key={post._id}
                                to={`/news/${post._id}`} // Set the specific news post URL
                                className="text-blue-950 font-bold mx-4"
                            >
                                {post.title}
                            </Link>
                        ))}
                </Marquee>
            </div>
        </>
    );
};

export default Navbar;
