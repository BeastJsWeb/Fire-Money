import React from 'react'

export default function Сlient(
  {name, amount,icon, city, status, time}
  ) {
  return (
    <div className='ourClients__client'>
      <img src={status} width={30} height={30} alt={name} />

      <div>
        <div>{name}</div>
        <div>{amount} {time} назад</div>
        <div>
          <img src={icon} width={12} height={16} alt='location' />
          <span>{city}</span>
        </div>
      </div>
    </div>
  )
}
