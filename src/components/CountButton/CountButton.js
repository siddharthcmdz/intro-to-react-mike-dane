
import React, {useState} from 'react'
import './CountButton.css'

const CountButton = (props) => {
    console.log(props.incrementBy)
    const [currentCount, setCurrentCount] = useState(0)
    const handleClick = (event) => {
        // console.log('event: ', event)
        setCurrentCount(currentCount+props.incrementBy)
    }

    const buttonStyle = {
        background: props.buttonColor,
        border: '2px solid black',
        borderRadius: '10px'
    }

    return (
        <div> 
            <button style={buttonStyle} onClick={handleClick}>+{props.incrementBy}</button>
            <div className='count-display'><b>{currentCount}</b></div>
        </div>
    )
}

export default CountButton
