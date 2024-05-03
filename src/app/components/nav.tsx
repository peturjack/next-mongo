import React from "react";
import styles from "../page.module.css";
import { mainLinks } from "../../../constant";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <ul className={styles.navUl}>
        <img src="" alt="Logo" />
        {mainLinks.map((link, index) => {
          return (
            <Link key={index} href={link.route}>
              <li>{link.label}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
