import React from 'react';
import HeroContainer from "./HeroSection.styled";
import { Button } from '../Button/Button';

function HeroSection() {
    return (
        <HeroContainer>
            <h1>CATCH AWAITS</h1>
            <p>What are you waiting for?</p>
            <Button
                path="/catalog"
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                CATALOG <i className="fas fa-caret-right" style={{marginLeft: "10px", fontSize: "22px"}}/>
            </Button>
        </HeroContainer>
    )
}

export default HeroSection
