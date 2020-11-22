import React from 'react'
import { FilterContainer } from "./Filter.styled.js"
import Select from "../Select/Select"
import { Button } from '../Button/Button'
import Search from '../Search/Search.js'

export default function Filter() {
    return (
        <FilterContainer>
            <div style={{ display: "flex", alignItems: "center" }}>
                <Select />
                <Button
                    buttonStyle='btn--outline'
                    buttonSize='btn--medium'
                >
                    Apply</Button>
            </div>
            <Search />
        </FilterContainer>
    )
}
