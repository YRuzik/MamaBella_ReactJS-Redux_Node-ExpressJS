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
import {useSelector} from "react-redux";
import {IUser} from "../../interfaces/AuthInterfaces";
import {Link} from "react-router-dom";

type Auth = {
    isAuth: boolean
    curUser: IUser
}

const ParallaxMainBlock = () => {
    const {isAuth, curUser} = useSelector((state: Auth) => state)
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
                        {isAuth ?
                            <Link to={`/personal-account/${curUser.id}`} style={{color: 'white'}}>
                                <MainButton>
                                    Аккаунт
                                </MainButton>
                            </Link>
                            :
                            <MainButton>
                                Войти
                            </MainButton>
                        }

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
