import styled from "styled-components";


export const FooterContainer = styled.div`
    background-color: #254e58;
    margin-top: 30px;
    padding: 3rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FooterSubscription = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 24px;
    color: #fff;
`;

export const FooterSubscriptionHeading = styled.p`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin-bottom: 24px;
    font-size: 24px;
`;

export const FooterInput = styled.input`
    padding: 8px 20px;
    border-radius: 2px;
    margin-right: 10px;
    outline: none;
    border: none;
    font-size: 18px;
    border: 1px solid #fff;
    &:placeholder{
        color: #b1b1b1;
    }
`;

export const FooterLinks = styled.div`
    display: flex;
    justify-content: center;
`;

export const SocialMediaWrap = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 20px auto 0 auto;
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialLogo = styled.div`
    color: #fff;
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`;

export const WebsiteRights = styled.small`
    color: #fff;
    font-size: 16px;
    margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
    margin-bottom: 16px;
`;