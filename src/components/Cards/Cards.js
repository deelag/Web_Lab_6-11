import React from "react";
import CardItem from "./CardItem";
import { Button } from "../Button/Button";
import {CardContainer, CardWrapper, CardItems} from "./Cards.styled";

function Cards() {
  return (
    <>
      <h1 style={{marginTop: "60px", textAlign: "center", color: "#254e58" }}>Check out these EPIC STUFF!</h1>
      <CardContainer>
        <CardWrapper>
          <CardItems>
            <CardItem
              src="images/1.jpg"
              label='FISHING REELS'
              path='/catalog'
            />
            <CardItem
              src='images/2.jpg'
              label='LURES'
              path='/catalog'
            />
          </CardItems>
          <CardItems>
            <CardItem
              src='images/3.jpg'
              label='FISHING ACCESSORIES'
              path='/catalog'
            />
            <CardItem
              src='/images/4.jpg'
              label='ROD & REEL COMBOS'
              path='/catalog'
            />
            <CardItem
              src='images/5.jpg'
              label='RODS'
              path='/catalog'
            />
          </CardItems>
          <CardItems>
            <CardItem
              src='/images/7.jpg'
              label='BOWFISHING'
              path='/catalog'
            />
            <CardItem
              src='images/8.jpg'
              label='FISHING SALE'
              path='/catalog'
            />
          </CardItems>
        </CardWrapper>
        <Button
          path="/catalog"
          buttonStyle='btn--primary'
          buttonSize='btn--large'>
          VIEW MORE
          </Button>
      </CardContainer>
    </>
  );
}

export default Cards;
