"use client";
import { useState } from "react";
import styles from "../page.module.css";
import Link from "next/link";

export default function Front() {
  const [books, setBooks] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [rating, setRating] = useState("");
  const saveBooks = () => {
    fetch("/api", {
      method: "POST",
      //The client can only send strings to the server
      //so we need to change our whole object to a string
      body: JSON.stringify({ books, author, pages, rating }),
    });
    setBooks("");
    setAuthor("");
    setPages("");
    setRating("");
  };
  return (
    <>
      <div>
        <div className={styles.flex}>
          <input
            required
            type="text"
            className={styles.input}
            value={books}
            onChange={(e) => setBooks(e.target.value)}
          />
          <p>Book name</p>
        </div>
        <div className={styles.flex}>
          <input
            required
            type="text"
            className={styles.input}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <p>author</p>
        </div>

        <div className={styles.flex}>
          <input
            required
            type="number"
            className={styles.input}
            value={pages}
            onChange={(e) => setPages(e.target.value)}
          />
          <p>Pages</p>
        </div>

        <div className={styles.flex}>
          <input
            aria-required
            type="number"
            className={styles.input}
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <p>Rating</p>
        </div>
      </div>
      <div className={styles.buttonCenter}>
        <Link href={"/"}>
          <button
            aria-required
            disabled={!rating || !pages || !author || !books}
            className={styles.button}
            onClick={saveBooks}
          >
            Add
          </button>
        </Link>
        <Link href={"/"}>
          <button className={styles.button}>Back</button>
        </Link>
      </div>
    </>
  );
}
