import React, { useEffect, useState, useContext } from 'react'
import '../../App.css'
import Filter from '../Filter/Filter'
import Products from '../Products/Products'
// import { myItems } from '../Items/Items'
import Spinner from "../Spinner/Spinner"
import { getFilteredItems, getItems } from "../ConnectionToBackend/connectionToBackend"

export function Catalog() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [items, setItems] = useState([]);
    const [showedItems, setShowedItems] = useState([]);
    const [typeFilter, setTypeFilter] = useState('None');
    const [priceFilter, setPriceFilter] = useState('None');
    const [conditionFilter, setConditionFilter] = useState('None');
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        (async function () {
            setItems(await getFilteredItems(typeFilter, priceFilter, conditionFilter));
        })()
    }, [typeFilter, priceFilter, conditionFilter]);

    useEffect(() => {
        const pattern = new RegExp(searchText, 'i');

        let filteredItems = items;

        if (searchText !== "") {
            filteredItems = filteredItems.filter(item => (pattern.test(item.header)
                || pattern.test(item.description) || pattern.test(item.price)));
        }

        if (typeFilter !== "None") {
            filteredItems = filteredItems.filter(item => (item.item_type === typeFilter));
        }

        if (priceFilter === "By lowest price") {
            filteredItems = filteredItems.sort((a, b) => (a.price - b.price));
        }
        else if (priceFilter === "By highest price") {
            filteredItems = filteredItems.sort((a, b) => (b.price - a.price));
        }

        if (conditionFilter !== "None") {
            filteredItems = filteredItems.filter(item => (item.condition === conditionFilter));
        }

        setShowedItems(filteredItems);
    }, [typeFilter, priceFilter, conditionFilter, searchText, items]);


    if (showedItems.length === 0)
        return (
            <div className="catalog">
                <Filter type={[typeFilter, setTypeFilter]}
                    price={[priceFilter, setPriceFilter]}
                    condition={[conditionFilter, setConditionFilter]}
                    search={[searchText, setSearchText]} />
                <Spinner />
            </div>
        )
    else
        return (
            <div className="catalog">
                <Filter type={[typeFilter, setTypeFilter]}
                    price={[priceFilter, setPriceFilter]}
                    condition={[conditionFilter, setConditionFilter]}
                    search={[searchText, setSearchText]} />
                <Products list={showedItems} />
            </div>
        )
};

export default Catalog;