import { ObjectId } from "mongodb";
import EditBooks from "../components/editGreeting";
import Link from "next/link";

type Books = {
  title: string;
  _id: ObjectId;
  author: string;
  rating: number;
  genres: string[];
  reviews: {
    name: string;
    body: string;
  }[];
};

export default async function Back() {
  const test = process.env.HOST;
  console.log(test);
  const response = await fetch(`${test}/api`, {
    cache: "no-store",
  });
  try {
    const titleBooks: Books[] = await response.json();
    return (
      <>
        {titleBooks.map((BooksObj) => (
          <EditBooks
            key={BooksObj._id.toString()}
            booksObj={BooksObj}
          ></EditBooks>
        ))}
        <Link href={"/front"}>
          <button>Frontpage</button>
        </Link>
      </>
    );
  } catch (error) {
    console.error("Cant render books");
    return <div>Cant render books</div>;
  }
}
