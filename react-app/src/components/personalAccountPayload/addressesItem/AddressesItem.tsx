import {AddressesItemContainer, AddressesItemDeleteIcon, AddressesItemInput} from "./AddressesItem.style";
import {UILargeInput} from "../userInfo/UserInfo.style";

const AddressesItem = () => {
    return (
        <AddressesItemContainer>
            <AddressesItemInput value={'ddd'} disabled={true}/>
            <AddressesItemDeleteIcon/>
        </AddressesItemContainer>
    )
}

export default AddressesItem
