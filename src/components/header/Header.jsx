import React, { useState } from "react";
import cl from "./header.module.css";
import { Logo } from "../logo/Logo";
import { Button, Input } from "../ui";

export const Header = () => {
  const [valueSearch, setValueSearch] = useState("");
  console.log(valueSearch);

  const submitForm = (e) => {
    e.preventDefault();
    setValueSearch("");
  };

  return (
    <header>
      <Logo />
      <form onClick={submitForm} className={cl.formSearch} name="header-search">
        <Input
          name="search"
          placeholder="Поиск по городу"
          className={cl.headerSearch}
          onChange={(e) => setValueSearch(e.target.value)}
          value={valueSearch}
        />
        <Button type="submit" className={cl.searchBtn}>
          <img
            src={`${
              valueSearch.trim()
                ? "/images/iconButtons/close.svg"
                : "/images/iconButtons/search.svg"
            }`}
            className={cl.searchIcons}
            alt="search"
          />
        </Button>
      </form>
    </header>
  );
};
