import {
    CartBackDrop,
    CartButton,
    CartButtonContainer,
    CartClear,
    CartContainer,
    CartContent,
    CartTitle
} from "./Cart.style";
import {Slide} from "@mui/material";
import CartItem from "../cartItem/CartItem";
import {FC, useEffect, useRef} from "react";
import {CartItemHR} from "../cartItem/CartItem.style";
import useOnClickOutside from "../../hooks/onClickOutside";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import CartService from "../../services/CartService";
import {useSelector} from "react-redux";
import {IUser} from "../../interfaces/AuthInterfaces";

type GreetingProps = {
    isOpen: boolean;
    onClose: () => void;
}

type CurrentUser = {
    curUser: IUser;
    isAuth: boolean;
}

const Cart: FC<GreetingProps> = ({isOpen, onClose}) => {
    const {curUser, isAuth} = useSelector((state: CurrentUser) => state)
    const sideBar = useRef() as React.MutableRefObject<HTMLInputElement>
    const onClickOutside = useOnClickOutside
    const {getCart} = CartService()

    useEffect(() => {
        console.log(curUser.id)
        if (isAuth && isOpen) getCart(curUser.id).then(data => console.log(data))
    }, [isOpen])

    onClickOutside(sideBar, () => onClose())

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
                <Fade in={isOpen} mountOnEnter unmountOnExit timeout={500}>
                    <CartBackDrop>
                        <Slide direction="left" in={isOpen} mountOnEnter={isOpen}>
                            <CartContainer ref={sideBar}>
                                <CartTitle>
                                    Корзина
                                </CartTitle>
                                <CartClear>
                                    Очистить корзину
                                </CartClear>
                                <CartItemHR/>
                                <CartContent>
                                    <CartItem/>
                                    <CartItem/>
                                    <CartItem/>
                                    <CartItem/>
                                    <CartItem/>
                                    <CartItem/>
                                    <CartItem/>
                                    <CartItem/>
                                    <CartItem/>
                                </CartContent>
                                <CartButtonContainer>
                                    <CartButton>
                                        Заказать за ...руб
                                    </CartButton>
                                </CartButtonContainer>
                            </CartContainer>
                        </Slide>
                    </CartBackDrop>
                </Fade>
            </Modal>
            </div>
        </>
    )
}

export default Cart;
