import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Details from "../Details/Details";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://assignment-10-server-mostafizur-raahman.vercel.app/chefData')
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
            },
            {
                path: '/chefDetails/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-10-server-mostafizur-raahman.vercel.app/chefDetails/${params.id}`)
            }
        ]

    }
]);
export default router;