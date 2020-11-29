import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '../Button/Button';
import { ProductsContainer, ProductContainer, ProductInfo } from './Products.styled'


export default function Products(props) {

    const items = props.list;

    return (
        <ProductsContainer>
            {items.map((item) =>
                <ProductContainer key={`item${item.id}`}>
                    <Link to={"/item/" + item.id}>
                        <img src={item.img} alt={item.alt} height="250px" width="250px" />
                    </Link>
                    <ProductInfo>
                        <h1>{item.header}</h1>
                        <h2>Price: {item.price}$</h2>
                        <Button
                            path={"/item/" + item.id}
                            buttonStyle='btn--outline'
                            buttonSize='btn--small'
                        >
                            Details
                        </Button>
                    </ProductInfo>
                </ProductContainer>
            )}
        </ProductsContainer>

    );
}
