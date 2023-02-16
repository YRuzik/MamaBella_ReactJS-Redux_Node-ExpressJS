import {PKContainer, PKItem, PKUserContainer, PKUserView} from "./PKContent.style";
import {IUser} from "../../../interfaces/AuthInterfaces";
import {FC, useCallback, useState} from "react";
import Orders from "../orders/Orders";
import UserInfo from "../userInfo/UserInfo";
import Addresses from "../addresses/Addresses";

type GreetingProps = {
    curUser: IUser
}

const PKContent: FC<GreetingProps> = ({curUser}) => {
    const userInfo = 'Личные данные',
        orders = 'Заказы',
        addresses = 'Адреса'

    const [currentSection, setCurrentSection] = useState(userInfo)

    const switchSection = useCallback(() => {
        if (currentSection === userInfo) {
            return <UserInfo curUser={curUser}/>
        } else if (currentSection === orders) {
            return <Orders/>
        } else if (currentSection === addresses) {
            return <Addresses/>
        }
    }, [currentSection])

    const section = switchSection()
    return (
        <PKUserContainer>
            <PKContainer>
                <PKUserView>
                    Здравствуйте, {curUser.first_name}
                </PKUserView>
                <hr/>
                <PKItem onClick={() => setCurrentSection(userInfo)}>
                    <i className="fa-regular fa-user fa-xl"></i>{userInfo}
                </PKItem>
                <PKItem onClick={() => setCurrentSection(orders)}>
                    <i className='fa-solid fa-cart-shopping'></i>{orders}
                </PKItem>
                <PKItem onClick={() => setCurrentSection(addresses)}>
                    <i className='fa fa-home'></i>{addresses}
                </PKItem>
            </PKContainer>
            {section}
        </PKUserContainer>
    )
}

export default PKContent;
