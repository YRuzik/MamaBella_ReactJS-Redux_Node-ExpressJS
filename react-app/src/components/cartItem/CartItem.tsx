import {
    CartItemBody,
    CartItemContainer, CartItemHR, CartItemPrice,
    CartItemPriceQuantity, CartItemQuantity, CartItemQuantityButton,
    CartItemThumbnail,
    CartItemTitle
} from "./CartItem.style";
import {useCallback, useState} from "react";

const CartItem = () => {
    const [counter, setCounter] = useState(1)
    const [price, setPrice] = useState(300)

    const counterToggle = useCallback( (activity: string) => {
        if (activity === '+') setCounter((c) => c + 1)
        else setCounter((c) => c - 1)
    }, [counter])

    return (
        <>
            <CartItemContainer>
                <CartItemThumbnail src={'https://api.totopizza.ru/storage/image/0c816e342cbf7a31292460a65950d1c1.png'}/>
                <CartItemBody>
                    <CartItemTitle>
                        <div style={{fontSize: '1rem', opacity: '0.75'}}>Пицца</div> <div>Фермерская</div>
                    </CartItemTitle>
                    <CartItemPriceQuantity>
                        <CartItemPrice>
                            {price * counter} руб.
                        </CartItemPrice>
                        <CartItemQuantity>
                            {counter <= 1 ?
                                <CartItemQuantityButton>
                                    ×
                                </CartItemQuantityButton>
                                :
                                <CartItemQuantityButton onClick={() => counterToggle('-')}>
                                    −
                                </CartItemQuantityButton>
                            }
                            <span>{counter}</span>
                            <CartItemQuantityButton onClick={() => counterToggle('+')}>
                                +
                            </CartItemQuantityButton>
                        </CartItemQuantity>
                    </CartItemPriceQuantity>
                </CartItemBody>
            </CartItemContainer>
            <CartItemHR/>
        </>
    )
}

export default CartItem
