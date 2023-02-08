import {
    OrderItemActions,
    OrderItemBody, OrderItemButton,
    OrderItemContainer,
    OrderItemDescription, OrderItemPrice,
    OrderItemThumbnail,
    OrderItemTitle, OrderItemWrapper
} from "./OrderItem.style";
import ModalProduct from "../modalProduct/ModalProduct";
import {useMemo, useState} from "react";
import {useDispatch} from "react-redux";
import {currentProductFetched} from "../../actions/actions";
import mainService from "../../services/MainService";
import {pizza, salads} from "../../interfaces/interfaces";

const OrderItem = ({title, price, description, thumbnail, label}:any) => {

    let myFunc: Promise<void> | (() => void);

    const pizza = 'Пицца',
        salads = 'Салаты',
        snacks = 'Закуски',
        drinks = 'Напитки',
        souses = 'Соусы'

    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    const {getPizzaID, getSaladsID} = mainService()

    const takePizza = async () => {
        await getPizzaID(title).then((data: pizza) => dispatch(currentProductFetched(data)))
    }

    const takeSalads = async () => {
        await getSaladsID(title).then((data: salads) => dispatch(currentProductFetched(data)))
    }

    if (description.length >= 110) {
        description = description.slice(0,110) + '...'
    }

    return (
        <>
            <ModalProduct isOpen={isOpen} onClose={() => setIsOpen(false)} label={label}/>
            <OrderItemWrapper onClick={() => {
                {label === pizza ? takePizza() : takeSalads()}
                setIsOpen(true)
            }}>

                <OrderItemActions>
                    <OrderItemButton>
                        в Корзину
                    </OrderItemButton>
                    <OrderItemPrice>
                        {price} ₽
                    </OrderItemPrice>
                </OrderItemActions>

                <OrderItemContainer>
                    <OrderItemThumbnail src={thumbnail}/>
                    <OrderItemBody>
                        <OrderItemTitle>
                            {title}
                        </OrderItemTitle>
                        <OrderItemDescription>
                            {description}
                        </OrderItemDescription>
                    </OrderItemBody>
                </OrderItemContainer>

            </OrderItemWrapper>
        </>
    )
}

export default OrderItem
