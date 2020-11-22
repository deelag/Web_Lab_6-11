import React from 'react'
import { SelectForm, SelectBox, Option } from './Select.styled'

export default function Select() {
    return (
       <SelectForm>
           <SelectBox name='byType'>
                <Option>Any Type</Option>
                <Option>Fishing Reels</Option>
                <Option>Lures</Option>
                <Option>Fidhing Accessories</Option>
                <Option>Rod & ReeL Combos</Option>
                <Option>Rods</Option>
                <Option>Bowfishing</Option>
                <Option>Fishing Sale</Option>
            </SelectBox>
            <SelectBox name='byPrice'>
                <Option>Any Price</Option>
                <Option>By lowest price</Option>
                <Option>By biggest price</Option>
            </SelectBox>
            <SelectBox name='byCondition'>
                <Option>Any Condition</Option>
                <Option>Used</Option>
                <Option>New</Option>
            </SelectBox>
       </SelectForm>
    )
}
