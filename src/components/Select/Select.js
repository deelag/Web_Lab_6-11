import React from 'react'
import { SelectBox, Option } from './Select.styled'


export default function Select({ noSelect, options, state: [value, setValue] }) {

    return (
        <SelectBox value={value} onChange={e => setValue(e.target.value)} >
            <Option value="None">{noSelect}</Option>
            {options.map((option) =>
                <Option key={option}>{option}</Option>
            )}
        </SelectBox>
    )
}
