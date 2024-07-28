import { useState } from "react";
import { Carusel } from "./Carusel";
import { Button } from "../ui";
import { hourData } from "../../mockArreys/hourData";
import cl from "./slider.module.css";
import { weekData } from "../../mockArreys/weekData";

export const Slider = () => {
  const [active, setActive] = useState(true);
  let changeWeekDay = active ? hourData : weekData;

  return (
    <section className={cl.slider}>
      <div className={cl.title}>
        <h2>Прогноз:</h2>
        <Button
          className={`
          ${cl.text} 
          ${active ? cl.activeText : ""}
         `}
          onClick={() => setActive(true)}
        >
          на 24 часа
        </Button>
        <Button
          className={`
          ${cl.text} 
           ${active ? "" : cl.activeText}
          `}
          onClick={() => setActive(false)}
        >
          на 5 дней
        </Button>
      </div>

      <div className={cl.sliderMain}>
        <Button className={cl.prev} />

        <div className={cl.carousel}>
          {changeWeekDay.map((el, index) => {
            return <Carusel el={el} key={index} />;
          })}
        </div>

        <Button className={`${cl.next} ${cl.activeBtn}`} />
      </div>
    </section>
  );
};
