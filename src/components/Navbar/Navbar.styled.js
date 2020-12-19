import styled from 'styled-components';
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
    background: #112d32;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 2;
    width: 100%;
`;

export const NavbarLogo = styled(Link)`
    color: #fff;
    margin-left: 60px;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-self: flex-start;
    @media screen and (max-width: 960px) {margin-left: 20px;}
`;

export const MenuIcon = styled.div`
    display: none;
    @media screen and (max-width: 960px) {
        display: block;
        margin-right: 20px;
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    justify-self: end;
    font-size: 22px;
    list-style: none;
    text-align: center;
    margin-right: 80px;
    li{
        height: 80px;
    }
    @media screen and (max-width: 960px) {
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: -100%;
        transition: all 0.5s ease;
    }
`;

export const NavMenuActive = styled.ul`
    display: flex;
    justify-self: end;
    font-size: 22px;
    list-style: none;
    text-align: center;
    margin-right: 80px;
    li{
        height: 80px;
    }
    @media screen and (max-width: 960px) {
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        background: #254e58;
        left: 0;
        opacity: 1;
        z-index: 1;
        transition: all 0.5s ease;
    }
`;


export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    &:hover{
        border-bottom: 4px solid #fff;
        transition: all 0.2s ease-out;
    }
    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        justify-content: center;
        font-size: 28px;
        &:hover{
            background-color: #fff;
            color: #254e58;
        }
    }
`;

// TODO: i bars