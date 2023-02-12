import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import React, {useEffect, useRef, useState} from "react";
import useOnClickOutside from "../../hooks/onClickOutside";
import ModalAuth from "./ModalAuth";
import {
    ModalAuthContainer,
    ModalAuthSlidingButton,
    ModalAuthSlidingContainer,
    ModalAuthSlidingTitle
} from "./ModalAuth.style";
import {HeaderLogoTitle} from "../header/Header.style";
import FormAuth from "../formAuth/FormAuth";


const ModalProduct = ({isOpen, onClose}: any) => {

    const modalAuthWindow = useRef() as React.MutableRefObject<HTMLDivElement>
    const onClickOutside = useOnClickOutside

    onClickOutside(modalAuthWindow, () => onClose())

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
                            <ModalAuthSlidingContainer>
                                <ModalAuthSlidingTitle>
                                    <HeaderLogoTitle style={{color: "white"}}>
                                        <i className="fa-solid fa-pizza-slice"></i>
                                            Mamma Bella
                                        <br/>
                                    </HeaderLogoTitle>
                                </ModalAuthSlidingTitle>
                                <ModalAuthSlidingButton>
                                    Зарегистрироваться
                                </ModalAuthSlidingButton>
                            </ModalAuthSlidingContainer>
                            <FormAuth/>
                        </ModalAuthContainer>
                    </Fade>
                </Modal>
            </div>
        </>
    );
}

export default ModalProduct
