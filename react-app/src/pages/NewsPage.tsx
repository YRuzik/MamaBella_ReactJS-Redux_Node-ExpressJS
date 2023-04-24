import NewsContainer from "../components/mainPayload/newsPage/newsContainer/NewsContainer";
import Footer from "../components/mainPayload/footer/Footer";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setAdminLayout} from "../actions/actions";

const NewsPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setAdminLayout(false))
    }, [])

    return (
        <>
            <NewsContainer/>
            <Footer/>
        </>
    )
}

export default NewsPage;
