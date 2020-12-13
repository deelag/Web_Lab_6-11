import React from 'react'
import { decrement, increment, remove } from '../Store/actions/actions'
import { ShopItemContainer, Img, CountButton, CounterContainer, Price, Container, RemoveButton } from './ShopItem.styled'
import { useDispatch } from 'react-redux';


function ShopItem({item}) {
    
    const dispatch = useDispatch();

    return (
        <ShopItemContainer>
            <Img src={item.img} alt={item.alt} height="100%" width="152px" />
            <Container>
                <h6>{reduceText(item.header)}</h6>
                <CounterContainer>
                    <CountButton onClick={() => dispatch(decrement(item))}>-</CountButton>
                    <h6>{item.counter}</h6>
                    <CountButton onClick={() => dispatch(increment(item))}>+</CountButton>
                </CounterContainer>
            </Container>
            <Price>{Math.round((item.price * item.counter)*100)/100}$</Price>
            <RemoveButton onClick={() => dispatch(remove(item))}> ✖ </RemoveButton>
        </ShopItemContainer>
    )
}

export default ShopItem;

function reduceText(text){
    if (text.length > 36){
        return text.slice(0, 36) + '...';
    }
    return text;
}