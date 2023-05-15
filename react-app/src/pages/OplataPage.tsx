import {
    PersonalAccountContainer,
    PersonalAccountLayout
} from "../components/mainPayload/personalAccountPage/PersonalAccountPage.style";
import Oplata from "../components/mainPayload/oplataPage/oplata/Oplata";

const OplataPage = () => {
    return (
        <PersonalAccountLayout>
            <PersonalAccountContainer>
                <Oplata/>
            </PersonalAccountContainer>
        </PersonalAccountLayout>
    )
}

export default OplataPage
