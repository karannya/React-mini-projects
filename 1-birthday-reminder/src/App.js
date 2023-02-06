import { useState } from 'react';
import data from './data'
import { FaTrash } from "react-icons/fa";
function App() {
  const[person,setPerson]=useState(null)
   const ClearData=()=>{
    setPerson('')
   }
   const showData=()=>{
    setPerson(data)
   }
 
  const removeData=(id)=>{
       const remainingData=person.filter((i)=>id!==i.id)
       setPerson(remainingData)
      
  }
   if(!person){
    return(
    <div className='card1'>
       <span className='noData'>Please click on the button to see birthday list. {data.length} people has birthday.</span>
       <button className='btnShow' onClick={showData}>Show</button>
       </div>
       )
   }else{
  return (
    <>
      <div className='card'>
       
      {person.map((personInfo)=>{
         const {id,name,age,image}=personInfo
         return (
          <div className='detail' key={id}> 
          <img className='dataImg' src={image} alt='person'/>
          <span><h3>{name} <FaTrash onClick={()=>removeData(id)}/></h3>
          
          <h4>{age} years </h4>
          </span></div>
         )
          
      })}
      <button className='btn' onClick={ClearData}>ClearAll</button>
    
      </div>
    </>
  );
}
}
export default App;
