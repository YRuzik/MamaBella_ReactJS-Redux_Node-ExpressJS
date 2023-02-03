import {
    HeaderAction,
    HeaderActions,
    HeaderAll,
    HeaderBody,
    HeaderLogo,
    HeaderLogoTitle,
    HeaderWrapper
} from "./Header.style";
import DownHeader from "../downHeader/DownHeader";

const Header = () => {
    return(
        <HeaderAll>
            <HeaderBody>
                <HeaderWrapper>
                    <HeaderLogo>
                        <HeaderLogoTitle>
                            <i className="fa-solid fa-pizza-slice"></i>
                            Mamma Bella
                            <br/>
                            <span style={{fontSize: '1rem', fontFamily: 'Montserrat Alternates'}}>
                               Пиццерия номер 1 в России!
                            </span>
                        </HeaderLogoTitle>
                    </HeaderLogo>

                    <HeaderActions>

                        <HeaderAction>
                            <div>
                                <i className="fa-regular fa-dollar-sign fa-2xl"></i>
                            </div>
                            <div style={{lineHeight: '2rem'}}>Беллакоины</div>
                        </HeaderAction>

                        <HeaderAction>
                            <div>
                                <i className="fa-regular fa-newspaper fa-2xl"></i>
                            </div>
                            <div style={{lineHeight: '2rem'}}>Мои акции</div>
                        </HeaderAction>

                        <HeaderAction>
                            <div>
                                <i className="fa-regular fa-user fa-2xl"></i>
                            </div>
                            <div style={{lineHeight: '2rem'}}>Войти</div>
                        </HeaderAction>

                    </HeaderActions>
                </HeaderWrapper>
            </HeaderBody>
            <DownHeader/>
        </HeaderAll>
    )
}

export default Header;
