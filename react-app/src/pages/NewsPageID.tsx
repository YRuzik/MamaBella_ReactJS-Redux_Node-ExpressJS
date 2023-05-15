import {
    PersonalAccountContainer,
    PersonalAccountLayout
} from "../components/mainPayload/personalAccountPage/PersonalAccountPage.style";
import NewsInfo from "../components/mainPayload/newsPage/newsInfo/NewsInfo";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setAdminLayout} from "../actions/actions";

const NewsPageID = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setAdminLayout(false))
    }, [])

    return (
        <PersonalAccountLayout>
            <PersonalAccountContainer>
                <NewsInfo/>
            </PersonalAccountContainer>
        </PersonalAccountLayout>
    )
}

export default NewsPageID;
