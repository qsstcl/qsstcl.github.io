import { createBrowserRouter } from 'react-router-dom';
import Home from "../page/Home";

const router = createBrowserRouter([
    {
        index:true,
        element: <Home/>
    },
]);

export default router;