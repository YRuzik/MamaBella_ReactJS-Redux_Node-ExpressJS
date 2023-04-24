import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  padding-top: 1rem;
  max-height: 25%;
`

export const CartItemThumbnail = styled.img`
  width: 30%;
  object-fit: contain;
`

export const CartItemBody = styled.div`
  text-align: end;
  width: 100%;
`

export const CartItemTitle = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  align-items: center;
  justify-content: end;
`

export const CartItemPriceQuantity = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  padding-top: 22%;
  align-items: center;
`

export const CartItemPrice = styled.div`
`

export const CartItemQuantity = styled.div`
  padding-left: 1rem;
  display: flex;
  align-items: center;
  
  span {
    padding: 0 0.5rem 0 0.5rem;
    font-weight: bold;
  }
`

export const CartItemQuantityButton = styled.button`
  padding: 0.10rem 0.2rem 0.10rem 0.2rem;
  line-height: 1rem;
  font-size: 1.5rem;
  background: none;
  border: 3px solid orange;
  color: orange;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.7;
  }
`

export const CartItemHR = styled.hr`
  margin-top: 1rem;
  border: 1px solid rgba(0,0,0,.1);
`
