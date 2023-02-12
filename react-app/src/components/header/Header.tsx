import React, {useState} from "react";
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

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return(
        <>
            <ModalAuth isOpen={isOpen} onClose={() => setIsOpen(false)}/>
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

                            <HeaderAction onClick={() => setIsOpen(true)}>
                                <div>
                                    <i className="fa-regular fa-user fa-2xl"></i>
                                </div>
                                <div style={{lineHeight: '2rem'}}>Войти</div>
                            </HeaderAction>

                        </HeaderActions>
                    </HeaderWrapper>
                </HeaderBody>
                <DownHeader/>
            </HeaderAll>
        </>
    )
}

export default Header;
