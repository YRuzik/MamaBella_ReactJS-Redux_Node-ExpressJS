import {CartBackDrop, CartClear, CartContainer, CartContent, CartTitle} from "./Cart.style";
import {Slide} from "@mui/material";
import CartItem from "../cartItem/CartItem";

const Cart = () => {

    return (
        <CartBackDrop>
            <Slide direction={'left'} mountOnEnter unmountOnExit in={true}>
                <CartContainer>
                    <CartTitle>
                        Корзина
                    </CartTitle>
                    <CartClear>
                        Очистить корзину
                    </CartClear>
                    <CartContent>
                        <CartItem/>
                    </CartContent>
                </CartContainer>
            </Slide>
        </CartBackDrop>
    )
}

export default Cart;
