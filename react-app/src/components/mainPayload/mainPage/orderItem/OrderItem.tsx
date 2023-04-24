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
import {currentProductFetched} from "../../../../actions/actions";
import mainService from "../../../../services/ProductService";

type GreetingProps = {
    title: string;
    price: number;
    description: string;
    thumbnail: string;
    label: string;
    product_id: number
}

const OrderItem: FC<GreetingProps> = ({title, price, description, thumbnail, label, product_id}) => {

    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const {getProductsID} = mainService()

    if (description && description.length >= 110) {
        description = description.slice(0,110) + '...'
    }

    return (
        <>
            <ModalProduct isOpen={isOpen} onClose={() => setIsOpen(false)} label={label}/>
            <OrderItemWrapper onClick={() => {
                getProductsID(product_id).then(data => dispatch(currentProductFetched(data.data)))
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
