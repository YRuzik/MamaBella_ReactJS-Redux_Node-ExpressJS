import {OrdersContainer} from "./Orders.style";
import OrdersItem from "../ordersItem/OrdersItem";

const Orders = () => {
    return (
        <OrdersContainer>
            <h1>Заказы</h1>
            <OrdersItem/>
            <OrdersItem/>
            <OrdersItem/>
            <OrdersItem/>
            <OrdersItem/>
        </OrdersContainer>
    )
}

export default Orders
