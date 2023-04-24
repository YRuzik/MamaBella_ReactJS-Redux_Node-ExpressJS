import styled from "styled-components";

export const NewsInfoContainer = styled.div`
  color: white;
  font-size: 200%;
  position: relative;
  background-color: #282828fe;
  padding: 1rem;
  border-radius: 25px;
  box-shadow: 0 0 15px rgba(0,0,0,.5);
  
  hr {
    margin: 1rem 0 1rem 0;
  }
  
  }
`

export const NewsInfoThumbnail = styled.img`
  width: 100%;
  height: 20rem;
  object-position: center;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0,0,0,.5);
`

export const NewsInfoBody = styled.div`
`

export const NewsInfoTitle = styled.div`
  font-weight: bold;
`

export const NewsInfoText = styled.div`
  text-align: start;
  font-size: 75%;
`
