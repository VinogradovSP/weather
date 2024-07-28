import React from "react";
import classes from "./footer.module.css";
import { Anchor } from "../ui";

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>
        Проект выполнен в рамках стажировки{" "}
        <Anchor target="_blank" href="https://preax.ru">
          PREAX
        </Anchor>
      </p>
    </footer>
  );
};
