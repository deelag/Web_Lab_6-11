import styled from 'styled-components'

export const ProductsContainer = styled.div`
    display: flex;
    margin-right: 10%;
    margin-left: 10%;
    margin-top: 100px;
    justify-content: center;
    flex-wrap: wrap;
`;

export const ProductContainer = styled.div`
    display: flex;
    border-radius: 2px;
    margin: 10px;
    flex-direction: column;
    background-color: #254e58;
    cursor: pointer;
    overflow: hidden;
    width: 250px;
    &:hover{
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    }
`;


export const ProductInfo = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 12px;
    font-weight: 400;
    color: white;
    &>*{
        margin: 10px 5px;
    }
    &>h1{
        font-size: 22px;
    }
`;
