import { weatherData } from "../../../mockArreys/weatherData";
import { Card } from "./Card";
import cl from "./cardList.module.css";

export const CardList = () => {
  return (
    <ul className={cl.cards}>
      {weatherData?.map((card) => (
        <Card card={card} key={card.title} />
      ))}
    </ul>
  );
};
