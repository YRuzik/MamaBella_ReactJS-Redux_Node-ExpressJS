import styled from "styled-components";


export const ModalContainer = styled.div`
  position: relative;
  z-index: 99999999;
  background: white;
  width: 58%;
  height: 70%;
  border-radius: 25px;
  padding: 1rem;
  display: flex;
  margin: 0 auto;
  top: 15%
`

export const ModalLeft = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalRight = styled.div`
  width: 50%;
`

export const ModalThumbnail = styled.img`
  width: 60%;
  transition: transform 0.2s ease-in-out;
  transform: ${(props: {scale: number}) => `scale(${props.scale})`}
`

export const ModalTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
`

export const ModalDetails = styled.div`
  font-size: 1.5rem;
  color: rgba(0,0,0,.5);
  padding-bottom: 1rem;
`

export const ModalDescription = styled.div`
  font-size: 1.5rem;
  padding-bottom: 1rem;
`

export const ModalBottom = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 33%;
  text-align: center;
  vertical-align: center;
`

export const ModalButtonBuy = styled.button`
  margin-bottom: 1rem;
  width: 100%;
  min-height: 7%;
  border-radius: 50px;
  border: none;
  padding: 1rem 0 1rem 0;
  font-size: 1.25rem;
  background-color: darkorange;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  
  &:hover{
    background-color: orange;
  }
`
