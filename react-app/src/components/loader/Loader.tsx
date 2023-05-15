import styled from "styled-components";
import gif from 'resources/327.gif'

const LoaderDiv = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`

const Loader = () => {
    return (
        <LoaderDiv>
            <img src={gif}/>
            <h1 style={{color: 'white'}}>Загрузка...</h1>
        </LoaderDiv>
    )
}

export default Loader
