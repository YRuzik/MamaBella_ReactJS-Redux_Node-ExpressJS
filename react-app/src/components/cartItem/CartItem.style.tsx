import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  padding-top: 1rem;
  max-height: 25%;
`

export const CartItemThumbnail = styled.img`
  width: 40%;
  object-fit: cover;
  object-position: center;
`

export const CartItemBody = styled.div`
  text-align: end;
  width: 100%;
`

export const CartItemTitle = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`

export const CartItemPriceQuantity = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  padding-top: 40%;
  align-items: center;
`

export const CartItemPrice = styled.div`
`

export const CartItemQuantity = styled.div`
  padding-left: 1rem;
`

export const CartItemQuantityButton = styled.button`
  padding: 0.10rem;
  line-height: 1rem;
  font-size: 2rem;
  background: none;
  border: 4px solid orange;
  color: orange;
  font-weight: bold;
  border-radius: 50px;
`
