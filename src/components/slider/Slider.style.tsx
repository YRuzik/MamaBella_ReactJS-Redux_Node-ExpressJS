import styled from "styled-components";


export const SliderContainer = styled.div`
  height: 30rem;
  background: white;
  overflow-x: hidden;
  display: flex;
`

export const WhiteTransitionUp = styled.div`
  background: url("https://www.pizzaza.ca/application/themes/designed_by_tonik/images/element/pattern.png") repeat-x center center;
  z-index: 10000;
  position: absolute;
  left: 0;
  width: 100%;
  height: 35px;
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
  height: 75%;
  width: 100%;
  align-items: center;
  justify-content: start;
  overflow-x: hidden;
`

export const SliderItemBody = styled.div`
    padding: 1rem;
`

export const SliderItemThumbnail = styled.img`
  width: 27rem;
  height: 20rem;
  object-fit: cover;
  border-radius: 10px;
`
