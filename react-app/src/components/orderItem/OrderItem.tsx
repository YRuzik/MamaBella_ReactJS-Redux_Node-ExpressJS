import {
    OrderItemActions,
    OrderItemBody, OrderItemButton,
    OrderItemContainer,
    OrderItemDescription, OrderItemPrice,
    OrderItemThumbnail,
    OrderItemTitle, OrderItemWrapper
} from "./OrderItem.style";
import ModalProduct from "../modalProduct/ModalProduct";
import {FC, useState} from "react";
import {useDispatch} from "react-redux";
import {currentProductFetched} from "../../actions/actions";
import mainService from "../../services/ProductService";

type GreetingProps = {
    title: string;
    price: number;
    description: string;
    thumbnail: string;
    label: string;
}

const OrderItem: FC<GreetingProps> = ({title, price, description, thumbnail, label}) => {

    let myFunc: () => void;

    const pizza = 'Пицца',
        salads = 'Салаты',
        snacks = 'Закуски',
        drinks = 'Напитки',
        souses = 'Соусы'

    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    const {getPizzaID, getSaladsID, getDrinksID, getSnacksID, getSousesID} = mainService()

    const takePizza = async () => {
        await getPizzaID(title).then((data) => dispatch(currentProductFetched(data.data)))
    }

    const takeSalads = async () => {
        await getSaladsID(title).then((data) => dispatch(currentProductFetched(data.data)))
    }

    const takeDrinks = async () => {
        await getDrinksID(title).then((data) => dispatch(currentProductFetched(data.data)))
    }

    const takeSnacks = async () => {
        await getSnacksID(title).then((data) => dispatch(currentProductFetched(data.data)))
    }

    const takeSouses = async () => {
        await getSousesID(title).then((data) => dispatch(currentProductFetched(data.data)))
    }

    switch (label) {
        case (pizza):
            myFunc = takePizza
            break;
        case (salads):
            myFunc = takeSalads
            break;
        case (snacks):
            myFunc = takeSnacks
            break;
        case (drinks):
            myFunc = takeDrinks
            break;
        case (souses):
            myFunc = takeSouses
            break;

        default: break;
    }

    if (description && description.length >= 110) {
        description = description.slice(0,110) + '...'
    }

    return (
        <>
            <ModalProduct isOpen={isOpen} onClose={() => setIsOpen(false)} label={label}/>
            <OrderItemWrapper onClick={() => {
                myFunc()
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
                    <OrderItemThumbnail src={thumbnail} loading={'lazy'}/>
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
