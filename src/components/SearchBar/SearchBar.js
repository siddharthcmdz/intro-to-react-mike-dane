import React, {useState} from 'react'
import './SearchBar.css'



const SearchBar = (props) => {
    const initText = ''
    const [searchValue, setSearchValue] = useState(initText)
    
    const handleOnChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }

    console.log('props.products: ', props.products)
    const filteredProducts = props.products.filter((prod) => {
        return prod.includes(searchValue)
    })

    const handleClearButton = (event) => {
        setSearchValue(initText)
    }

    const shouldRender = searchValue.length > 0
    console.log('shouldRender', shouldRender)


    return <div>
        <input type="text" value={searchValue} onChange = {handleOnChange} />
        {shouldRender && <button onClick={handleClearButton}>clear</button>}

        <ul>
        {
        filteredProducts.map((prod) => {
            return <li key={prod}>{prod}</li>}
        )
        }
        </ul>
    </div>
}

export default SearchBar