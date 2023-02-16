import {WarningWindowContainer, WarningWindowContent, WarningWindowTitle} from "./WarningWindow.style";
import {FC} from "react";

type GreetingProps = {
    title: string;
    label: string;
}

const WarningWindow: FC<GreetingProps> = ({title, label}) => {
    return (
        <WarningWindowContainer>
            <WarningWindowTitle>
                {title}
            </WarningWindowTitle>
            <br/>
            <WarningWindowContent>
                {label}
            </WarningWindowContent>
        </WarningWindowContainer>
    )
}

export default WarningWindow
