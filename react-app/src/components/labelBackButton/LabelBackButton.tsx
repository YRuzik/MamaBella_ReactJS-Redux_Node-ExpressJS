import {ButtonBack, LabelBack} from "../adminPayload/userByID/UserByID.style";
import {FC} from "react";
import {useNavigate} from "react-router-dom";

type prop = {
    label: string
}

const LabelBackButton: FC<prop> = ({label}) => {
    const navigate = useNavigate()
    return (
        <LabelBack>
            <h1>{label}</h1>
            <ButtonBack onClick={() => navigate(-1)}>
                Назад
            </ButtonBack>
        </LabelBack>
    )
}

export default LabelBackButton
