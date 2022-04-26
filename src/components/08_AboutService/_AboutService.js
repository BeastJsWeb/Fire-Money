import React from 'react'
import { aboutService as data } from './_data'
import './_AboutService.scss'

const sectionTitle = ['О сервисе']

export default function AboutService() {
  return (
    <section id='aboutService' >
      <div id='aboutService__title'>{sectionTitle}</div>

      <div>
        {data.map(({title, text}) => (
          <div className='aboutService__item' key={title} >
            <div>{title}</div>
            <div>{text}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
