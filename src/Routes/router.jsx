import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Profile from "../Pages/Profile/Profile";
import UpdateContact from "../Pages/Profile/UpdateContact";
import PrivateRoute from "./privateRoute";

const router = createBrowserRouter([
{
    path:"/",
    element: <Main/>,
    children: [
        {
            path: "/",
            element:<PrivateRoute><Home></Home></PrivateRoute>
        },
        {
            path: "login",
            element: <Login/>
        },
        {
            path: "signup",
            element: <SignUp/>
        },
        {
            path: "profile",
            element: <PrivateRoute><Profile/></PrivateRoute>
        },
        {
            path: "profile/updateContact/:id",
            element: <UpdateContact/>
        }
    ]
}
]);


export default router