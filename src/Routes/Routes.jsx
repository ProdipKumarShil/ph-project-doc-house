import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Home/Main";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  }
])

export default router