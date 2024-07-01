import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import NewUser from "./NewUser";
import UserDetail from "./UserDetail";
import Roles from "./Roles";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            children: [
                {
                    index: true,
                    element: <Navigate to="users" replace={true} />
                },
                {
                    path: "users",
                    element: <Users />,
                    children: [
                        {
                            index: true,
                            element: <Navigate to="1" replace={true} />
                        },
                        {
                            path: "new",
                            element: <NewUser />
                        },
                        {
                            path: ":id",
                            element: <UserDetail />
                        }
                    ]
                },
                {
                    path: "roles",
                    element: <Roles />
                }
            ]
        }
    ])

    return (
        <RouterProvider router={router} />
    );
}

export default App
