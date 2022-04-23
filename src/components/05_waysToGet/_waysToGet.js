import React from 'react'
import './_waysToGet.scss'
import GlobalBthOnForm from '../00_app/GlobalBthOnForm';
import yandex from '../../images/способыПолучения/01.webp'
import qiwi from '../../images/способыПолучения/02.webp'
import visa from '../../images/способыПолучения/03.webp'
import ma from '../../images/способыПолучения/04.webp'
import cash from '../../images/способыПолучения/05.webp'

const waysToGet = [yandex, qiwi, visa, ma, cash]

export default function WaysToGet() {
  return (
    <section id="WaysToGet">
      <div>
        <div id='WaysToGet__title'>Способы получения</div>

        <div id="WaysToGet__info">
          На карту  QIWI  Yandex Деньги  Наличные
        </div>

        <div id="WaysToGet__list">
          {waysToGet.map(item => (
            <div key={item.toString()} >
              <img src={item} width={90} height={50} alt='wayLogo' />
              <div className="list__arrow">
                  <div></div>
              </div>
            </div>
          ))}
        </div>
          
        <GlobalBthOnForm />
      </div>
  </section>
  )
}
