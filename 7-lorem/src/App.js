import { useState } from 'react';
import text from './Data'

function App() {
  const [count,setCount]=useState(0)
  const [data,setData]=useState([])
  const handleSubmit=(e)=>{
    e.preventDefault();
    let amount = parseInt(count);
         if(count <=0){
          amount = 1;
         }
         else if (count > 8) {
          amount = 8;
        }
        setData(text.slice(0, amount));
  }
  return (
    <>
    <div className='mainDiv'>
     <h1>Tired of boring Lorem ipsum?</h1>
     <div className='formDiv'>
     <form onSubmit={handleSubmit}>
     <label> Paragraph: </label>
     <input  className='insertCount' htmlFor='amount' type='number'
            name='amount'
            value={count}
            id='amount'
            onChange={(e) => setCount(e.target.value)}
            />
            <button className='btn'>GENERATE</button>
            
     </form>
     </div>
     <div className='textDiv'>
     {data.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
     </div>
    </div>
    </>
  );
}

export default App;
