import React from 'react'
import { useNavigate } from 'react-router-dom'

const Test = (props) => {
 let navigate = useNavigate()
    return (
    <div>
        {props.show.map((val,index) => 
          {if(index%3!==0){
           return <> <div className="RT">
            <div
              className='PdisIn1'
              onClick={() => navigate("/Product/" + val.id)}
            >
              <img className='INfoImg1' src={val.images[0]} alt='' />
              <p className='Tittle011'> {val.name}{index}</p>
              <p className='P01'>Rs {val.price}</p>
            </div></div>
            </>
          }  }
          
           
          )}
    </div>
  )
}

export default Test
