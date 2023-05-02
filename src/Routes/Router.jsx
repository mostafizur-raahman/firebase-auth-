import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]

    }
]);
export default router;