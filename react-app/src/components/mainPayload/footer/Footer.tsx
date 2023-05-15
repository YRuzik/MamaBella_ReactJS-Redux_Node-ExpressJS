import {FooterContainer, FooterContent, FooterLink, Support, Wrapper} from "./Footer.style";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <Link style={{fontWeight: 'bolder', textDecoration: 'none', color: "white"}} to={'/'}><h1>MAMA BELLA</h1></Link>
                <Wrapper>
                    <div style={{opacity: 0.5}}>
                        © 2023 Mama Bella. Все права защищены.
                    </div>
                </Wrapper>
                <Support>
                    <ul>Support:
                        <li>yruzik@gmail.com</li>
                    </ul>
                </Support>
            </FooterContent>
        </FooterContainer>
    )
}

export default Footer;
