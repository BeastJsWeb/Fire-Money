import React from "react";
import "./calculator.scss";
import GlobalBthOnForm  from '../00_app/GlobalBthOnForm'

const Calculator = ({calcData}) => {

  //const [position, setPosition] = useState(0)
  //const duration = 200

  return (
    <div id="calc__calc">

      {calcData.slice(0,2).map((
          {title, value, min, max}
        ) => (
        <div className="calc__credit" key={title} >
          <input type='number' placeholder={title} defaultValue='' />

          <div className="credit__progressBar">
            <span>{value}</span>
            <div 
            //step={1}
            //min={0}
            //max={duration}
            //value={position} 
            //onChange={(_, value) => setPosition(value)}
            >
              <div></div>
              <button>
                <span></span>
                <span></span>
              </button>
              <div></div>
            </div>
          </div>

          <div>{min}<span>{max}</span></div>
        </div>
      ))}
      
      <GlobalBthOnForm />

      <div id='calc__result'>

        {calcData.slice(2,4).map((
            {sum, value, backPay, number}
          ) => (
          <div key={backPay}>
            <div>
              <div>{sum}</div>
              <div>{value}</div>
            </div>
            <div>
              <div>{backPay}</div>
              <div>{number}</div>
            </div>
          </div>
        ))}
        
      </div>

    </div>
  )
}

export default Calculator