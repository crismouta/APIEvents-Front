import Layout from "../layout/Layout";
import Home from "../components/pages/Home"
import Event from "../components/pages/Event"
import { createBrowserRouter } from "react-router-dom";
import { AuthenticationGuard } from "../auth0/AuthenticationGuard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path:"/",
                element: <Home/>
            },
            {
                path: "/events",
                element: <AuthenticationGuard component={Event}/>
            }
        ]
    }
]);