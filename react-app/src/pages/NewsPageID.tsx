import {PersonalAccountContainer} from "../components/mainPayload/personalAccountPage/PersonalAccountPage.style";
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
        <PersonalAccountContainer>
            <NewsInfo/>
        </PersonalAccountContainer>
    )
}

export default NewsPageID;
