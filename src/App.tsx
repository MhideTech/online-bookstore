import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";
import Books from "./pages/Books";
import AppLayout from "./pages/AppLayout";
import BookmarkUI from "./pages/Bookmark";
import { BooksProvider } from "./contexts/BookContext";
import { BookmarkProvider } from "./contexts/BookmarkContext";
import { ToastContainer } from "react-toastify";

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
      <BookmarkProvider>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <RouterProvider router={router}></RouterProvider>;
      </BookmarkProvider>
    </BooksProvider>
  );
}
