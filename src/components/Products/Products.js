import React from 'react'
import { Button } from '../Button/Button';

import { ProductsContainer, ProductContainer, ProductInfo } from './Products.styled'

const { useState } = require("react");

export default function Products(props) {

    const [rods] = useState([
        {
            header: 'Rods #124231',
            price: 123,
            alt: "fishing rod",
            text: 'Buy it right now',
            img: 'https://fishingkris.com/wp-content/uploads/2019/11/Different-Types-of-Fishing-Rods.jpg'
        },
        {
            header: 'Rods #124231',
            price: 123,
            alt: "fishing rod",
            text: 'Buy it right now',
            img: 'https://5.imimg.com/data5/SX/KV/MY-11272310/fishing-stick-500x500.jpg'
        },
        {
            header: 'Rods #124231',
            price: 123,
            alt: "fishing rod",
            text: 'Buy it right now',
            img: 'https://5.imimg.com/data5/SX/KV/MY-11272310/fishing-stick-500x500.jpg'
        },
        {
            header: 'Rods #124231',
            price: 123,
            alt: "fishing rod",
            text: 'Buy it right now',
            img: 'https://5.imimg.com/data5/SX/KV/MY-11272310/fishing-stick-500x500.jpg'
        },
        {
            header: 'Rods #124231',
            price: 123,
            alt: "fishing rod",
            text: 'Buy it right now',
            img: 'https://5.imimg.com/data5/SX/KV/MY-11272310/fishing-stick-500x500.jpg'
        },
        {
            header: 'Rods #124231',
            price: 123,
            alt: "fishing rod",
            text: 'Buy it right now',
            img: 'https://5.imimg.com/data5/SX/KV/MY-11272310/fishing-stick-500x500.jpg'
        },
        {
            header: 'Rods #124231',
            price: 123,
            alt: "fishing rod",
            text: 'Buy it right now',
            img: 'https://5.imimg.com/data5/SX/KV/MY-11272310/fishing-stick-500x500.jpg'
        },
        {
            header: 'Rods #124231',
            price: 123,
            alt: "fishing rod",
            text: 'Buy it right now',
            img: 'https://5.imimg.com/data5/SX/KV/MY-11272310/fishing-stick-500x500.jpg'
        }
    ])

    return (
        <ProductsContainer>
            {rods.map((equip, index) =>
                <ProductContainer key={`Item${index}`}>
                    <img src={equip.img} alt={equip.alt} height="250px" width="250px" style={{borderRadius: "10px"}} />
                    <ProductInfo>
                        <h1>{equip.header}</h1>
                        <h2>Price: {equip.price}$</h2>
                        <Button
                            buttonStyle='btn--outline'
                            buttonSize='btn--small'
                        >View More</Button>
                    </ProductInfo>
                </ProductContainer>
            )}
        </ProductsContainer>

    );
}
