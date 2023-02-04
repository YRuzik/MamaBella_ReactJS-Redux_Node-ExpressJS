import {
    OrderItemActions,
    OrderItemBody, OrderItemButton,
    OrderItemContainer,
    OrderItemDescription, OrderItemPrice,
    OrderItemThumbnail,
    OrderItemTitle, OrderItemWrapper
} from "./OrderItem.style";

const OrderItem = ({title, price, description, thumbnail}:any) => {

    if (description.length >= 110) {
        description = description.slice(0,110) + '...'
    }

    return (
        <OrderItemWrapper>

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
    )
}

export default OrderItem
