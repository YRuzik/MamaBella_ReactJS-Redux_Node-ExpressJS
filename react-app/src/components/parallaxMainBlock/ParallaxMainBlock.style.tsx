import styled from "styled-components";


export const ParallaxMainContainer = styled.div`
  background-color: black;
`

export const Parallax = styled.div`
  background-image: url('https://images.deliveryhero.io/image/fd-bd/LH/u0pp-hero.jpg');
  height: 60vw;
  background-position: 10rem 60%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow-x: hidden;
`

export const ParallaxContent = styled.div`
  height: auto;
  width: 42rem;
  position: absolute;
  color: white;
  font-size: 2rem;
  left: 20rem;
  top: 12rem;
  text-align: start;
`

export const MainTitle = styled.div`
  font-size: 7rem;
`

export const MainLowPrice = styled.div`
  font-size: 2.5rem;
  opacity: 1;
  color: darkorange;
`

export const MainDescription = styled.div`
  padding-top: 2.5rem;
`

export const MainDescriptionSub = styled.span`
  font-weight: bold;
`

export const MainActions = styled.div`
  display: flex;
  padding-top: 5rem;
  justify-content: space-between;
`

export const MainButton = styled.button`
  padding: 1.25rem 7rem 1.25rem 7rem;
  border: none;
  border-radius: 50px;
  background-color: darkorange;
  font-size: 1.5rem;
  font-family: 'Montserrat Alternates', sans-serif;
  cursor: pointer;
  color: white;
  transition: all 0.2s ease-in-out;
  
  box-shadow: 0 10px 0 rgba(255, 100, 82, 0.5);
  
  &:hover {
    box-shadow: 0 0 0 rgba(255, 100, 82, 0.3);
    transform: translateY(10px);
    opacity: 0.9;
  }
`

export const MainButtonOutline = styled.button`
  padding: 1.25rem 7rem 1.25rem 7rem;
  border: 2px solid darkorange;
  border-radius: 50px;
  background-color: rgba(0,0,0,0);
  font-size: 1.5rem;
  font-family: 'Montserrat Alternates', sans-serif;
  cursor: pointer;
  color: white;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(10px);
    opacity: 0.9;
  }
`
