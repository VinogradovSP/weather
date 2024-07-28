import { CardList } from "../cards/CardList/CardList";
import { CityCard } from "../cards/CityCard ";
import cl from "./main.module.css";

export const Main = () => {
  return (
    <main className={cl.main}>
      <CityCard />
      <CardList />
    </main>
  );
};
