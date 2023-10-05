import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster></Toaster>

            
        </div>
    );
};

export default MainLayout;