import {useNavigate, useParams} from "react-router-dom";
import UserService from "../../../services/UserService";
import {useEffect, useState} from "react";
import {IUser} from "../../../interfaces/AuthInterfaces";
import {setAdminLayout} from "../../../actions/actions";
import {useDispatch} from "react-redux";
import {
    LabelBack,
    UBIButtonControl,
    UBIButtonDelete,
    UBIContainer,
    UBIFlex,
    UBILabel,
    UBIPersonalData
} from "./UserByID.style";
import {TBodyTD} from "../userTable/UserTable.style";
import LabelBackButton from "../../labelBackButton/LabelBackButton";
import {UAContainer} from "../userAddresses/UserAddresses.style";
import UserAddresses from "../userAddresses/UserAddresses";

const UserByID = () => {
    const {id} = useParams<string>()

    const {takeUserByID, deleteUserByID} = UserService();
    const [curUser, setCurUser] = useState<IUser>();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(setAdminLayout(true))
        if (id != undefined) takeUserByID(id).then((data) => setCurUser(data.data[0]))
    }, [])

    return (
        <UBIContainer>
            <LabelBackButton label={'Данные о пользователе'}/>
            <UBIFlex>
                <img style={{borderRadius: '10000px'}} width='20%' src={'https://sun9-48.userapi.com/impg/s8uwfr2Kh8wkE8HKNCJVkt9kr43uySc-KviYGQ/sPbJndgr5sc.jpg?size=564x564&quality=96&sign=aeb353690ef2c2d2670c59097b706b8c&type=album'}/>
                <UBIPersonalData>
                    <UBIButtonControl>
                        <UBIButtonDelete onClick={() => {
                            deleteUserByID(id!)
                            navigate('/admin')
                            window.location.reload()
                        }}>УДАЛИТЬ</UBIButtonDelete>
                    </UBIButtonControl>
                    <h3><UBILabel>Уникальный ID:</UBILabel> {curUser?.id}</h3>
                    <h3><UBILabel>Имя:</UBILabel> {curUser?.first_name}</h3>
                    <h3><UBILabel>Фамилия:</UBILabel> {curUser?.last_name}</h3>
                    <h3><UBILabel>Электронная почта:</UBILabel> {curUser?.email}</h3>
                    <h3>
                        <UBILabel>Активация:</UBILabel> <span style={curUser?.activated ? {color: 'green', fontSize: '18px'} : {color: 'red'}}>{curUser?.activated ? '✓' : '×'}</span></h3>
                    <h3>
                        <UBILabel>Администратор:</UBILabel> <span style={curUser?.admin ? {color: 'green', fontSize: '18px'} : {color: 'red'}}>{curUser?.admin ? '✓' : '×'}</span></h3>
                </UBIPersonalData>
            </UBIFlex>
            <UBIFlex style={{border: 'none', boxShadow: 'none', justifyContent: 'space-between', padding: '1rem 0 0 0'}}>
                <UserAddresses/>
            </UBIFlex>
        </UBIContainer>
    )
}

export default UserByID;
