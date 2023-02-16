import {
    CartItemBody,
    CartItemContainer, CartItemPrice,
    CartItemPriceQuantity, CartItemQuantity, CartItemQuantityButton,
    CartItemThumbnail,
    CartItemTitle
} from "./CartItem.style";

const CartItem = () => {
    return (
        <CartItemContainer>
            <CartItemThumbnail src={'https://api.totopizza.ru/storage/image/0c816e342cbf7a31292460a65950d1c1.png'}/>
            <CartItemBody>
                <CartItemTitle>
                    Фермерская
                </CartItemTitle>
                <CartItemPriceQuantity>
                    <CartItemPrice>
                        300 руб.
                    </CartItemPrice>
                    <CartItemQuantity>
                        <CartItemQuantityButton>
                            -
                        </CartItemQuantityButton>
                        <span>1</span>
                        <CartItemQuantityButton>
                            +
                        </CartItemQuantityButton>
                    </CartItemQuantity>
                </CartItemPriceQuantity>
            </CartItemBody>
        </CartItemContainer>
    )
}

export default CartItem
