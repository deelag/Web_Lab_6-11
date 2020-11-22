import React from 'react'
import '../../App.css'
import Filter from '../Filter/Filter'
import Products from '../Products/Products'

export default function Catalog(){
    return (
        <div className="catalog">
            <Filter />
            <Products />
        </div>
    )
};
