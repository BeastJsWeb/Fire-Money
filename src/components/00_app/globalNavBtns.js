import React, {useState} from 'react'
import './global.scss'

export default function GlobalNavBtns (
  {data, className, id}
  ) {

    const [ NavOpen, setNavOpen ] = useState()
    const navClose = () => { 
      setNavOpen(document.getElementById('nav--onClick').checked = false)
    }

  return (
    <div 
    id={id} 
    className={className} 
    onClick={navClose} 
    open={NavOpen} 
    >
      {data.map(({name, ancor}) => (
        <a href={ancor} key={name} >
          {name}
        </a>
      ))}
    </div>
  )
}