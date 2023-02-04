import styled from "styled-components";


export const MenuBody = styled.div`
  width: 100%;
  background-color: rgb(51,51,51);
`

export const MenuWrapper = styled.div`
  width: 65%;
  margin: 0 auto;
`

export const MenuHeader = styled.div`
  font-size: 2rem;
  position: relative;
  color: white;
  padding: 1rem;
  font-weight: bold;
`

export const MenuTitle = styled.div`
  font-family: Pacifico;
  font-size: 2.5rem;
  color: rgba(255, 172, 82);
  font-weight: lighter;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  hr {
    display: block;
    height: 1px;
    width: 43%;
    border: none;
    border-top: 2px solid rgba(255, 172, 82);
    padding: 0;
  }
`

export const TransitionUp = styled.div`
  background: url("https://www.pizzaza.ca/application/themes/designed_by_tonik/images/element/pattern.png") repeat-x center center;
  z-index: 1000000;
  position: absolute;
  bottom: 68%;
  left: 0;
  width: 159.95%;
  height: 35px;
  margin-left: -25rem;
`
