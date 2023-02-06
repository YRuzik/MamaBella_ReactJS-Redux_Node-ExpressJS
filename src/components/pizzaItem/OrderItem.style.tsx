import styled from "styled-components";

export const OrderItemWrapper = styled.div`
  cursor: pointer;
  transition: all 0.3s  ease;
  position: relative;
  margin: 1rem;
  border-radius: 10px;

  img:hover {
    transform: translateY(-0.5rem);
  }
`

export const OrderItemContainer = styled.div`
  /*background: rgba(32,32,32);*/
  min-height: 26rem;
  border-radius: 10px;
`

export const OrderItemThumbnail = styled.img`
  width: 100%;
  height: 15rem;
  object-fit: contain;
  object-position: center;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding-top: 0.5rem;
  transition: all 0.3s  ease;
`

export const OrderItemBody = styled.div`
  padding: 1rem;
  color: white;
  text-align: start;
`

export const OrderItemTitle = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`

export const OrderItemDescription = styled.div`
  font-size: 0.8rem;
  margin-top: 0.5rem;
`

export const OrderItemActions = styled.div`
  display: flex;
  bottom: 0;
  position: absolute;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const OrderItemButton = styled.button`
  padding: 3% 6% 3% 6%;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  background: darkorange;
  color: white;
  
  &:hover {
    opacity: 0.75;
  }
  
  @media(max-width: 1400px) {
    font-size: 1rem;
  }
`

export const OrderItemPrice = styled.div`
  font-size: 1.25rem;
  color: white;
`
