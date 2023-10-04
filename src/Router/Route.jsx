import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";

const myCustomRouter = createBrowserRouter([
        {
            path: '/',
            element: <MainLayout></MainLayout>,
            children:[
                {
                    path: '/',
                    element: <Home></Home>,
                    loader: () => fetch('/news.json'),
                },
                {
                    path: '/news/:id',
                    element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
                },
                {
                    path: '/login',
                    element: <Login></Login>,
                },
                {
                    path: '/register',
                    element: <Register></Register>,
                },
            ]
        },

    ])
    export default myCustomRouter;