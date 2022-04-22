import React from "react";

const ListItem = ({grade, offer, duration, callback, total, cssColor, icon}) => {
  return (
    <button className="list__item" >
      <div className="item__grade" style={{ backgroundColor: cssColor}} >
        {grade} 
      </div>

      <div className="item__content" >
        <div>
          <span style={{ color: cssColor}} >
            {offer} &#160;
          </span> 
          на &#160;
          <span style={{ color: cssColor}} >
            {duration} &#160;
          </span> 
          дней
        </div>
        <div>
          <img src={icon} width={10} height={10} alt='icon' /> Дата возврата:
          <span> {callback}</span>
        </div>
        <div><span>₽</span> К возврату:<span> {total}</span></div>
      </div>
      
    </button>
  )
}

export default ListItem