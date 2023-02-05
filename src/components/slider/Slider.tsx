import {
    SliderBody,
    SliderContainer,
    SliderItemBody, SliderItemThumbnail,
    SliderWrapper,
    WhiteTransitionDown,
    WhiteTransitionUp
} from "./Slider.style";

const SliderItem = ({thumbnail}: any) => {
    return (
        <SliderItemBody>
            <SliderItemThumbnail src={thumbnail}/>
        </SliderItemBody>
    )
}

const Slider = () => {
    const img1 = 'https://aplus.by/wp-content/uploads/2022/10/5463565673567-1536x1024.jpg'
    const img2 = 'https://ohotamyasa.ru/wp-content/uploads/2/6/9/269ca8a4f0d98d46cedf6af8fa61117e.jpeg'
    const img3 = 'https://img3.goodfon.ru/original/1280x720/e/99/picca-blyudo-pomidory-perec.jpg'

    return (
        <SliderContainer>
            <WhiteTransitionUp/>
            <WhiteTransitionDown/>
            <SliderWrapper>
                <SliderBody>
                    <SliderItem thumbnail={img1}/>
                    <SliderItem thumbnail={img2}/>
                    <SliderItem thumbnail={img3}/>
                    <SliderItem thumbnail={img1}/>
                    <SliderItem thumbnail={img3}/>
                </SliderBody>
            </SliderWrapper>

        </SliderContainer>
    )
}

export default Slider;
