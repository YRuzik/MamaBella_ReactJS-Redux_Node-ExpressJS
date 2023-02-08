import styled from "styled-components";


export const SliderContainer = styled.div`
  height: 30rem;
  background: white;
  overflow: hidden;
  display: flex;
`

export const WhiteTransitionUp = styled.div`
  background: url("https://www.pizzaza.ca/application/themes/designed_by_tonik/images/element/pattern.png") repeat-x center center;
  z-index: 10000;
  position: absolute;
  left: 0;
  width: 100%;
  height: 2.1rem;
  margin-top: -1rem;
`

export const WhiteTransitionDown = styled(WhiteTransitionUp)`
  margin-top: 29rem;
`

export const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  justify-content: center;
`

export const SliderBody = styled.div`
  display: flex;
  height: 20vw;
  width: 100%;
  align-items: center;
  justify-content: start;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
`

export const SliderItemBody = styled.div`
  padding: 1rem;
  width: 24.8vw;
  height: 19vw;
`

export const SliderItemThumbnail = styled.img`
  width: 23vw;
  height: 17vw;
  object-fit: cover;
  border-radius: 25px;
`

export const SliderItemContent = styled.div`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`

export const SliderItemTextBody = styled.div`
  font-size: 1.5vw;
  text-align: start;
  position: absolute;
  margin-top: -5rem;
  margin-left: 1rem;
  z-index: 10000;
  color: white;
  font-weight: bold;
`

export const SliderItemPromo = styled.div`
    font-size: 1vw;
`

export const SliderButtonPrev = styled.button`
  position: absolute;
  z-index: 1000;
  left: 0;
  transform: rotate(180deg);
  font-size: 3rem;
  padding: 8rem 1rem 10rem 1rem;
  border: none;
  background: none;
  border-radius: 50px;
  color: wheat;
  cursor: pointer;
`

export const SliderButtonNext = styled.button`
  position: absolute;
  z-index: 1000;
  right: 0;
  font-size: 3rem;
  padding: 10rem 1rem 8rem 1rem;
  border: none;
  background: none;
  border-radius: 50px;
  color: wheat;
  cursor: pointer;
`

export const SliderWrapperSlides = styled.div`
  display: flex;
  transition: transform 0.6s ease-in-out;
  transform: ${(props: {xPosition: number}) => `translateX(${props.xPosition}vw)`}
`
