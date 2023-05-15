import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import React, {FC, useRef, useState} from "react";
import useOnClickOutside from "../../../../hooks/onClickOutside";
import {
    ModalAuthContainer,
    ModalAuthSlidingButton,
    ModalAuthSlidingContainer,
    ModalAuthSlidingTitle, ModalAuthVKButton
} from "./ModalAuth.style";
import {HeaderLogoTitle} from "../../header/Header.style";
import FormRegister from "../formRegister/FormRegister";
import FormAuth from "../formAuth/FormAuth";
import AuthService from "../../../../services/AuthService";
import UserService from "../../../../services/UserService";
import {useNavigate} from "react-router-dom";

type GreetingProps = {
    isOpen: boolean;
    onClose: () => void;
    openSuccess: () => void;
}

const ModalAuth: FC<GreetingProps> = ({isOpen, onClose, openSuccess}) => {
    const [auth, setAuth] = useState(true)
    const navigate = useNavigate()

    const modalAuthWindow = useRef() as React.MutableRefObject<HTMLDivElement>
    const onClickOutside = useOnClickOutside

    onClickOutside(modalAuthWindow, () => {
        onClose()
        setAuth(true)
    })

    return (
        <>
            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={isOpen || false}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                    disableAutoFocus={true}
                    style={{zIndex: '100000000'}}
                >
                    <Fade in={isOpen}>
                        <ModalAuthContainer ref={modalAuthWindow}>
                            <ModalAuthSlidingContainer xPosition={auth ? 0 : 150}>
                                <ModalAuthSlidingTitle>
                                    <HeaderLogoTitle style={{color: "white"}}>
                                        <i className="fa-solid fa-pizza-slice"></i>
                                            Mamma Bella
                                        <br/>
                                    </HeaderLogoTitle>
                                </ModalAuthSlidingTitle>

                                <ModalAuthSlidingButton onClick={() => setAuth(!auth)}>
                                    {auth ? 'Зарегистрироваться' : 'Войти в аккаунт'}
                                </ModalAuthSlidingButton>
                                <ModalAuthVKButton to={'http://localhost:8083/api/auth/vkontakte'}>
                                    Войти через VK <i className="fab fa-vk" style={{paddingLeft: '0.5rem'}}></i>
                                </ModalAuthVKButton>

                            </ModalAuthSlidingContainer>
                                {auth ? <FormAuth/> : <FormRegister closeModal={() => onClose()} setSuccess={() => {
                                    openSuccess()
                                    setAuth(true)
                                }}/>}
                        </ModalAuthContainer>
                    </Fade>
                </Modal>
            </div>
        </>
    );
}

export default ModalAuth
