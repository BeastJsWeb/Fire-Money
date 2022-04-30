import React from 'react'
import './_waysToGet.scss'
import GlobalBthOnForm from '../00_app/GlobalBthOnForm';
import { waysToGet } from './_data';

export default function WaysToGet() {
  return (
    <section id="WaysToGet">
      <div>
        <div id='WaysToGet__title'>Способы получения</div>

        <div id="WaysToGet__info">
          На карту  QIWI  Yandex Деньги  Наличные
        </div>

        <section id="WaysToGet__list">
          {waysToGet.map(item => (
            <div key={item.toString()} >
              <img src={item} width={90} height={50} alt='wayLogo' />
              <div className="list__arrow">
                  <div></div>
              </div>
            </div>
          ))}
        </section>
          
        <GlobalBthOnForm />
      </div>
  </section>
  )
}
