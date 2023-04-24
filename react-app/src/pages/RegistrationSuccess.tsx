import {
    PersonalAccountContainer,
    PersonalAccountLayout
} from "../components/mainPayload/personalAccountPage/PersonalAccountPage.style";
import styled from "styled-components";
import {Card} from "@mui/material";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setAdminLayout} from "../actions/actions";

const Title = styled.h1`
  color: white;
`

const Description = styled.h3`
  color: white;
`

const RegistrationSuccess = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setAdminLayout(false))
    }, [])

    return (
        <PersonalAccountLayout>
            <PersonalAccountContainer>
                <Title>Спасибо за регистрацию!</Title>
                <Description>
                    Спасибо за то, что подтвердили аккаунт по эл. почте. Теперь вы можете оформлять заказ с доставкой!
                </Description>
            </PersonalAccountContainer>
        </PersonalAccountLayout>
    )
}

export default RegistrationSuccess;
