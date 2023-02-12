import {FC, useRef} from "react";
import useOnClickOutside from "../../hooks/onClickOutside";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import {SRMContainer, SRMParagraph, SRMTitle} from "./SuccessRegisterModal.style";

type GreetingProps = {
    isOpen: boolean;
    onClose: () => void;
}

const SuccessRegisterModal: FC<GreetingProps> = ({isOpen, onClose}) => {

    const modalWindow = useRef() as React.MutableRefObject<HTMLDivElement>
    const onClickOutside = useOnClickOutside

    onClickOutside(modalWindow, () => onClose())

    return (
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
                    <SRMContainer ref={modalWindow}>
                        <SRMTitle>
                            Спасибо за регистрацию!
                        </SRMTitle>
                        <br/>
                        <SRMParagraph>
                            Благодарим вас за регистрацию! У нас вы сможете найти самую вкусную и недорогую пиццу, состоящию только из
                            качественных ингридиентов, приготовленную настоящими профессионалами своего дела!
                        </SRMParagraph>
                        <br/>
                        <SRMParagraph>
                            В течении 5 минут вам на почту должно поступить сообщение, пожалуйста, подтвердите свою электронную почту в этом сообщении,
                            перейдя по ссылке вложенную в нее.
                        </SRMParagraph>
                    </SRMContainer>
                </Fade>
            </Modal>
    );
}

export default SuccessRegisterModal
