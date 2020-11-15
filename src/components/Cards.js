import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import { Button } from "./Button"

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC STUFF!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/1.jpg"
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='FISHING REELS'
              path='/catalog'
            />
            <CardItem
              src='images/2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='LURES'
              path='/catalog'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='FISHING ACCESSORIES'
              path='/catalog'
            />
            <CardItem
              src='/images/4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='ROD & REEL COMBOS'
              path='/catalog'
            />
            <CardItem
              src='images/5.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='RODS'
              path='/catalog'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/7.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='BOWFISHING'
              path='/catalog'
            />
            <CardItem
              src='images/8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='FISHING SALE'
              path='/catalog'
            />
          </ul>
        </div>
        <Button
          path="/catalog"
          buttonStyle='btn--primary'
          buttonSize='btn--large'>
          VIEW MORE
          </Button>
      </div>
    </div>
  );
}

export default Cards;
