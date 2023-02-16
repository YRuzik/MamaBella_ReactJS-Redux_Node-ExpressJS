import styled from "styled-components";

export const OrdersItemContainer = styled.div`
  width: 100%;
  color: white;
  padding: 1rem;
  border-radius: 15px;
  
  hr{
    margin-top: 1rem;
    border: 1px solid darkorange;
  }
`

export const OrdersItemHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const OrdersItemPrice = styled.div`

`

export const OrdersItemStatus = styled.div`
  background: forestgreen;
  border-radius: 50px;
  padding: 0.3rem 1rem 0.3rem 1rem;
`

export const OrdersItemData = styled.div`
  padding-top: 1rem;
  font-size: 1.75rem;
`

export const OrdersItemAddress = styled.div`
  padding: 1rem 0 1rem 0;
`

export const OrdersItemDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const OrdersItemMore = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  color: darkorange;
  transition: opacity 0.2s ease-in-out;
  
  &:hover{
      opacity: 0.7;
    }
`

export const OrdersItemReview = styled.div`
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  color: orange;
  
  &:hover{
      opacity: 0.7;
    }
`
