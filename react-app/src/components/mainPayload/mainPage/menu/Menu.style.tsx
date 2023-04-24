import styled from "styled-components";
import pattern from 'resources/img/pattern.jpg'

export const MenuBody = styled.div`
  width: 100%;
  background: url(${pattern}) center;
`

export const MenuWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  padding-top: 3rem;
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
  scroll-margin: 80px;
  
  hr {
    display: block;
    height: 1px;
    width: 43%;
    border: none;
    border-top: 2px solid rgba(255, 172, 82);
    padding: 0;
  }
`
