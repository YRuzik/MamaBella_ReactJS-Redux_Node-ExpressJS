import {UAContainer} from "./UserAddresses.style";
import {
    TBody, TBodyTD, TBodyTR,
    THead,
    THeadLabels,
    UserTableButton,
    UserTableCheckAll,
    UserTableContainer, UserTableWrapper
} from "../userTable/UserTable.style";
import {UserTableItem} from "../userTable/UserTable";
import {FC, useEffect, useState} from "react";
import UserService from "../../../services/UserService";
import {IAddresses, IUser} from "../../../interfaces/AuthInterfaces";
import {useNavigate, useParams} from "react-router-dom";

const UserAddresses = () => {
    const {id} = useParams<string>()
    const {takeAddress} = UserService()

    const [addresses, setAddresses] = useState<IAddresses[]>([])

    useEffect(() => {
        takeAddress(id!).then(data => setAddresses(data.data))
    }, [])

    return (
        <UAContainer>
            <h2 style={{paddingBottom: '1rem'}}>Активные адреса</h2>
            <UserTableWrapper style={{maxHeight: '85%', minHeight: '85%', overflowY: "scroll"}}>
                <UserTableContainer>
                    <THead>
                        <tr>
                            <THeadLabels>ID</THeadLabels>
                            <THeadLabels>Адрес</THeadLabels>
                        </tr>
                    </THead>
                    <TBody>
                        {addresses.length > 0 ? addresses.map(({...props}: any, index: number) => (
                            <AddressTable {...props} key={index}/>
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

export default UserAddresses

export const AddressTable: FC<IAddresses> = ({id, address}) => {

    return (
        <tr>
            <TBodyTD style={{opacity: '0.6', width: '10%'}}>
                {id}
            </TBodyTD>
            <TBodyTD>
                {address}
            </TBodyTD>
        </tr>

    )
}
