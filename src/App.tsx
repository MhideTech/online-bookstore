import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";
import Books from "./pages/Books";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/book-detail",
    element: <BookDetail />,
  },
  {
    path: "/books",
    element: <Books />,
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
