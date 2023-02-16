import {
    UIContainer,
    UIDisabledInput,
    UIFirstInputs,
    UIInputLabelContainer,
    UILabel,
    UILargeInput
} from "./UserInfo.style";
import {IUser} from "../../../interfaces/AuthInterfaces";

type GreetingProps = {
    curUser: IUser
}

const UserInfo = ({curUser}: GreetingProps) => {
    return (
        <UIContainer>
            <h1>Личные данные</h1>
            <UIFirstInputs>
                <UIInputLabelContainer>
                    <UILabel>Имя</UILabel>
                    <UIDisabledInput value={curUser.first_name} disabled={true}/>
                </UIInputLabelContainer>
                <UIInputLabelContainer>
                    <UILabel>Фамилия</UILabel>
                    <UIDisabledInput value={curUser.last_name} disabled={true}/>
                </UIInputLabelContainer>
            </UIFirstInputs>

            <UIInputLabelContainer>
                <UILabel>Логин</UILabel>
                <UILargeInput value={curUser.username} disabled={true}/>
            </UIInputLabelContainer>

            <UIInputLabelContainer>
                <UILabel>Эл. почта</UILabel>
                <UILargeInput value={curUser.email} disabled={true}/>
            </UIInputLabelContainer>
        </UIContainer>
    )
}

export default UserInfo
