import {FC, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {
    PersonalAccountContainer, PersonalAccountLayout
} from "../components/mainPayload/personalAccountPage/PersonalAccountPage.style";
import NavBar from "../components/mainPayload/personalAccountPage/pkContent/PKContent";
import {IUser} from "../interfaces/AuthInterfaces";
import {useDispatch, useSelector} from "react-redux";
import WarningWindow from "../components/warningWindow/WarningWindow";
import {setAdminLayout} from "../actions/actions";

type currentUser = {
    curUser: IUser
}

const PersonalAccountPage: FC = () => {
    const {curUser} = useSelector((state: currentUser) => state)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const warningTitle = 'Ваш аккаунт не активирован!'
    const warningLabel = 'Пожалуйста, зайдите на свою почту, через которую регестрировали аккаунт на нашем сайте и активируйте свой аккаунт!'

    function getCookie(name:string) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()!.split(';').shift();
    }

    useEffect(() => {
        dispatch(setAdminLayout(false))
        if (!localStorage.getItem('token') && !getCookie('accessToken-vk')) {
            navigate('/')
        }
    }, [])

    return (
        <PersonalAccountLayout>
            <PersonalAccountContainer>
                {curUser.activated ? null : <WarningWindow title={warningTitle} label={warningLabel}/>}
                <NavBar curUser={curUser}/>
            </PersonalAccountContainer>
        </PersonalAccountLayout>
    )
}

export default PersonalAccountPage;
