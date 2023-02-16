import {FC, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {
    PersonalAccountContainer
} from "../components/personalAccountPayload/PersonalAccountPage.style";
import NavBar from "../components/personalAccountPayload/pkContent/PKContent";
import {IUser} from "../interfaces/AuthInterfaces";
import {useSelector} from "react-redux";
import WarningWindow from "../components/warningWindow/WarningWindow";

type currentUser = {
    curUser: IUser
}

const PersonalAccountPage: FC = () => {
    const {curUser} = useSelector((state: currentUser) => state)
    const navigate = useNavigate()

    const warningTitle = 'Ваш аккаунт не активирован!'
    const warningLabel = 'Пожалуйста, зайдите на свою почту, через которую регестрировали аккаунт на нашем сайте и активируйте свой аккаунт!'

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/')
        }
    }, [])

    return (
        <PersonalAccountContainer>
            {curUser.activated ? null : <WarningWindow title={warningTitle} label={warningLabel}/>}
            <NavBar curUser={curUser}/>
        </PersonalAccountContainer>
    )
}

export default PersonalAccountPage;
