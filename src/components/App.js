import React from 'react'
import CountButton from './CountButton/CountButton'

const App = () => {
    return ( 
    <div> 
        <CountButton incrementBy={1} buttonColor={'blue'}/>
        <CountButton incrementBy={5} buttonColor={'green'}/>
        <CountButton incrementBy={15} buttonColor={'red'}/>
    </div>
    )    
}

export default App
