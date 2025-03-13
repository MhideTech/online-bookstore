import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";
import Books from "./pages/Books";
import AppLayout from "./pages/AppLayout";
import BookmarkUI from "./pages/Bookmark";

const books: BookInterface[] = [
  {
    id: 1,
    title: "The Stars My Destination",
    author: "Alfred Bester",
    coverImage:
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shelve: "Currently Reading",
  },
  {
    id: 2,
    title: "Deep Learning",
    author: "Ian Goodfellow",
    coverImage:
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shelve: "Currently Reading",
  },
  {
    id: 3,
    title: "Strategic Writing for UX",
    author: "Torrey Podmajersky",
    coverImage:
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shelve: "Currently Reading",
  },
  {
    id: 4,
    title: "Lietuvos Pauksciai",
    author: "Tomas Ivanauskas",
    coverImage:
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shelve: "Next Up",
  },
  {
    id: 5,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    coverImage:
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shelve: "Next Up",
  },
  {
    id: 6,
    title: "Epic Bike Rides of the World",
    author: "Lonely Planet",
    coverImage:
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shelve: "Next Up",
  },
  {
    id: 7,
    title: "Alice in Wonderland",
    author: "Lewis Carroll",
    coverImage:
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shelve: "Next Up",
  },
  {
    id: 8,
    title: "1984",
    author: "George Orwell",
    coverImage:
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shelve: "Next Up",
  },
  {
    id: 9,
    title: "The Design of Everyday Things",
    author: "Don Norman",
    coverImage:
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shelve: "Next Up",
  },
  {
    id: 10,
    title: "Steve Jobs",
    author: "Walter Isaacson",
    coverImage:
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shelve: "Finished Book",
  },
  {
    id: 11,
    title: "Predictably Irrational",
    author: "Dan Ariely",
    coverImage:
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shelve: "Finished Book",
  },
  {
    id: 12,
    title: "One Year on a Bike",
    author: "Martijn Doolaard",
    coverImage:
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shelve: "Finished Book",
  },
  {
    id: 13,
    title: "101 Amazing Things to Do in Switzerland",
    author: "Travel Guide",
    coverImage:
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shelve: "Finished Book",
  },
  {
    id: 14,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    coverImage:
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shelve: "Finished Book",
  },
  {
    id: 15,
    title: "Logo Design Love",
    author: "David Airey",
    coverImage:
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shelve: "Finished Book",
  },
];

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
        element: <Books books={books} />,
      },
      // {
      //   path: "book-detail",
      //   element: <BookDetail />,
      // },
      {
        path: "books/:Id",
        element: <BookDetail books={books} />,
      },
      {
        path: "bookmark",
        element: <BookmarkUI />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
