import React from "react";
import './_bestOffers.scss'
import icon from '../../images/лучшиеПредложения/01.svg'
import ListItem from "./list__item";

const offers = [
  {
    grade: 'LITE',
    offer: '15 000 ₽',
    duration: 7,
    callback: '12 января 2022',
    total: '45 500 ₽',
    icon,
    cssColor: '#FFC83E'
  },
  {
    grade: 'BASIC',
    offer: '25 000 ₽',
    duration: 1,
    callback: '12 января 2022',
    total: '45 500 ₽',
    icon,
    cssColor: '#FF7B00'
  },
  {
    grade: 'PRO',
    offer: '45 000 ₽',
    duration: 1,
    callback: '12 января 2022',
    total: '45 500 ₽',
    icon,
    cssColor: '#FA5914'
  }
]

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