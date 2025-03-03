import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";
import Books from "./pages/Books";
import AppLayout from "./pages/AppLayout";
import BookmarkUI from "./pages/Bookmark";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      {
        path: "book-detail",
        element: <BookDetail />
      },
      {
        path: "books",
        element: <Books />
      },
      {
        path: "bookmark",
        element: <BookmarkUI />
      }
    ]
  },
  {
    path: "/books",
    element: <Books />,
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
