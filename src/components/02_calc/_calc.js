import React from "react";
import './_calc.scss'
import Calculator from "./calculator";
import bgWeb from '../../images/calc/01.webp'
import bgPreload from '../../images/calc/01preload.webp'
import bgIE from '../../images/calc/01.jpg'
import bgTab from '../../images/calc/01-768.webp'
import bgMob from '../../images/calc/01-360.webp'
import bgGirl from '../../images/calc/02.webp'
import iconFire from '../../images/calc/03.webp'
import { calcData } from "./_data";
import lozad from 'lozad'

const observer = lozad()
observer.observe()

const Calc = () => {
  return (
    <section id="calc">
      <picture id="calc__bgImg"
      className="lozad" data-iesrc={bgIE} data-alt="bg" >
        <source srcSet={bgMob} media="(max-width: 400px)" type="image/webp" />
        <source srcSet={bgTab} media="(max-width: 800px)" type="image/webp" />
        <source srcSet={bgWeb} media="(min-width: 801px)" type="image/webp" />
        <img src={bgPreload} width={1920} height={800} alt='bg' />
      </picture>

      <section id="calc__text">
        <div>
          <img src={iconFire} width={45} height={55} alt='iconFire' />
          ГОРЯЧИЕ ПРЕДЛОЖЕНИЯ</div>
        <div>БЫСТРЫХ ЗАЙМОВ ПО ВСЕЙ РОССИИ!</div>
        <div>Без проверки кредитной истории. От 1 000 ₽ за 15 минут.</div>
        <div>Внимание! Услуга обработки заявки платная 
        и составляет от 98 ₽ до 398 ₽ раз в неделю</div>
      </section>

      <div>
        <picture id="calc__bgGirl">
          <source srcSet={bgGirl} type="image/webp" />
          <img src={bgGirl} width={525} height={760} alt='bgImg' />
        </picture>

        <Calculator calcData={calcData} />
      </div>
    </section>
  )
}

export default Calc