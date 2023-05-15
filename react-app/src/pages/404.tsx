import {
    PersonalAccountContainer,
    PersonalAccountLayout
} from "../components/mainPayload/personalAccountPage/PersonalAccountPage.style";
import Loader from "../components/loader/Loader";
import styled from "styled-components";
import {Link} from "react-router-dom";

const ErrorDiv = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`

const ErrorPage = () => {
    return (
        <PersonalAccountLayout>
            <PersonalAccountContainer>
                <ErrorDiv>
                    <h1 style={{color: 'white', paddingBottom: '1rem'}}>Страница не найдена ʕʘ‿ಠʔ</h1>
                    <Link to={'/'} style={{textDecoration: 'underline'}}>За покупками</Link>
                </ErrorDiv>
            </PersonalAccountContainer>
        </PersonalAccountLayout>
    )
}

export default ErrorPage
