import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from './Button'
import { FaAngleDoubleRight } from 'react-icons/fa'
function Tabs() {
    const [load,setLoad]=useState(true)
    const [data,setData]=useState([])
    const [item, setItem] = useState(0)
    const url = 'https://course-api.com/react-tabs-project'
    const getData=()=>{
        axios
        .get(url)
        .then(response=>{
            setData(response.data)
            setLoad(false)
        })
    }
    useEffect(()=>{
        getData()
    },[])

    const setValue=()=>{

    }
    if(load){
        return(
            < h1>Loading...</h1>
        )
    }
    const {id,company, dates, duties, title}=data[item]
  return (
    <>
     <div className='dataDiv'>
    

   
       
      
        <>
        <div className='leftDiv'>
        {data.map((cData,index)=>{
            return (
                <button key={cData.id} onClick={()=>{setItem(index)}}
                className={`jobBtn ${index === item && 'activeBtn'}`}
                >{cData.company} </button>
            )
        })}
        </div> 
        
       
        <div className='rightDiv'>
        <h3> {title} </h3> 
       <h4> {company} </h4> 
        <h5> {dates} </h5> 
        {duties.map((duty,index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="jobIcon"></FaAngleDoubleRight>
               {duty}
              </div>
            )
        })
    } 
    
        </div>
        
        </>
       
     {/*  })} */}
 
     </div>
     <div className='moreBtn'>
     <button type="button" className="btn">
        more info
      </button>
      </div>
    </>
    
  )
}

export default Tabs