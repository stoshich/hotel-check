import { createBrowserRouter } from "react-router-dom";
import Auth from "../pages/auth/Auth";
import Hotels from "../pages/hotels/Hotels";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />
  },
  {
    path: '/hotels',
    element: <Hotels />
  }
])