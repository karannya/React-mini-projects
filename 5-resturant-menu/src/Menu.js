import React from 'react'
import {useState} from 'react'
import Categories from './Categories'
import data from './data'
function Menu() {
    const [menudata, setMenudata] = useState(data);
    let category=['all',...new Set (menudata.map((c)=>c.category))]
   
    const [item,setItem]=useState(category)
  
  
   const getCategory=(cat)=>{
    if(cat==='all'){
        setMenudata(data)
       }else{
        let itemCategory=data.filter((c)=>c.category===cat)
        setMenudata(itemCategory)
       }
   }
   
  return (
    <>
  
    <Categories menutype={item}  getCategory={getCategory}/>
    
    <section >
       {menudata.map((i)=>{
         return ( 
           
            <article className='card' key={i.id}>
            <img className='imageData' src={i.img} alt={i.title}/> 
            <div className='titleData'>
        <h4>{i.title}</h4> 
         
        
         <h5>$ {i.price}</h5> 
         </div>
         <div className='desData'><p>{i.desc}</p></div>
      
         </article>
      
         )
         
       }
       
       )}
    </section>
    </>
  )
}

export default Menu