import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Users from "./components/User/Users";
import NewUser from "./components/User/NewUser";
import UserDetail from "./components/User/UserDetail";
import Roles from "./components/Role/Roles";
import data from "./data/data.json";

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
                            element: <UserDetail />,
                            loader: async ({ request, params }) => {
                                return data.users.find(user => user.id == params.id) ?? null;
                            },
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
