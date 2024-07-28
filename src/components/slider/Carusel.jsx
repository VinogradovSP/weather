import cl from "./slider.module.css";

export const Carusel = ({ el }) => {
  return (
    <figure className={cl.sliderFigure}>
      <figcaption>{el.time || el.day}</figcaption>
      <img src={el.icon} alt="icon" />
      <p>{el.temp}</p>
    </figure>
  );
};
