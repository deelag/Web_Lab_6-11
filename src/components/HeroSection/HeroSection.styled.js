import styled from "styled-components";
import heroimg from '../images/hero.jpg'

const HeroContainer = styled.div`
    background: url(${heroimg}) center/cover no-repeat;
    height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2);
    &>h1{
        color: #fff;
        font-size: 100px; 
    }
    &>p{
        margin-top:8px;
        color: #fff;
        font-size: 32px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        margin-bottom: 20px; 
    }
    @media screen and (max-width: 960px){
        h1{
            font-size: 70px;
            text-align: center;
        }
        p{
            font-size: 30px;
            text-align: center;
        }
    }
`;

export default HeroContainer;