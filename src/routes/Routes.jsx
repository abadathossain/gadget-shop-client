import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Banner from "../components/home/Banner";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Banner />,
            },
        ],
    },
]);
