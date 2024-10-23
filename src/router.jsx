import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import Shop from "./shop/Shop"
import Cart from "./shop/Cart"
import Home from "./home/Home"

export default createBrowserRouter([
    {
        "path": "/",
        "element": <App />,
        "children":[
            {"path": "/", element: <Navigate to="/home"/>},
            {"path": "home", element: <Home /> },
            {"path": "shop", element: <Shop />},
            {"path": "cart", element: <Cart />}
        ]
    }
])