"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ObjectId } from "mongodb";

type Props = {
  booksObj: {
    _id: ObjectId;
    title: string;
    author: string;
    rating: number;
    genres: string[];
    reviews: {
      name: string;
      body: string;
    }[];
  };
};

const EditBooks = ({ booksObj }: Props) => {
  const [rating, setRating] = useState("");
  const router = useRouter();

  const changeRating = () => {
    console.log("body");
    fetch("/api", {
      method: "PUT",
      body: JSON.stringify({ rating, id: booksObj._id }),
    });
  };

  const deleteBook = async () => {
    await fetch("/api", {
      method: "DELETE",
      body: JSON.stringify({ id: booksObj._id }),
    });
    router.refresh();
  };

  return (
    <>
      <h1 key={booksObj._id.toString()}>{booksObj.title}</h1>
      <p>{booksObj.author}</p>
      <p>{booksObj.rating}</p>
      <input
        type="text"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      ></input>
      <button onClick={changeRating}>change the rating</button>

      <button onClick={deleteBook}>DELETE</button>
    </>
  );
};

export default EditBooks;
