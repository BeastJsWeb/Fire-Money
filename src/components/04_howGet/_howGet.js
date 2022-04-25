import React from 'react'
import './_howGet.scss';
import { steps } from './_data';
import GlobalBthOnForm from '../00_app/GlobalBthOnForm';
import '../02_calc/credit__progressBar.scss'

export default function HowGet() {
  return (
    <section id='howGet'>
      <div>
        <div id='howGet__title'>Как получить деньги</div>

        <div className='howGet__steps'>
          <div id='steps__icons'>
            {steps.map(({Step, label}, i) => (
              <div key={label} >
                <Step className='icons__item' width={65} height={65} />
                <button>{i + 1}</button>
              </div>
            ))}
          </div>

          <div id='steps__progressBar'></div>

          <div id='steps__label'>
            {steps.map(({label}) => (
              <div key={label} >{label}</div>
            ))}
          </div>
        </div>
        
        <GlobalBthOnForm />
      </div>
    </section>
  )
}
