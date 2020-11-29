import React, { useEffect, useState } from 'react'
import '../../App.css'
import Filter from '../Filter/Filter'
import Products from '../Products/Products'

export function Catalog(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [items, setItems] = useState(props.list);
    const [typeFilter, setTypeFilter] = useState('None');
    const [priceFilter, setPriceFilter] = useState('None');
    const [conditionFilter, setConditionFilter] = useState('None');
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        const pattern = new RegExp(searchText, 'i');

        let filteredItems = props.list.filter(item => (searchText === '' ||
            pattern.test(item.header) || pattern.test(item.price)));

        filteredItems = filteredItems.filter(item => (item.type === typeFilter ||
            typeFilter === 'None'));

        if (priceFilter === "By lowest price"){
            filteredItems = filteredItems.sort((a, b) => (a.price - b.price))
        }
        else if (priceFilter === "By highest price"){
            filteredItems = filteredItems.sort((a, b) => (b.price - a.price))
        }    
        
        setItems(filteredItems.filter(item => (item.condition === conditionFilter ||
            conditionFilter === 'None')));
    }, [typeFilter, priceFilter, conditionFilter, searchText, props.list]);


    return (
        <div className="catalog">
            <Filter type={[typeFilter, setTypeFilter]}
                    price={[priceFilter, setPriceFilter]} 
                    condition={[conditionFilter, setConditionFilter]} 
                    search={[searchText, setSearchText]} />
            <Products list={items} />
        </div>
    )
};

export default Catalog;