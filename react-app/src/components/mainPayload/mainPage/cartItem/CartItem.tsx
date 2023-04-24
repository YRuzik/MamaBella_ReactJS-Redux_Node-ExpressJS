import {
    CartItemBody,
    CartItemContainer, CartItemHR, CartItemPrice,
    CartItemPriceQuantity, CartItemQuantity, CartItemQuantityButton,
    CartItemThumbnail,
    CartItemTitle
} from "./CartItem.style";
import {FC, useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {removeFromCart, setQuantityReducer} from "../../../../actions/actions";
import {number} from "yup";

type GreetingProps = {
    thumbnail: string;
    quantity: number;
    title: string;
    category: string;
    price: number;
    id: string;
    size: number;
    changePrice: () => void;
}

const CartItem: FC<GreetingProps> = ({thumbnail, quantity, title, category, price, id, size, changePrice}) => {
    const [quantityDB, setQuantity] = useState(quantity)
    const [startPrice, setPrice] = useState(price)
    const dispatch = useDispatch()

    const counterToggle = useCallback( (activity: string) => {
        if (activity === '+') setQuantity((c: number) => c + 1)
        else setQuantity((c: number) => c - 1)
    }, [quantity])

    useEffect(() => {
        dispatch(setQuantityReducer(id, quantityDB))
    }, [quantityDB])

    return (
        <>
            <CartItemContainer>
                <CartItemThumbnail src={thumbnail}/>
                <CartItemBody>
                    <CartItemTitle>
                        <div style={{fontSize: '1rem', opacity: '0.75'}}>{category}</div> <div>{title}</div> {size !== 0 ? <div style={{fontSize: '1rem', opacity: '0.75'}}>{size} см.</div> : null}
                    </CartItemTitle>
                    <CartItemPriceQuantity>
                        <CartItemPrice>
                            {startPrice * quantityDB} руб.
                        </CartItemPrice>
                        <CartItemQuantity>
                            {quantityDB <= 1 ?
                                <CartItemQuantityButton onClick={() => dispatch(removeFromCart(id))}>
                                    ×
                                </CartItemQuantityButton>
                                :
                                <CartItemQuantityButton onClick={() => {
                                    counterToggle('-')
                                    changePrice()
                                }}>
                                    −
                                </CartItemQuantityButton>
                            }
                            <span>{quantityDB}</span>
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
