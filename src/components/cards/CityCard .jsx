import cl from "./city.module.css";
import { city } from "../../mockArreys/city";

export const CityCard = () => {
  return (
    <section className={cl.description}>
      <h2>{city.title}</h2>
      <p>{city.day}</p>
      <time>{city.time}</time>
      <strong>{city.temperature}</strong>
      <figure>
        <img src={city.icon} alt={city.text} />
        <figcaption className={cl.phenomenon}>{city.caption}</figcaption>
      </figure>
      <p>{city.feeling}</p>
    </section>
  );
};
