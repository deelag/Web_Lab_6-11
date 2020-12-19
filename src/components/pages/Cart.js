import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import '../../App.css'
import ShopItem from '../ShopItem/ShopItem'
import { useSelector } from 'react-redux';
import { Button } from '../Button/Button'

export default function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const items = useSelector(state => state)
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(items.reduce((sum, item) =>
      (sum + item.price * item.counter), 0))
  }, [items])

  if (!items.length) {
    return (
      <div className="cart">
        <NoItems> No Items Is Here :( </NoItems>
        <Button
          path="/catalog"
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          <h2>CATALOG <i className="fas fa-caret-right" style={{ marginLeft: "10px", fontSize: "22px" }} /></h2>
        </Button>
      </div>
    )
  }

  return (
    <div className="cart">
      <h3>Shopping Cart</h3>
      {items.map(item => <ShopItem key={item.id} item={item} />)}
      <TotalPrice>Total Price: {Math.round(totalPrice * 100) / 100}$</TotalPrice>
      <Buttons>
        <Button
          path="/catalog"
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          <h2>Catalog</h2>
        </Button>
        <Button
          path="/checkout"
          buttonStyle='btn--inverse'
          buttonSize='btn--large'
        >
          <h2>Continue</h2>
        </Button>
      </Buttons>
    </div>
  )
};

const NoItems = styled.h3`
  display:flex; 
  align-items: center; 
  justify-content: center; 
  height: 72vh
`;

const TotalPrice = styled.h6`
  align-self: flex-end;
  margin-right: 180px;
`;

const Buttons = styled.div`
  width: 80%;
  margin: 40px;
  padding-right: 4px;
  padding-left: 4px;
  display:flex;
  justify-content: space-between;
`