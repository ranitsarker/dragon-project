import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import CategoryNews from "../Pages/CategoryNews";

const myCustomRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/news.json'),
      },
      {
        path: '/news/:id',
        element: <PrivateRoute><NewsDetails /></PrivateRoute>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/category/:categoryId', // Use a dynamic route parameter
        element: <CategoryNews />, // Use your CategoryNews component
        // Define a loader function to fetch category-wise news
        loader: (params) => fetch(`/category/${params.categoryId}.json`), // Adjust the path as needed
      },
    ],
  },
]);

export default myCustomRouter;
