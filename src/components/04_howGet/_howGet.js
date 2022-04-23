import React from 'react'
import './_howGet.scss';
import {ReactComponent as Step1} from '../../images/какПолучитьДеньги/01.svg'
import {ReactComponent as Step2} from '../../images/какПолучитьДеньги/02.svg'
import {ReactComponent as Step3} from '../../images/какПолучитьДеньги/03.svg'
import {ReactComponent as Step4} from '../../images/какПолучитьДеньги/04.svg'
import GlobalBthOnForm from '../00_app/GlobalBthOnForm';
import '../02_calc/credit__progressBar.scss'

const steps = [
  {Step: Step1, label: 'Выберите сумму займа'},
  {Step: Step2, label: 'Заполните анкету'},
  {Step: Step3, label: 'Дождитесь рассмотрения заявки'},
  {Step: Step4, label: 'Получите деньги любым удобным способом'}
]

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
