import {FC, ReactNode, ReactNodeArray, useEffect, useState} from "react";
import {
    HeaderAction,
    HeaderActions,
    HeaderAll,
    HeaderBody,
    HeaderLogo,
    HeaderLogoTitle,
    HeaderWrapper
} from "./Header.style";
import DownHeader from "../mainPage/downHeader/DownHeader";
import ModalAuth from "../mainPage/modalAuth/ModalAuth";
import SuccessRegisterModal from "../mainPage/successRegisterModal/SuccessRegisterModal";
import {useDispatch, useSelector} from "react-redux";
import {IUser} from "../../../interfaces/AuthInterfaces";
import {loginUser, logout, setAuth} from "../../../actions/actions";
import {Link, useLocation, useNavigate} from "react-router-dom";
import Cart from "../mainPage/cart/Cart";

type CurrentUser = {
    curUser: IUser;
    isAuth: boolean;
}

const Header: FC = () => {
    const {curUser, isAuth} = useSelector((state: CurrentUser) => state)
    const location = useLocation()
    const navigate = useNavigate()

    const [isOpen, setIsOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)
    const [success, setSuccess] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isAuth) setIsOpen(false)
    }, [isAuth])

    return(
        <>
            <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)}/>
            <ModalAuth isOpen={isOpen} onClose={() => setIsOpen(false)} openSuccess={() => setSuccess(true)}/>
            <SuccessRegisterModal success={success} onClose={() => setSuccess(false)}/>
            <HeaderAll>
                <HeaderBody>
                    <HeaderWrapper>
                        <Link to={'/'} style={{color: "white"}}>
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
                        </Link>

                        <HeaderActions>

                            <HeaderAction onClick={() => setCartOpen(true)}>
                                <div>
                                    <i className='fa-solid fa-basket-shopping fa-2xl'></i>
                                </div>
                                <div style={{lineHeight: '2rem'}}>Корзина</div>
                            </HeaderAction>

                            <Link to={`/news`} style={{color: 'white'}}>
                                <HeaderAction>
                                    <div>
                                        <i className="fa-regular fa-newspaper fa-2xl"></i>
                                    </div>
                                    <div style={{lineHeight: '2rem'}}>Новости</div>
                                </HeaderAction>
                            </Link>

                            {isAuth && curUser ?
                                <>
                                    <Link to={`/personal-account/${curUser.id}`} style={{color: 'white'}}>
                                        <HeaderAction>
                                            <div>
                                                <i className="fa-regular fa-user fa-2xl"></i>
                                            </div>
                                            <div style={{lineHeight: '2rem'}}>{curUser.username}</div>
                                        </HeaderAction>
                                    </Link>

                                    <HeaderAction onClick={() => logout().then(() => {
                                        navigate('/')
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
                {location.pathname !== '/' ? null : <DownHeader/>}
            </HeaderAll>
        </>
    )
}

export default Header;
