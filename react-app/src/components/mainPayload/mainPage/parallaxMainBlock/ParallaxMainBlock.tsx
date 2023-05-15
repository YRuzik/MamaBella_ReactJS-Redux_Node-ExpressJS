import {
    MainActions, MainButton, MainButtonOutline,
    MainDescription, MainDescriptionSub,
    MainLowPrice,
    MainTitle,
    Parallax,
    ParallaxContent,
    ParallaxMainContainer
} from "./ParallaxMainBlock.style";
import {scroller} from "../../../../helpers/ScrollerToCategory";
import {useSelector} from "react-redux";
import {IUser} from "../../../../interfaces/AuthInterfaces";
import {Link} from "react-router-dom";
import ModalAuth from "../modalAuth/ModalAuth";
import {useState} from "react";
import SuccessRegisterModal from "../successRegisterModal/SuccessRegisterModal";

type Auth = {
    isAuth: boolean
    curUser: IUser
}

const ParallaxMainBlock = () => {
    const {isAuth, curUser} = useSelector((state: Auth) => state)
    const [isOpen, setIsOpen] = useState(false)
    const [success, setSuccess] = useState(false)
    return (
        <><ModalAuth isOpen={isOpen} onClose={() => setIsOpen(false)} openSuccess={() => setSuccess(true)}/>
            <SuccessRegisterModal success={success} onClose={() => setSuccess(false)}/>
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
                            <MainButton onClick={() => setIsOpen(true)}>
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
        </>
    )
}

export default ParallaxMainBlock;
