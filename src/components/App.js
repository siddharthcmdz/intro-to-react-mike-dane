import React, {useState, useEffect} from 'react'
import CountButton from './CountButton/CountButton'
import SearchBar from './SearchBar/SearchBar'

const App = () => {
    const products = [
        'tooth paste',
        'tooth brush',
        'mouth wash',
        'dental floss',
        'mouth guard'
    ]

    const [productsState, setProductsState] = useState([])

    useEffect(()=>{
        console.log('component mounted')
        setTimeout(()=>{
           setProductsState(products)
        }, 4000)
    }, [])

    return ( 
    <div> 
        <SearchBar products={productsState}/>
        <CountButton incrementBy={1} buttonColor={'blue'}/>
        <CountButton incrementBy={5} buttonColor={'green'}/>
        <CountButton incrementBy={15} buttonColor={'red'}/>
    </div>
    )    
}

export default App
