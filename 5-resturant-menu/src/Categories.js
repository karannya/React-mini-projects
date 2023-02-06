import React from 'react'

function Categories({menutype,getCategory}) {
   
  return (
    <>
    <div className='menulist'>
    {menutype.map((cat,index)=>{
        return (
            <button className='btn'  key={index} onClick={()=>getCategory(cat)}>
                {cat}
            </button>
        )
    }
    )}
    
    </div>
    </>
  )
}

export default Categories