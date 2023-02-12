import {
    MainActions, MainButton, MainButtonOutline,
    MainDescription, MainDescriptionSub,
    MainLowPrice,
    MainTitle,
    Parallax,
    ParallaxContent,
    ParallaxMainContainer
} from "./ParallaxMainBlock.style";
import {scroller} from "../../helpers/ScrollerToCategory";

const ParallaxMainBlock = () => {

    return (
        <ParallaxMainContainer>
            <Parallax>
                <ParallaxContent>
                    <MainTitle>
                        MAMMA BELLA
                    </MainTitle>
                    <MainLowPrice>
                        самая вкусная пицца
                    </MainLowPrice>
                    <MainDescription>
                        Закажите <MainDescriptionSub>вкусную и недорогую</MainDescriptionSub> пиццу с любой начинкой на ваш вкус и не потратьте все свои деньги
                    </MainDescription>

                    <MainActions>
                        <MainButton>
                            Войти
                        </MainButton>

                        <MainButtonOutline onClick={(e) => scroller(e, 'menu')}>
                            Меню
                        </MainButtonOutline>
                    </MainActions>

                </ParallaxContent>
            </Parallax>
        </ParallaxMainContainer>
    )
}

export default ParallaxMainBlock;
