import React, { useEffect, useContext } from 'react'
import { useParams } from "react-router-dom";
import { Button } from '../../Button/Button';
import { ItemDetailContainer, ItemDetailInfo, Buttons } from "./ItemDetails.styled"
import {myItems} from "../../Items/Items"

function ItemDetails() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const itemsList = useContext(myItems);

    const { id } = useParams();
    const item = itemsList.find(item => (item.id === parseInt(id)));

    return (
        <ItemDetailContainer>
            <img src={item.img} alt={item.alt} height="400px" width="400px" />
            <ItemDetailInfo>
                <h1>{item.header}</h1>
                <h3>{item.description}</h3>
                <h2>Price: {item.price}$</h2>
                <Buttons>
                    <Button
                        path="/catalog"
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                    >
                        Back to Catalog
                    </Button>
                    <Button
                        path="/cart"
                        buttonStyle='btn--inverse'
                        buttonSize='btn--large'
                    >
                        Add to Cart
                    </Button>
                </Buttons>
            </ItemDetailInfo>
        </ItemDetailContainer>
    )
}

export default ItemDetails
