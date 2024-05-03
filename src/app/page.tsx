"use client";
import styles from "../app/page.module.css";
import Link from "next/link";

export default function Both() {
  console.log("hello both");
  return (
    <>
      <div className={styles.buttonCenter}>
        <Link href={"/front"}>
          <button className={styles.button}>Add</button>
        </Link>
        <Link href={"/back"}>
          <button className={styles.button}>Update</button>
        </Link>
      </div>
    </>
  );
}
