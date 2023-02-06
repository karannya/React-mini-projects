import React from 'react'

function Button({data,setValue}) {
    
  return (
    <div>
       {data.map((item)=>{
          return(
            <button
            key={item.id}
            onClick={() => setValue(item.id)}
            
          >
            {item.company}
          </button>
          )
       })} 
    </div>
  )
}

export default Button