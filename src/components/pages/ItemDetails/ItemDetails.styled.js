import styled from 'styled-components';

export const ItemDetailContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 2% 16%;
    &>img{
        border: 1px solid #254e58; 
    }
    @media screen and (max-width: 1224px) {
        flex-direction: column;
    }
`;

export const ItemDetailInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: 440px;
    width: 400px;
    justify-content: space-evenly;
    align-items: flex-start;
    color: #254e58;
`;

export const Buttons = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;