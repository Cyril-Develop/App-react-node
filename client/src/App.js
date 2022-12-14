import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/themes/Home";
import Navbar from "./components/navbar/Navbar";
import Paysage from "./pages/themes/Paysage";
import Portrait from "./pages/themes/Portrait";
import Autre from "./pages/themes/Autre";

export default function App() {

    const Layout = () => {
        return ( 
            <>
                <Navbar />
                <Outlet />
            </>
        )
    }

    const router = createBrowserRouter([
        {
          path: "/", element: <Layout />,  children: [
            {
              path: "/",
              element: <Home />,
            },
            {
                path: "/paysage",
                element: <Paysage />,
            },
            {
                path: "/portrait",
                element: <Portrait />,
            },
            {
                path: "/autre",
                element: <Autre />,
            }
          ],
        },
    ]);

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}


