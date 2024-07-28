import React from "react";
import cl from "./styles/app.module.css";
import { Header, Main, Slider, Footer } from "./components";

export const App = () => {
  return (
    <div className={cl.wrapper}>
      <div className={cl.app}>
        <Header />
        <Main />
        <Slider />
        <Footer />
      </div>
    </div>
  );
};
