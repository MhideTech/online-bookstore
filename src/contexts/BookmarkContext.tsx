import { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Book {
  id: number;
  title: string;
  author: string;
  coverImage: string;
  shelve?: string;
  subtitle?: string;
  publisher?: string;
}

interface BookmarkContextType {
  bookmarks: Book[];
  addBookToBookmarks: (book: Book, shelveValue: string) => void;
  toggleBookmark: (book: Book) => void;
  removeBookFromBookmarks: (id: number) => void;
  isBookmarked: (id: number) => boolean;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(
  undefined
);

export const BookmarkProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [bookmarks, setBookmarks] = useState<Book[]>([]);

  const addBookToBookmarks = (book: Book, shelveValue: string) => {
    setBookmarks((prev) => {
      // Check if the book already exists in the bookmarks
      const isAlreadyBookmarked = prev.some(
        (b) => b.id === book.id && b.shelve === "Currently Reading"
      );

      if (isAlreadyBookmarked) {
        toast("This book is already in your bookmarks!");
        return prev; // Return the existing state without changes
      }

      // Add the book to bookmarks if not already present
      const bookWithShelve = { ...book, shelve: shelveValue };
      toast("Added to Bookmarks!");
      return [...prev, bookWithShelve]; // Add the new book
    });
  };

  const removeBookFromBookmarks = (id: number) => {
    setBookmarks((prev) => prev.filter((book) => book.id !== id));
  };

  const toggleBookmark = (book: Book) => {
    setBookmarks((prev) => {
      // Check if the book is already bookmarked
      const isAlreadyBookmarked = prev.some(
        (b) => b.id === book.id && b.shelve === "Next Up"
      );

      if (isAlreadyBookmarked) {
        // Remove the book if it is already bookmarked
        toast("Removed from Bookmarks!");
        return prev.filter(
          (b) => !(b.id === book.id && b.shelve === "Next Up")
        );
      } else {
        // Add the book if it is not yet bookmarked
        toast("Added to Bookmarks!");
        return [...prev, { ...book, shelve: "Next Up" }];
      }
    });
  };

  const isBookmarked = (id: number): boolean => {
    return bookmarks.some(
      (book) => book.id === id && book.shelve === "Next Up"
    );
  };

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        addBookToBookmarks,
        removeBookFromBookmarks,
        toggleBookmark,
        isBookmarked,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmark = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error(
      "useBookmarkContext must be used within a BookmarkProvider"
    );
  }
  return context;
};
