import React from 'react'
import { FilterContainer } from "./Filter.styled.js"
import Select from "../Select/Select"
import Search from '../Search/Search.js'
import { SelectForm } from '../Select/Select.styled'


export default function Filter({ type, price, condition, search }) {
    return (
        <FilterContainer>
            <div style={{ display: "flex", alignItems: "center" }}>
                <SelectForm>
                    <Select noSelect="Any Type" options={["Fishing Reels", "Lures", "Fidhing Accessories", "Rod & ReeL Combos", "Rods", "Bowfishing", "Fishing Sale"]} state={type} />
                    <Select noSelect="Any Price" options={["By lowest price", "By highest price"]} state={price}/>
                    <Select noSelect="Any Condition" options={["Used", "New"]} state={condition} />
                </SelectForm>
            </div>
            <Search state={search} />
        </FilterContainer>
    )
}
