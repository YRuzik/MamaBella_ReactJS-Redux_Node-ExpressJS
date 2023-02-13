import {FC, useEffect, useState} from "react";
import {
    HeaderAction,
    HeaderActions,
    HeaderAll,
    HeaderBody,
    HeaderLogo,
    HeaderLogoTitle,
    HeaderWrapper
} from "./Header.style";
import DownHeader from "../downHeader/DownHeader";
import ModalAuth from "../modalAuth/ModalAuth";
import SuccessRegisterModal from "../successRegisterModal/SuccessRegisterModal";
import {useDispatch, useSelector} from "react-redux";
import {IUser} from "../../interfaces/AuthInterfaces";
import {loginUser, logout, setAuth} from "../../actions/actions";

type CurrentUser = {
    curUser: IUser;
    isAuth: boolean;
}

const Header: FC = () => {
    const {curUser, isAuth} = useSelector((state: CurrentUser) => state)

    const [isOpen, setIsOpen] = useState(false)
    const [success, setSuccess] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isAuth) setIsOpen(false)
    }, [isAuth])

    return(
        <>
            <ModalAuth isOpen={isOpen} onClose={() => setIsOpen(false)} openSuccess={() => setSuccess(true)}/>
            <SuccessRegisterModal success={success} onClose={() => setSuccess(false)}/>
            <HeaderAll>
                <HeaderBody>
                    <HeaderWrapper>
                        <HeaderLogo>
                            <HeaderLogoTitle id={'main'}>
                                <i className="fa-solid fa-pizza-slice"></i>
                                Mamma Bella
                                <br/>
                                <span style={{fontSize: '1rem', fontFamily: 'Montserrat Alternates'}}>
                                   Пиццерия номер 1 в России!
                                </span>
                            </HeaderLogoTitle>
                        </HeaderLogo>

                        <HeaderActions>

                            <HeaderAction>
                                <div>
                                    <i className='fa-solid fa-basket-shopping fa-2xl'></i>
                                </div>
                                <div style={{lineHeight: '2rem'}}>Корзина</div>
                            </HeaderAction>

                            <HeaderAction>
                                <div>
                                    <i className="fa-regular fa-newspaper fa-2xl"></i>
                                </div>
                                <div style={{lineHeight: '2rem'}}>Новости</div>
                            </HeaderAction>

                            {isAuth && curUser ?
                                <>
                                    <HeaderAction>
                                        <div>
                                            <i className="fa-regular fa-user fa-2xl"></i>
                                        </div>
                                        <div style={{lineHeight: '2rem'}}>{curUser.username}</div>
                                    </HeaderAction>

                                    <HeaderAction onClick={() => logout().then(() => {
                                        dispatch(setAuth(false))
                                        dispatch(loginUser({} as IUser))
                                    })}>
                                        <div>
                                            <i className="fa-solid fa-arrow-right-from-bracket fa-2xl"></i>
                                        </div>
                                        <div style={{lineHeight: '2rem'}}>Выйти</div>
                                    </HeaderAction>
                                </>
                                :
                                <HeaderAction onClick={() => setIsOpen(true)}>
                                    <div>
                                        <i className="fa-regular fa-user fa-2xl"></i>
                                    </div>
                                    <div style={{lineHeight: '2rem'}}>Войти</div>
                                </HeaderAction>
                            }

                        </HeaderActions>
                    </HeaderWrapper>
                </HeaderBody>
                <DownHeader/>
            </HeaderAll>
        </>
    )
}

export default Header;
