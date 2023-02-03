import styled from "styled-components";

export const HeaderAll = styled.div`
  background: rgba(255,255,255, 0);
  width: 100%;
  color: white;
  position: absolute;
  z-index: 1000000;
  padding-top: 1rem;
`

export const HeaderBody = styled.div`
  width: 100%;
  height: 5rem;
  align-items: center;
`

export const HeaderWrapper = styled.div`
  padding: 1rem 20rem 1rem 20rem;
  justify-content: space-between;
  display: flex;
`

export const HeaderLogo = styled.div`
  font-family: 'Pacifico';
  font-size: 2rem;
  display: flex;
  justify-content: start;
  text-align: start;
  line-height: 1.5rem;
  align-items: center;
`

export const HeaderLogoTitle = styled.div`
  font-size: 2rem;
`

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
`

export const HeaderAction = styled.div`
  display: inline-grid;
  justify-content: center;
  margin-left: 2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    color: rgba(255, 172, 82, 0.8);
  }
`
