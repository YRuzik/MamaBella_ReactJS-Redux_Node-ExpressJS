import {AddressesAddMoreButton, AddressesContainer} from "./Addresses.style";
import AddressesItem from "../addressesItem/AddressesItem";

const Addresses = () => {
    return (
        <AddressesContainer>
            <h1>Адреса</h1>
            <AddressesItem/>
            <AddressesItem/>
            <AddressesItem/>
            <AddressesAddMoreButton>
                Добавить еще один адрес
            </AddressesAddMoreButton>
        </AddressesContainer>
    )
}

export default Addresses
