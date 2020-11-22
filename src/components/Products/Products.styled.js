import styled from 'styled-components'

export const ProductsContainer = styled.div`
    display: flex;
    width: 1200px;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 60px 0;   
`;

export const ProductContainer = styled.div`
    display: flex;
    flex: 1;
    border-radius: 10px;
    flex-direction: column;
    background-color: #254e58;
    margin: 20px;
    cursor: pointer;
    max-width: 250px;
`;

export const ProductInfo = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
    font-size: 12px;
    font-weight: 400;
    color: white;
    &>*{
        margin: 2px;
    }
`;