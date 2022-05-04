import React from 'react'
import './global.scss'

export default function GlobalNavBtns(
  {data, className, id}
  ) {
  return (
    <div id={id} className={className} >
      {data.map(({name, ancor}) => (
        <a href={ancor} key={name} >
          {name}
        </a>
      ))}
    </div>
  )
}