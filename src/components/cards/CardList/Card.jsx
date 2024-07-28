import React from "react";
import cl from "./cardList.module.css";

export const Card = ({ card }) => {
  return (
    <li className={cl.item}>
      <h4>{card.title}</h4>
      <figure>
        <img src={card.icon} alt={card.title} />
        <figcaption>
          {card.indication || card.currentTime || card.windSpeed}{" "}
          {card.units || ""}
        </figcaption>
      </figure>
      <div className={cl.progress}>
        {card.indication ? (
          <div
            className={`${cl.progressBar} 
            ${card.pressure ? cl.progressBarGradient : ""}`}
            style={{
              "--positionMask": card.pressure ? "65%" : card.indication + "%",
            }}
          ></div>
        ) : (
          ""
        )}
        {card.param ? (
          <p>
            {card.param} {card.time || ""}
          </p>
        ) : (
          <p className={cl.humidity}>
            <span>{card.minParams}</span>
            <span>{card.maxParams}</span>
          </p>
        )}
      </div>
    </li>
  );
};
