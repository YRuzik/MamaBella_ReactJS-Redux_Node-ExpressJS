import {OrdersContainer} from "./Orders.style";
import OrdersItem from "../ordersItem/OrdersItem";
import {useEffect, useState} from "react";
import UserService from "../../../../services/UserService";
import {useSelector} from "react-redux";
import {IUser} from "../../../../interfaces/AuthInterfaces";
import {Grid} from "@mui/material";
import OrderItem from "../../mainPage/orderItem/OrderItem";

type CurrentUser = {
    curUser: IUser;
    isAuth: boolean;
}
const Orders = () => {
    const {curUser, isAuth} = useSelector((state: CurrentUser) => state)
    const [orders, setOrders] = useState([])
    const {takeOrders} = UserService()

    useEffect(() => {
        takeOrders(curUser.id).then((data) => {
            setOrders(data.data)
        })
    }, [])

    return (
        <OrdersContainer>
            <h1>Заказы</h1>
            {orders.map(({...props}: any, index: number) => (
                    <OrdersItem {...props} key={index}/>
            ))}
        </OrdersContainer>
    )
}

export default Orders
