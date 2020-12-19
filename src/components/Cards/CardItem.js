import React from "react";
import {CardItemContainer, CardItemLink, CardItemPicWrap, CardItemImg} from "./CardItem.styled"

function CardItem(props) {
  return (
      <CardItemContainer>
        <CardItemLink to={props.path}>
          <CardItemPicWrap data-category={props.label}>
            <CardItemImg
              src={props.src}
              alt="RodImage"
              className="cards__item__img"
            />
          </CardItemPicWrap>
        </CardItemLink>
      </CardItemContainer>
  );
}

export default CardItem;
