import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardItemContainer = styled.li`
    display: flex;
    flex: 1;
    margin: 0 1rem;
    border-radius: 10px;
    box-shadow: 0 6px 20px rgb(0, 4, 12, 0.4);
    width: 45vh;
    @media screen and (max-width: 1200px) {
        margin-bottom: 2rem;
        width: 80vh; 
    }
    @media screen and (max-width: 769px) {
        width: 60vh; 
    }
    @media screen and (max-width: 425px) {
        width: 40vh; 
    }
`;

export const CardItemLink = styled(Link)`
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
`;

export const CardItemPicWrap = styled.figure`
    position: relative;
    width: 100%;
    padding-top: 100%;
    &:after{
        content: attr(data-category);
        position: absolute;
        bottom: 0;
        left:0;
        padding: 6px 8px;
        font-size: 2rem;
        font-weight: 700;
        color: #fff;
        background-color: rgba(0,0,0, 0.8);
        width: 100%;
    }
`;

export const CardItemImg = styled.img`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.15s linear;
    &:hover{
        transform: scale(1.1);
    }
`;