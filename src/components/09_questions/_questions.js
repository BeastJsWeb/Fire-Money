import React from 'react'
import { questions } from './_data'
import './_questions.scss'

const sectionTitle = ['Вопросы-ответы']

export default function Questions() {
  return (
    <section id='questions' >
      <div>
        <div id='questions__title' >{sectionTitle}</div>
        <div>
          {questions.map(({question, answer}) => (
            <div key={question} >
              <input type="radio" id={question} name='onAccordion' />

              <label className='questions__item' htmlFor={question} >
                <div>{question}</div>
                <div>{answer}</div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
