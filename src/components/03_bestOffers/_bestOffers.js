import React from "react";
import './_bestOffers.scss'
import ListItem from "./list__item";
import { offers } from "./_data";

const BestOffers = () => {
  return (
    <section id="bestOffers">
      <div>
        <div id='bestOffers__title'>Лучшие предложения</div>

        <div id="bestOffers__list">
          {offers.map(item => (
            <ListItem {...item} key={item.grade} />
          ))}

        </div>

        <div id="bestOffers__info">
          * Расчёт не является публичное офертой и может 
          отличаться от реальной ставки кредитора
        </div>
      </div>
    </section>
  )
}

export default BestOffers