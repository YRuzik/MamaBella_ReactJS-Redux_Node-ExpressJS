import {
    OrdersItemContainer,
    OrdersItemData,
    OrdersItemDetails,
    OrdersItemHeader, OrdersItemStatus,
    OrdersItemPrice, OrdersItemAddress, OrdersItemMore, OrdersItemReview
} from "./OrdersItem.style";
import {FC, useState} from "react";
import {OplataProducts} from "../../oplataPage/oplata/Oplata.style";
import {ProductItem} from "../../oplataPage/oplata/Oplata";

type props = {
    address: string;
    status: string;
    full_price: string;
    first_name: string;
    last_name: string;
    products: [];
    date: string;
}

const OrdersItem: FC<props> = ({address, status, full_price, first_name, last_name, products, date}) => {
    const time = new Date(date).toLocaleString()
    const [switcher, setSwitcher] = useState(false)
    const [prods, setProds] = useState(products)
        return (
            <OrdersItemContainer>

                <OrdersItemHeader>

                    <OrdersItemStatus style={status === 'Собираем заказ' ? {backgroundColor: 'yellowgreen'} : {backgroundColor: 'forestgreen'}}>
                        {status}
                    </OrdersItemStatus>

                    <OrdersItemPrice>
                        {full_price} руб.
                    </OrdersItemPrice>

                </OrdersItemHeader>

                <OrdersItemData>
                    {time.slice(0, 10)} <span style={{color: "gray"}}>{time.slice(11, 17)}</span>
                </OrdersItemData>

                <OrdersItemAddress>
                    Доставка: {address}
                </OrdersItemAddress>

                <OrdersItemDetails>
                    <OrdersItemMore onClick={() => setSwitcher(!switcher)}>
                        ПОДРОБНЕЕ
                    </OrdersItemMore>
                    <OrdersItemReview>

                    </OrdersItemReview>
                </OrdersItemDetails>
                {switcher ?
                    <div style={{textAlign: 'center', width: '100%'}}>
                        <h2 style={{paddingTop: '1rem'}}>Товары</h2>
                        <OplataProducts>
                            {prods.map(({...props}: any, index: number) => (
                                <ProductItem {...props} key={index}/>
                            ))}
                        </OplataProducts>
                    </div>
                    : null
                }

                <hr/>
            </OrdersItemContainer>
        )
}

export default OrdersItem
