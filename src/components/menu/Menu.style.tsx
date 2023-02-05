import styled from "styled-components";


export const MenuBody = styled.div`
  width: 100%;
  background: linear-gradient(180deg, rgba(20,20,20,1) 0%, rgba(43,43,43,1) 100%);
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
