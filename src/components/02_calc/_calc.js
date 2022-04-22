import React from "react";
import Calculator from "./calculator";
import './_calc.scss'
import bgImg from '../../images/calc/01.webp'
import bgImgTab from '../../images/calc/01-768.webp'
import bgImgMob from '../../images/calc/01-360.webp'
import bgGirl from '../../images/calc/02.webp'
import iconFire from '../../images/calc/03.webp'

const calcData = [
  {
    title: 'Сумма кредита',
    value: '65 000 ₽',
    min: '1000 ₽',
    max: '100 000 ₽'
  },

  {
    title: 'Срок кредита',
    value: '8 дней',
    min: '3',
    max: '30'
  },

  {
    sum: 'Вы берете',
    value: '20 000 ₽',
    backPay: 'Дата возврата',
    number: '08 января 2022'
  },

  {
    sum: 'К возврату',
    value: '26 650 ₽',
    backPay: 'Ежемесячный платеж',
    number: '5650 ₽'
  },
]

const Calc = () => {
  return (
    <section id="calc">
 
      <picture id="calc__bgImg">
        <source srcSet={bgImgMob} media="(max-width: 400px)" type="image/webp" />
        <source srcSet={bgImgTab} media="(max-width: 800px)" type="image/webp" />
        <source srcSet={bgImg} media="(min-width: 801px)" type="image/webp" />
        <img src={bgImg} width={1920} height={800} alt='bgImg' />
      </picture>

      <div id="calc__text">
        <div>
          <img src={iconFire} width={45} height={55} alt='iconFire' />
          ГОРЯЧИЕ ПРЕДЛОЖЕНИЯ</div>
        <div>БЫСТРЫХ ЗАЙМОВ ПО ВСЕЙ РОССИИ!</div>
        <div>Без проверки кредитной истории. От 1 000 ₽ за 15 минут.</div>
        <div>Внимание! Услуга обработки заявки платная 
        и составляет от 98 ₽ до 398 ₽ раз в неделю</div>
      </div>

      <div>
        <picture id="calc__bgGirl">
          <source srcSet={bgGirl} type="image/webp" />
          <img src={bgGirl} width={525} height={760} alt='bgImg' />
        </picture>

        <Calculator calcData={calcData}/>
      </div>
      
    </section>
  )
}

export default Calc