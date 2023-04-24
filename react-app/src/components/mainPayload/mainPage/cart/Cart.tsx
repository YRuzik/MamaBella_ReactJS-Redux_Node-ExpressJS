import {
    CartBackDrop,
    CartButton,
    CartButtonContainer,
    CartClear,
    CartContainer,
    CartContent,
    CartTitle
} from "./Cart.style";
import {Grid, Slide} from "@mui/material";
import CartItem from "../cartItem/CartItem";
import {FC, useCallback, useEffect, useRef, useState} from "react";
import {CartItemHR} from "../cartItem/CartItem.style";
import useOnClickOutside from "../../../../hooks/onClickOutside";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import CartService from "../../../../services/CartService";
import {useDispatch, useSelector} from "react-redux";
import {IUser} from "../../../../interfaces/AuthInterfaces";
import OrderItem from "../orderItem/OrderItem";
import {cartProduct} from "../../../../interfaces/ProductsInterfaces";
import {addToCart, removeCart} from "../../../../actions/actions";

type GreetingProps = {
    isOpen: boolean;
    onClose: () => void;
}

type CurrentUser = {
    curUser: IUser;
    isAuth: boolean;
    cart: cartProduct[];
}

const Cart: FC<GreetingProps> = ({isOpen, onClose}) => {
    const {curUser, isAuth, cart} = useSelector((state: CurrentUser) => state)
    const sideBar = useRef() as React.MutableRefObject<HTMLInputElement>
    const onClickOutside = useOnClickOutside
    const {getCart} = CartService()

    const dispatch = useDispatch()

    const [sum, setSum] = useState(0)

    const voidFunc = () => {return null}

    useEffect(() => {
        let msum = 0;
        cart.forEach((product: cartProduct) => {
            msum += (product.price * product.quantity)
        })
        setSum(msum);
    }, [cart, isOpen, voidFunc])

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
                                {isAuth ?
                                    <>
                                        <CartTitle>
                                            Корзина
                                        </CartTitle>
                                        <CartClear onClick={() => dispatch(removeCart())}>
                                            Очистить корзину
                                        </CartClear>
                                        <CartItemHR/>
                                        <CartContent>
                                            {cart.map(({...props}: any, index: number) => (
                                                <CartItem {...props} key={index} changePrice={() => voidFunc()}/>
                                            ))}
                                        </CartContent>
                                        {sum !== 0 ?
                                            <CartButtonContainer>
                                                <CartButton>
                                                    Заказать за {sum} руб.
                                                </CartButton>
                                            </CartButtonContainer>
                                            :
                                            null
                                        }
                                    </>
                                    :
                                    <div>
                                        <h1>Недоступно</h1>
                                        <h3>Пожалуйста, перед осуществлением заказа, войдите в аккаунт или зарегестрируйте новый.</h3>
                                    </div>
                                }

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
