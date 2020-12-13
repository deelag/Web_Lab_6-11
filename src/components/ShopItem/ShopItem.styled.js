import styled from "styled-components"

export const ShopItemContainer = styled.div`
    width: 80%;
    height: 160px;
    border-radius: 4px;
    border: 2px solid #254e58;
    margin: 20px auto;    
    background-color: #254e58;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    &>h6{
        font-size: 28px;
    }
`

export const Img = styled.img`
    border-radius: 4px;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
`

export const CounterContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100px;
` 

export const CountButton = styled.button`
    border: 1px solid white;
    background-color: transparent;
    padding: 8px 18px;
    font-size: 24px;
    color: #fff;
    margin: auto 20px;
`
export const Price = styled.h6`
    margin-left: 100px;
`

export const RemoveButton = styled.button`
    background-color: transparent;
    border: none;
    width: 20px;
    font-size: 24px;
    color: #fff;
    margin: 0 30px 0 0;
    &:hover{
        font-size: 28px;
    }
`