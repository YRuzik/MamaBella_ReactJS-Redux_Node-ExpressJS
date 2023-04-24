import {useDispatch, useSelector} from "react-redux";
import UserService from "../../../services/UserService";
import {useEffect} from "react";
import {setAdminLayout, usersFetched} from "../../../actions/actions";
import {
    TBody,
    THead,
    THeadLabels, UserTableButton,
    UserTableCheckAll,
    UserTableContainer,
    UserTableWrapper
} from "../userTable/UserTable.style";
import {UserTableItem} from "../userTable/UserTable";
import {IUser} from "../../../interfaces/AuthInterfaces";
import LabelBackButton from "../../labelBackButton/LabelBackButton";

type Users = {
    users: IUser[]
}

const AllUsersPage = () => {
    const {users} = useSelector((state: Users) => state)

    const dispatch = useDispatch()
    const {fetchUsers} = UserService()

    useEffect(() => {
        dispatch(setAdminLayout(true))
        fetchUsers().then((users) => dispatch(usersFetched(users.data)))
    }, [])

    return (
        <>
            <LabelBackButton label={'Все пользователи'}/>
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
                        {users.map(({...props}: any, index: number) => (
                            <UserTableItem {...props} key={index}/>
                        ))}
                    </TBody>
                </UserTableContainer>
            </UserTableWrapper>
        </>
    )
}

export default AllUsersPage;
