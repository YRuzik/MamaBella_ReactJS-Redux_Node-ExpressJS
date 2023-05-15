import {
    SliderBody, SliderButtonNext, SliderButtonPrev,
    SliderContainer,
    SliderItemBody, SliderItemContent, SliderItemPromo, SliderItemTextBody, SliderItemThumbnail,
    SliderWrapper, SliderWrapperSlides,
    WhiteTransitionDown,
    WhiteTransitionUp
} from "./Slider.style";
import {FC, useEffect, useRef, useState} from "react";
import {INews} from "../../../../interfaces/AuthInterfaces";
import UserService from "../../../../services/UserService";
import {useNavigate} from "react-router-dom";

type GreetingProp = {
    thumbnail: string
}

const SliderItem: FC<INews> = ({thumbnail, description, title, id}) => {
    const navigate = useNavigate()
    return (
        <SliderItemBody onClick={() => navigate(`/news/${id}`)}>
            <SliderItemContent>
                <SliderItemThumbnail src={thumbnail}/>
                <SliderItemTextBody style={{backgroundColor: 'rgba(90, 90, 90,.5)', padding: '0.2rem', borderRadius: '10px'}}>
                    <SliderItemPromo>
                        {description.length > 30 ? description.slice(0, 30) + '...' : description}
                    </SliderItemPromo>
                    {title.length > 20 ? title.slice(0, 20) + '...' : title}
                </SliderItemTextBody>
            </SliderItemContent>
        </SliderItemBody>
    )
}

const Slider: FC = () => {
    const slideRef = useRef(null) as React.RefObject<HTMLDivElement>

    const [index, setIndex] = useState(0);
    const [width, setWidth] = useState(0);
    const [xPosition, setXPosition] = useState(0);

    const [news, setNews] = useState<INews[]>([])
    const {takeNews} = UserService()

    useEffect(() => {
        takeNews().then((data) => setNews(data.data))
    }, [])

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
        if (index === news.length - 4) {
            setIndex(0);
            setXPosition(0);
        } else {
            setIndex(index + 1);
            setXPosition(xPosition - width);
        }
    };

    const renderSlider = (array: INews[]) => {
        return array.map(({...props}: any, id) => {
            return (
                <SliderItem {...props} key={id}/>
            )
        })
    }

    const slides = renderSlider(news)

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
