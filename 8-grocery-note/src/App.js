import {useState,useEffect} from 'react'
import { FaTrash,FaEdit } from 'react-icons/fa'
import Notification from './Notification'; 
function App() {

  const getLocalStorage = () => {
    let data = localStorage.getItem('data');
    if (data) {
      return JSON.parse(data)
    } else {
      return [];
    }
  };
  const [data,setData]=useState(getLocalStorage());
  const [updatedata,setUpdateData]=useState('')
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null)

  
  const getData=(e)=>{
    
    setUpdateData(e.target.value)
   
  }
  const addData=()=>{
    
   
    if(!updatedata){
      setErrorMessage({
        text: 'Please enter the data ',
        type: 'error'
      })
      setTimeout(() => {
        setErrorMessage(null)
      }, 2000)
   
    }
    else if(updatedata && isEditing){
      setData(
        data.map((item) => {
          if (item.id === editID) {
            return { ...item, content: updatedata };
          }
          return item;
        })
      );
      setUpdateData('');
      setEditID(null);
      setIsEditing(false);
      setErrorMessage({
        text: 'data updated successfully',
        type: 'success'
      })
      setTimeout(() => {
        setErrorMessage(null)
      }, 2000)
    }
    else{
      
      setErrorMessage({
        text: 'Data entered successfully ',
        type: 'success'
      })
      setTimeout(() => {
        setErrorMessage(null)
      }, 2000)
      const newObject={
        content: updatedata,
        id: data.length + 1
      }
      setData([...data,newObject])
      setUpdateData('')
    }
   
    
  }
  const editItem=(id)=>{
    let afterEdit=data.find((ele)=>{
      return ele.id===id
    })
    setUpdateData(afterEdit.content)
    setIsEditing(true);
    setEditID(id)
   
    
  }
  const removeItem=(id)=>{
    let afterDelete=data.filter((ele)=>{
      return id!==ele.id
    })
      setData(afterDelete)
      setErrorMessage({
        text: 'Data deleted successfully ',
        type: 'error'
      })
      setTimeout(() => {
        setErrorMessage(null)
      }, 2000)
  }
  const clearList=()=>{
    setData([])
    setErrorMessage({
      text: 'All the data cleared ',
      type: 'error'
    })
    setTimeout(() => {
      setErrorMessage(null)
    }, 2000)
  }
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);
  return (
    <>
   
    <div className="mainDiv">
    <Notification message={errorMessage}/>
    <h2>grocery bud</h2> 
    <span className='enterData'>
    <input className='inputData' type="text" value={updatedata} 
    onChange={getData}></input>
    {console.log(data)}
    <button className='displayBtn' onClick={addData}>{isEditing ? 'edit' : 'submit'}</button>
    </span>
    
    {data.length > 0 && (
    <span className='displayData'>{data.map((ele)=>{
    return(
    
      < span className='listData' key={ele.id} ><p>{ele.content}</p>
     < span className='btnData'> <button
                type='button'
                className='editBtn'
                onClick={() => editItem(ele.id)}
              ><FaEdit/></button>   
              <button
                type='button'
                className='deleteBtn'
                onClick={() => removeItem(ele.id)}
              >
                <FaTrash />
              </button>
              </span>
              </span>
    )}
    )}
     
      <button className='clearBtn' onClick={clearList}>
    clear items
  </button> 
   </span>
    

    )
     
    
   
}
    </div>
    
    </>
  );
  
}

export default App;
