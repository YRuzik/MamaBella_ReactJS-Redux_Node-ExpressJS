import {AddressesItemContainer, AddressesItemDeleteIcon, AddressesItemInput} from "./AddressesItem.style";
import {UILargeInput} from "../userInfo/UserInfo.style";
import {FC, useEffect} from "react";
import {IAddresses} from "../../../../interfaces/AuthInterfaces";
import UserService from "../../../../services/UserService";

type GreetingsProps = {
    id: string
    address: string
    user_id: string
    onDelete: (id: string) => void}


const AddressesItem: FC<GreetingsProps> = ({id, address, onDelete}) => {

    return (
        <AddressesItemContainer>
            <AddressesItemInput value={address} disabled={true}/>
            <AddressesItemDeleteIcon onClick={() => onDelete(id)}/>
        </AddressesItemContainer>
    )
}

export default AddressesItem
