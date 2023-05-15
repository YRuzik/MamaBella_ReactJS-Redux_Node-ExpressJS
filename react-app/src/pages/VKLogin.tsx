import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import UserService from "../services/UserService";
import {loginUser, setAuth} from "../actions/actions";
import {useDispatch} from "react-redux";
import {
    PersonalAccountContainer,
    PersonalAccountLayout
} from "../components/mainPayload/personalAccountPage/PersonalAccountPage.style";
import Oplata from "../components/mainPayload/oplataPage/oplata/Oplata";
import Loader from "../components/loader/Loader";

const VKLogin = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {takeVKLogin} = UserService()

    useEffect(() => {
        try {
            if (id !== undefined) {
                takeVKLogin(id).then((data) => {
                    localStorage.setItem('token', data.data.accessToken)
                    dispatch(loginUser(data.data.user))
                    dispatch(setAuth(true))
                    navigate('/')
                })
            }
        } catch (e) {
            console.log(e)
        }
    }, [id])
    return (<PersonalAccountLayout>
        <PersonalAccountContainer>
            <Loader/>
        </PersonalAccountContainer>
    </PersonalAccountLayout>)
}

export default VKLogin
