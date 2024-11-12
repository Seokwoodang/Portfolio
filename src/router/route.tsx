import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Landing from "@/page/Landing";

// import App from "@/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <Landing /> }],
  },
]);

export default router;
