import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Tracker2 from "../pages/Tracker2";
import Tracker3 from "../pages/Tracker3";
import Home from "../pages/Home";
import Tracker4 from "../pages/Tracker4";
import Tracker5 from "../pages/Tracker5";
import Tracker1 from "../pages/Tracker1";

export const router = createBrowserRouter ([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
       
        children: [
            {
                path: "tracker1",
                element: <Tracker1 />
            },
            
            {
                path: "tracker2",
                element: <Tracker2 />
            },
            {
                path: "tracker3",
                element: <Tracker3 />
            },
            {
                path: "tracker4",
                element: <Tracker4 />
            },
            // {
            //     path: "tracker5",
            //     element: <Tracker5 />
            // },
        ],
    },
    // {
    //     path: "/dashboard/tracker5",
    //     element: <Tracker5 />,
    // },
]);