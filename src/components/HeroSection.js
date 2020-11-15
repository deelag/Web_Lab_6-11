import React from 'react';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>CATCH AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button
                path="/catalog"
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    CATALOG <i class="fas fa-caret-right" />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
