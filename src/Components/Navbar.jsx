import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import moment from 'moment';
import Marquee from "react-fast-marquee";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

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
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login">Login</NavLink>
                                </li>
                                <li>
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
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/login">Login</NavLink>
                            </li>
                            <li>
                                <NavLink to="/register">Register</NavLink>
                            </li>
                        </ul>
                    </div>
                    {
                        user ? 
                        <div className="navbar-end inline-block">
                            <span className="mr-2 text-xs">
                                {user.photoURL && <img className="inline-block mx-2 w-8 h-8 rounded-full" src={user.photoURL} alt={`${user.displayName}'s photo`} />}
                                
                                User Email: {user.email || 'Unknown'}</span>
                            
                            <button className="btn" onClick={handleLogOut}>Logout</button>
                        </div>
                        :
                        <div className="navbar-end">
                            <Link to="/login" className="btn" >Login</Link>
                        </div>
                    }
                </div>
            </div>
            <div className="m-4 flex">
                <button className="btn">Lasted news:</button>
                <Marquee>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </>
    );
};

export default Navbar;
