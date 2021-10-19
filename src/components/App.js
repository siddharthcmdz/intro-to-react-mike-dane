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
        fetch('https://fakestoreapi.com/products/')
        .then(res=>res.json())
        .then(prodArray=>{
            const newProdState = prodArray.map((prod)=>{
                return prod.title
            })
            setProductsState(newProdState)
        })
        // setTimeout(()=>{
        //    setProductsState(products)
        // }, 3000)
    }, [])

    const hasProducts = productsState.length > 0

    return ( 
    <div> 
        
        {hasProducts ? <SearchBar products={productsState} /> : 'loading...'}

        <CountButton incrementBy={1} buttonColor={'blue'}/>
        <CountButton incrementBy={5} buttonColor={'green'}/>
        <CountButton incrementBy={15} buttonColor={'red'}/>
    </div>
    )    
}

export default App
