import ParallaxMainBlock from "../components/parallaxMainBlock/ParallaxMainBlock";
import Menu from "../components/menu/Menu";
import Slider from "../components/slider/Slider";
import {useState} from "react";
import ModalProduct from "../components/modalProduct/ModalProduct";

const MainPage = () => {
    const [modalProductIsOpen, setModalProductIsOpen] = useState(false)

    return (
        <>
            <ParallaxMainBlock></ParallaxMainBlock>
            <Slider/>
            <Menu/>
        </>
    )
}

export default MainPage
