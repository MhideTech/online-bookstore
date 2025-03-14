import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";
import Books from "./pages/Books";
import AppLayout from "./pages/AppLayout";
import BookmarkUI from "./pages/Bookmark";
import { BooksProvider } from "./contexts/BookContext";

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
        path: "books",
        element: <Books />,
      },
      {
        path: "books/:Id",
        element: <BookDetail />,
      },
      {
        path: "bookmark",
        element: <BookmarkUI />,
      },
      {
        path: "bookmark/:Id",
        element: <BookDetail />,
      },
    ],
  },
]);

export default function App() {
  return (
    <BooksProvider>
      <RouterProvider router={router}></RouterProvider>;
    </BooksProvider>
  );
}
