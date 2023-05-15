import NewsContainer from "../components/mainPayload/newsPage/newsContainer/NewsContainer";
import Footer from "../components/mainPayload/footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setAdminLayout, setFetching} from "../actions/actions";
import {PersonalAccountLayout} from "../components/mainPayload/personalAccountPage/PersonalAccountPage.style";
import {load} from "../components/adminPayload/allProductsPage/AllProductsPage";
import Loader from "../components/loader/Loader";

const NewsPage = () => {
    const {loadingStatus} = useSelector((state: load) => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setFetching())
        dispatch(setAdminLayout(false))
    }, [])

    if (loadingStatus === 'loading') {
        return <Loader/>
    } else

    return (
        <PersonalAccountLayout style={{overflowY: 'auto'}}>
            <NewsContainer/>
            {loadingStatus === 'loading' ? null : <Footer/>}
        </PersonalAccountLayout>
    )
}

export default NewsPage;
