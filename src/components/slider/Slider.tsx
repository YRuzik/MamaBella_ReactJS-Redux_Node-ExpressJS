import {
    SliderBody, SliderButtonNext, SliderButtonPrev,
    SliderContainer,
    SliderItemBody, SliderItemContent, SliderItemPromo, SliderItemTextBody, SliderItemThumbnail,
    SliderWrapper, SliderWrapperSlides,
    WhiteTransitionDown,
    WhiteTransitionUp
} from "./Slider.style";
import {useCallback, useEffect, useRef, useState} from "react";

const SliderItem = ({thumbnail}: any) => {
    return (
        <SliderItemBody>
            <SliderItemContent>
                <SliderItemThumbnail src={thumbnail}/>
                <SliderItemTextBody>
                    <SliderItemPromo>
                        Акция!
                    </SliderItemPromo>
                    Вкусные выходные!
                </SliderItemTextBody>
            </SliderItemContent>
        </SliderItemBody>
    )
}

const Slider = () => {
    const slideRef = useRef(null) as React.RefObject<HTMLDivElement>

    const [index, setIndex] = useState(0);
    const [width, setWidth] = useState(0);
    const [xPosition, setXPosition] = useState(0);

    const slidesSRC = [
        'https://aplus.by/wp-content/uploads/2022/10/5463565673567-1536x1024.jpg',
        'https://ohotamyasa.ru/wp-content/uploads/2/6/9/269ca8a4f0d98d46cedf6af8fa61117e.jpeg',
        'https://img3.goodfon.ru/original/1280x720/e/99/picca-blyudo-pomidory-perec.jpg',
        'https://aplus.by/wp-content/uploads/2022/10/5463565673567-1536x1024.jpg',
        'https://ohotamyasa.ru/wp-content/uploads/2/6/9/269ca8a4f0d98d46cedf6af8fa61117e.jpeg',
        'https://img3.goodfon.ru/original/1280x720/e/99/picca-blyudo-pomidory-perec.jpg',

    ]

    useEffect(() => {
        if (slideRef.current) {
            setWidth(24.7);
        }
    }, [setWidth]);

    const handleClickPrev = () => {
        if (index === 0) return;
        setIndex(index - 1);
        setXPosition(xPosition + width);
    }
    const handleClickNext = () => {
        if (index === slidesSRC.length - 4) {
            setIndex(0);
            setXPosition(0);
        } else {
            setIndex(index + 1);
            setXPosition(xPosition - width);
        }
    };

    const renderSlider = (array: string[]) => {
        return array.map((item, id) => {
            return (
                <SliderItem thumbnail={item} key={id}/>
            )
        })
    }

    const slides = renderSlider(slidesSRC)

    return (
        <SliderContainer>
            <WhiteTransitionUp/>
            <WhiteTransitionDown/>
            <SliderWrapper>
                <SliderButtonPrev onClick={() => {handleClickPrev()}}>
                    <i className="fa-solid fa-angle-right"></i>
                </SliderButtonPrev>
                <SliderButtonNext onClick={() => {handleClickNext()}}>
                    <i className="fa-solid fa-angle-right"></i>
                </SliderButtonNext>
                <SliderBody>
                    <SliderWrapperSlides ref={slideRef} xPosition={xPosition}>
                        {slides}
                    </SliderWrapperSlides>
                </SliderBody>
            </SliderWrapper>

        </SliderContainer>
    )
}

export default Slider;
