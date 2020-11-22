import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    padding: 1rem;
`;

export const CardWrapper = styled.div`
    margin: 50px 0 20px;
`;

export const CardItems = styled.ul`
    margin-bottom: 24px;
    display: flex;
    @media only screen and (max-width: 1200px) {
        flex-direction: column;
        margin: 0px;
    }
`;