import React, { useState } from 'react'
import { SearchContainer, Input } from './Search.styled'
import { Button } from '../Button/Button'

export default function Search({state: [searchText, setSearchText]}) {
   
    const [text, setText] = useState('');
    
    return (
        <SearchContainer>
            <Input value={text} placeholder="Search..." onChange={e => (setText(e.target.value))} />
            <Button
                onClick={e => (setSearchText(text))}
                buttonStyle='btn--outline'
                buttonSize='btn--medium'
            >
                Search</Button>
        </SearchContainer>
    );

}
