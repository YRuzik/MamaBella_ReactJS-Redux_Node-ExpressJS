import {
    UserTableContainer,
    UserTableItemStroke,
    UserTableItemStartStroke,
    UserTableItemStartName,
    UserTableItemValue,
    UserTableTBody,
    UserTableWrapper,
    UserTableButton,
    THead,
    THeadLabels,
    TBody, TBodyTR, TBodyTD, UserTableCheckAll, CustomLink
} from "./UserTable.style";
import {useDispatch, useSelector} from "react-redux";
import {FC, useEffect, useState} from "react";
import UserService from "../../../services/UserService";
import {usersFetched} from "../../../actions/actions";
import {products} from "../../../interfaces/ProductsInterfaces";
import {IUser} from "../../../interfaces/AuthInterfaces";
import {Grid} from "@mui/material";
import OrderItem from "../../mainPayload/mainPage/orderItem/OrderItem";
import {Link, useNavigate} from "react-router-dom";

type Users = {
    users: IUser[]
}

const UserTable = () => {
    const {users} = useSelector((state: Users) => state)
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const {fetchUsers} = UserService()

    useEffect(() => {
        fetchUsers().then((users) => dispatch(usersFetched(users.data)))
    }, [])

    return (
        <UserTableWrapper>
            <UserTableContainer>
                <THead>
                    <tr>
                        <THeadLabels>ID</THeadLabels>
                        <THeadLabels>Логин</THeadLabels>
                        <THeadLabels>Имя</THeadLabels>
                        <THeadLabels>Фамилия</THeadLabels>
                        <THeadLabels>Эл. почта</THeadLabels>
                        <THeadLabels>Активация</THeadLabels>
                        <THeadLabels>Администратор</THeadLabels>
                    </tr>
                </THead>
                <TBody>
                    {users.slice(0, 5).map(({...props}: any, index: number) => (
                        <UserTableItem {...props} key={index}/>
                    ))}
                </TBody>
            </UserTableContainer>
            <UserTableCheckAll>
                <UserTableButton onClick={() => navigate('users')}>{'Смотреть все'.toUpperCase()}</UserTableButton>
            </UserTableCheckAll>
        </UserTableWrapper>
    )
}

export default UserTable;

export const UserTableItem: FC<IUser> = ({id, username, first_name, last_name, email, admin, activated}) => {

    const navigate = useNavigate();

    const checkLength = (stroke: string) => {
        if(stroke.length > 11) {
            return stroke.slice(0, 11) + '...'
        }
        return stroke
    }

    return (
            <TBodyTR onClick={() => navigate(`/admin/users/${id}`)}>
                <TBodyTD style={{opacity: '0.6'}}>
                    {id}
                </TBodyTD>
                <TBodyTD>
                    {checkLength(username)}
                </TBodyTD>
                <TBodyTD>
                    {checkLength(first_name)}
                </TBodyTD>
                <TBodyTD>
                    {checkLength(last_name)}
                </TBodyTD>
                <TBodyTD>
                    {checkLength(email)}
                </TBodyTD>
                <TBodyTD
                    style={activated ? {color: 'green', fontSize: '18px'} : {color: 'red', fontSize: '18px'}}>
                    {activated ? '✓' : '×'}
                </TBodyTD>
                <TBodyTD style={admin ? {color: 'green', fontSize: '18px'} : {color: 'red', fontSize: '18px'}}>
                    {admin ? '✓' : '×'}
                </TBodyTD>
            </TBodyTR>

    )
}
