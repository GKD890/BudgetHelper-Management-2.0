import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { LoginPage } from "../pages/LoginPage";
import { RecordPage } from "../pages/RecordPage";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
    },
    {
        path:"/login/",
        element:<LoginPage />
    },
    {
        path:"/record/",
        element:<RecordPage />,
    }
])