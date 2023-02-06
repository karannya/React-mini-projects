import { useEffect,useState } from "react";
import Loading from "./Loading";
import axios from "axios";
function App() {
  const [data,setData]=useState([])
  const [loading,isLoading]=useState(false)
  const [showMore, setShowMore] = useState(false);
  const getData=()=>{
  try{
      isLoading(false)
     axios
     .get('https://course-api.com/react-tours-project')
     .then(response=>{
      setTimeout(()=>{
        isLoading(true)
       },2000)
     setData(response.data)
     })
  }catch{
    isLoading(true)
  }
}
  useEffect(()=>{
    getData()
  }, [])

  const removeData=(id)=>{
    const remainingData=data.filter((i)=>id!==i.id)
    console.log(id)
    setData(remainingData)
   
  }
  if 
  (!loading){
    return(
      <Loading/>
      
    )
  } else if(data.length===0){
    return(
      <>
      <div className="getData">
     
      <h2>No tours left</h2>
      <button className="btnFetch" onClick={getData}>Refresh</button>
      </div>
     </>
    )
  }
  else{
    return(
      <>
     
      <div className="showData">
      <div className="heading">
      <h1><u>Our tours</u></h1>
      </div>
      
      {data.map((detailInfo)=>{
       const {id,name,info,image,price}=detailInfo
       return( 
         <div  key={id} >
          <div>  <img src={image} alt={name} className='showImg'/>   </div>
          <span className="showName"> 
          <h3> {name} </h3> 
          <h4>${price}</h4>
          </span>
          <div className="showInfo"> {showMore ? info : `${info.substring(0, 250)}`}
          <button className="btnShow" onClick={()=>setShowMore(!showMore)}>
          {showMore ? "Show less" : "...Show more"}</button>
           </div>
        
        
         <button className="btnRemove" onClick={()=>removeData(id)}>Not Interested</button>
         </div>
         ) 
      })}
   </div> 
   </>
    )
  };
}

export default App;




    
