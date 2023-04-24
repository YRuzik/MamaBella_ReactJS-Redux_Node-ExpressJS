import {
    OrdersItemContainer,
    OrdersItemData,
    OrdersItemDetails,
    OrdersItemHeader, OrdersItemStatus,
    OrdersItemPrice, OrdersItemAddress, OrdersItemMore, OrdersItemReview
} from "./OrdersItem.style";

const OrdersItem = () => {
        return (
            <OrdersItemContainer>

                <OrdersItemHeader>

                    <OrdersItemStatus>
                        Доставлен
                    </OrdersItemStatus>

                    <OrdersItemPrice>
                        1500 руб.
                    </OrdersItemPrice>

                </OrdersItemHeader>

                <OrdersItemData>
                    04.03.2023 <span style={{color: "gray"}}>13:40</span>
                </OrdersItemData>

                <OrdersItemAddress>
                    Доставка: Владимир, ул.Усти-на-Лабе, д. 3, кв. 5, п. 3, эт. 3
                </OrdersItemAddress>

                <OrdersItemDetails>
                    <OrdersItemMore>
                        ПОДРОБНЕЕ
                    </OrdersItemMore>
                    <OrdersItemReview>
                        Оценить
                    </OrdersItemReview>
                </OrdersItemDetails>

                <hr/>
            </OrdersItemContainer>
        )
}

export default OrdersItem
