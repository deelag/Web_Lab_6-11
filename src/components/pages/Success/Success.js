import React from 'react'
import { Button } from '../../Button/Button';
import { SuccessContainer } from './Success.styled';

function Success() {
    return (
        <SuccessContainer>
            <img src="https://recruitpersonnel.com.au/wp-content/uploads/2018/03/Tick.jpg" alt="success" height="300px" width="300px" />
            <h1>Success!</h1>
            <p>Your order was sent to processing!</p>
            <p>Check your email box for further information!</p>
            <Button
                path="/catalog"
                buttonStyle="btn--inverse"
                buttonSize="btn--large"
            ><h2>Go back to Catalog</h2></Button>
        </SuccessContainer>
    )
}

export default Success;
