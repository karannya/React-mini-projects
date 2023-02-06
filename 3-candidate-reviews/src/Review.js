import React, { useState } from 'react'
import data from './data.js'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
function Review() {
    const [count, setCount] = useState(0);
    const personData = data[count]
    
    const checkIndex = (num) => {
        if (num >= data.length){
            return 0
        }
       else if (num < 0) {
        return data.length-1
        }
        return num;
    }

    const handleForward = () => {
        let newValue=count+1
        setCount(checkIndex(newValue))   
    }

    const handleBackward = () => {
        let newValue=count-1
            setCount( checkIndex(newValue))     
    }
    
    const randomClick=()=>{
       let ran= Math.floor(Math.random() * data.length);
        setCount(checkIndex(ran))  
    }

    return (
        <>
            <div className='card' key={personData.id}>
                <div><img className='showImg' src={personData.image} alt={personData.name} /></div>
                <div>
                    <h3>{personData.name} </h3>
                    {personData.job}
                </div>
                <div>
                    {personData.text}
                </div>
                <div><FaAngleLeft onClick={handleBackward} /><FaAngleRight onClick={handleForward} /></div>
                <button onClick={randomClick}>Surprise Me</button>
            </div>
        </>
    )
}

export default Review