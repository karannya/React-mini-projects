import React,{useState} from 'react'
import { FaPlus,FaMinus } from 'react-icons/fa';
function Display({title,info,id}) {
    const [showMore, setShowMore] = useState(false);
  return (
    <>
    
              
              <div className='container' key={id}>
                <header >
                {title}
              
               {/*  <button className='btn' onClick={()=>showData(i.id)}> */}
               <button className='btn' onClick={()=>setShowMore(!showMore)}>
                    {showMore? <FaMinus/>: <FaPlus/> }</button>
                    </header>
                    <p> {showMore &&   info } </p>
                </div>  
                    
                         
                      
        
    </>
  )
}

export default Display