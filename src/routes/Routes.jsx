import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../layout/DashboardLayout";
import Overview from "../pages/dashboard/Overview";
import PrivateRoutes from "./private/PrivateRoutes";
import MyProducts from "../pages/seller/MyProducts";
import SellerRoute from "./private/SellerRoute";
import AddProducts from "../pages/seller/AddProducts";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
    {
        path: "/dashboard/",
        element: <PrivateRoutes><DashboardLayout /></PrivateRoutes>,
        children: [
            {
                path: "/dashboard/overview",
                element: <Overview />,
            },
            {
                path: "/dashboard/my-products",
                element: <SellerRoute><MyProducts /></SellerRoute>,
            },
            {
                path: "/dashboard/add-products",
                element: <SellerRoute><AddProducts /></SellerRoute>,
            },


        ],
    },
]);
