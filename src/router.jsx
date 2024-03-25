import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/layout/RootLayout";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Products />,
            },
            {
                path: "/addProduct",
                element: <AddProduct />,
            },
        ],
    },
]);

export default router;
