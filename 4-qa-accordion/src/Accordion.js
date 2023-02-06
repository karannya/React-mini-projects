import React from 'react'
import { useState } from 'react';
import Display from './Display';
import data from './data'
function Accordion() {
    
    const [information,setInfo]=useState(data)
  

  return (
    <>
   
     <div className='main-div'>
    <div className='left-div'> 
     <h1> Questions And Answers About Login</h1>  
  </div>  
  
  <div className='right-div'>
  {information.map((detail)=> {
    const {id,title,info}=detail;
    return(
    <Display key={id} title={title} info={info}/>
    )
  }
            
        
        )}  
  </div>
    
   
    </div>
 
    </>
   
  )
}

export default Accordion

