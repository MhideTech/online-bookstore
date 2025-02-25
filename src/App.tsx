import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/book-detail",
    element: <BookDetail />,
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
