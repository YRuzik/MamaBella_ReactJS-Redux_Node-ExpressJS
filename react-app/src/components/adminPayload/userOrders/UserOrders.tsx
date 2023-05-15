import {
    TBody,
    TBodyTD,
    TBodyTD1,
    THead,
    THeadLabels,
    UserTableContainer,
    UserTableWrapper
} from "../userTable/UserTable.style";
import {UAContainer} from "../userAddresses/UserAddresses.style";
import {AddressTable} from "../userAddresses/UserAddresses";
import {useParams} from "react-router-dom";
import UserService from "../../../services/UserService";
import {FC, useEffect, useState} from "react";
import {IAddresses} from "../../../interfaces/AuthInterfaces";

const UserOrders = () => {
    const {id} = useParams<string>()
    const {takeOrders} = UserService()

    const [addresses, setAddresses] = useState([])

    useEffect(() => {
        takeOrders(id!).then(data => setAddresses(data.data))
    }, [])
    return (
        <UAContainer style={{paddingLeft: '1rem'}}>
            <h2 style={{paddingBottom: '1rem'}}>Заказы</h2>
            <UserTableWrapper style={{maxHeight: '85%', minHeight: '85%', overflowY: "scroll"}}>
                <UserTableContainer>
                    <THead>
                        <tr>
                            <THeadLabels>ID</THeadLabels>
                            <THeadLabels>Дата</THeadLabels>
                            <THeadLabels>Имя</THeadLabels>
                            <THeadLabels>Фамилия</THeadLabels>
                            <THeadLabels>Эл. Почта</THeadLabels>
                            <THeadLabels>Цена</THeadLabels>
                            <THeadLabels>Статус</THeadLabels>
                        </tr>
                    </THead>
                    <TBody>
                        {addresses.length > 0 ? addresses.map(({...props}: any, index: number) => (
                            <OrdersTable {...props} key={index}/>
                        )) : <>
                            <div style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
                                Пусто
                            </div>
                        </>}
                    </TBody>
                </UserTableContainer>
            </UserTableWrapper>
        </UAContainer>
    )
}

export default UserOrders

type props = {
    address: string;
    status: string;
    full_price: string;
    first_name: string;
    last_name: string;
    products: [];
    date: string;
    id: string;
    email: string;
}

export const OrdersTable: FC<props> = ({address, status, full_price, first_name, last_name, products, date, id, email}) => {
    const time = new Date(date).toLocaleString()
    return (
        <tr style={{fontSize: '10px'}}>
            <TBodyTD1 style={{opacity: '0.6', width: '10%'}}>
                {id}
            </TBodyTD1>
            <TBodyTD1>
                {time}
            </TBodyTD1>
            <TBodyTD1>
                {first_name}
            </TBodyTD1>
            <TBodyTD1>
                {last_name}
            </TBodyTD1>
            <TBodyTD1>
                {email}
            </TBodyTD1>
            <TBodyTD1>
                {full_price}
            </TBodyTD1>
            <TBodyTD1>
                {status}
            </TBodyTD1>
        </tr>

    )
}
