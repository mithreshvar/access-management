import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Users from "./components/User/Users";
import NewUserOrEdit from "./components/User/NewUserOrEdit";
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
                    loader: async ({ request, params }) => {
                        return data.users.map(user => ({
                            id: user.id,
                            name: user.name,
                            role: user.role
                        }));
                    },
                    children: [
                        {
                            index: true,
                            element: <Navigate to="1" replace={true} />
                        },
                        {
                            path: "new",
                            element: <NewUserOrEdit />,
                        },
                        {
                            path: "edit/:id",
                            element: <NewUserOrEdit />,
                            loader: async ({ request, params }) => {
                                return data.users.find(user => user.id == params.id) ?? null;
                            }
                        },
                        {
                            path: ":id",
                            element: <UserDetail />,
                            loader: async ({ request, params }) => {
                                const user = data.users.find(user => user.id == params.id) ?? null;
                                if (!user) {
                                    return null;
                                }
                                user["accesses"] = data.roles.find(role => role.name == user.role).accesses;
                                return user;
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
