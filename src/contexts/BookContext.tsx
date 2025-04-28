import { createContext, useContext, ReactNode } from "react";

// Define the type for your books data
export interface BookInterface {
  id: number;
  title: string;
  author: string;
  coverImage: string;
  shelve: string;
  subtitle?: string;
  publisher?: string;
}

// The initial data
const books: BookInterface[] = [
  {
    id: 1,
    title: "The Stars My Destination",
    author: "Alfred Bester",
    coverImage:
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shelve: "Currently Reading",
    subtitle: "Edition",
    publisher: "Marvel",
  },
  {
    id: 2,
    title: "Deep Learning",
    author: "Ian Goodfellow",
    coverImage:
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shelve: "Currently Reading",
    subtitle: "Disney",
    publisher: "Disney",
  },
  {
    id: 3,
    title: "Strategic Writing for UX",
    author: "Torrey Podmajersky",
    coverImage:
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shelve: "Currently Reading",
    subtitle: "Edition",
    publisher: "Marvel",
  },
  {
    id: 4,
    title: "Lietuvos Pauksciai",
    author: "Tomas Ivanauskas",
    coverImage:
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shelve: "Next Up",
    subtitle: "Disney",
    publisher: "Disney",
  },
  {
    id: 5,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    coverImage:
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shelve: "Next Up",
    subtitle: "Edition",
    publisher: "Marvel",
  },
  {
    id: 6,
    title: "Epic Bike Rides of the World",
    author: "Lonely Planet",
    coverImage:
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shelve: "Next Up",
    subtitle: "Disney",
    publisher: "Disney",
  },
  {
    id: 7,
    title: "Alice in Wonderland",
    author: "Lewis Carroll",
    coverImage:
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shelve: "Next Up",
    subtitle: "Edition",
    publisher: "Marvel",
  },
  {
    id: 8,
    title: "1984",
    author: "George Orwell",
    coverImage:
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shelve: "Next Up",
    subtitle: "Disney",
    publisher: "Disney",
  },
  {
    id: 9,
    title: "The Design of Everyday Things",
    author: "Don Norman",
    coverImage:
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shelve: "Next Up",
    subtitle: "Edition",
    publisher: "Marvel",
  },
  {
    id: 10,
    title: "Steve Jobs",
    author: "Walter Isaacson",
    coverImage:
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shelve: "Finished Book",
    subtitle: "Disney",
    publisher: "Disney",
  },
  {
    id: 11,
    title: "Predictably Irrational",
    author: "Dan Ariely",
    coverImage:
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shelve: "Finished Book",
    subtitle: "Edition",
    publisher: "Marvel",
  },
  {
    id: 12,
    title: "One Year on a Bike",
    author: "Martijn Doolaard",
    coverImage:
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shelve: "Finished Book",
    subtitle: "Disney",
    publisher: "Disney",
  },
  {
    id: 13,
    title: "101 Amazing Things to Do in Switzerland",
    author: "Travel Guide",
    coverImage:
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shelve: "Finished Book",
    subtitle: "Edition",
    publisher: "Marvel",
  },
  {
    id: 14,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    coverImage:
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shelve: "Finished Book",
    subtitle: "Disney",
    publisher: "Disney",
  },
  {
    id: 15,
    title: "Logo Design Love",
    author: "David Airey",
    coverImage:
      "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shelve: "Finished Book",
    subtitle: "Edition",
    publisher: "Marvel",
  },
];

// Create the context
interface BooksContextType {
  books: BookInterface[];
}

const BooksContext = createContext<BooksContextType | undefined>(undefined);

// Create the provider component
export const BooksProvider = ({ children }: { children: ReactNode }) => {
  return (
    <BooksContext.Provider value={{ books }}>{children}</BooksContext.Provider>
  );
};

// Custom hook to access the context
export const useBooks = () => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("useBooks must be used within a BooksProvider");
  }
  return context;
};
