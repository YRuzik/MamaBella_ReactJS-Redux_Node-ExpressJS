import {UsersCounterContainer, UsersCounterTitle, UsersCounterValue} from "./UsersCounter.style";
import {useSelector} from "react-redux";
import {IUser} from "../../../interfaces/AuthInterfaces";

type Users = {
    users: IUser[]
}

const UsersCounter = () => {
    const {users} = useSelector((state: Users) => state)
    return (
        <UsersCounterContainer>
            <UsersCounterTitle>
                Общее количество пользователей
            </UsersCounterTitle>
            <UsersCounterValue>
                {users.length}
            </UsersCounterValue>
        </UsersCounterContainer>
    )
}

export default UsersCounter;
