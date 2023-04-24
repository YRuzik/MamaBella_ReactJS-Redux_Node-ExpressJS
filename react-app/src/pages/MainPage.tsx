import ParallaxMainBlock from "../components/mainPayload/mainPage/parallaxMainBlock/ParallaxMainBlock";
import Menu from "../components/mainPayload/mainPage/menu/Menu";
import Slider from "../components/mainPayload/mainPage/slider/Slider";
import {useEffect, useState} from "react";
import ModalProduct from "../components/mainPayload/mainPage/modalProduct/ModalProduct";
import Footer from "../components/mainPayload/footer/Footer";
import {useDispatch} from "react-redux";
import {setAdminLayout} from "../actions/actions";

const MainPage = () => {
    const [modalProductIsOpen, setModalProductIsOpen] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAdminLayout(false))
    }, [])

    return (
        <>
            <ParallaxMainBlock></ParallaxMainBlock>
            <Slider/>
            <Menu/>
            <Footer/>
        </>
    )
}

export default MainPage
