"use client"

import React, { useState } from 'react'
import './SearchBar.css'

const SearchBar = (props) => {

    const [searchValue, setSearchValue] = useState('')

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handleClearClick = () => {
        setSearchValue("")
    }

    const shouldDisplayButton = searchValue.length > 0

    const filteredProducts = props.products.filter((product) => {
        if (!product.title) return false;
        return product.title.toLowerCase().includes(searchValue.toLowerCase()) 
    })

    return <div className='SearchBar-container'>
        <input type="text" value={searchValue} onChange={handleInputChange} />
        {shouldDisplayButton && <button onClick={handleClearClick}>Clear</button>}

        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {filteredProducts.map((product) => (
                    <tr key={product.title}>
                        <td>
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                style={{ width: '100px', height: '100px' }} 
                            />
                        </td>
                        <td>
                            {product.title}
                        </td>
                        <td>
                            ${product.price ? product.price.toFixed(2) : 'N/A'}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
       
}

export default SearchBar
