import React from 'react'
import GlobalBthOnForm from '../00_app/GlobalBthOnForm'
import './_getMoney.scss'
import bgWeb from '../../images/получиДеньги/01web.webp'
import bgWeb2 from '../../images/получиДеньги/02web.webp'
import bgTab from '../../images/получиДеньги/01tab.webp'

export default function GetMoney() {
  return (
    <article id='getMoney'>
      <div id='getMoney__content' >
        <div id='getMoney__title'>Получи деньги здесь и сейчас</div>
        <div>Без проверки кредитной истории.<br/>От 1 000 ₽ за 15 минут.</div>
        <GlobalBthOnForm />
      </div>

      <div id='getMoney__media' >
        <picture >
          <source srcSet={bgWeb} media="(min-width: 1440px)" />
          <source srcSet={bgTab} media="(min-width: 768px)" />
          <img src={bgTab} width={1920} height={320} alt="bg" />
        </picture>
        <img src={bgWeb2} width={640} height={420} alt="bg" />
      </div>
    </article>
  )
}
