import {
    DownHeaderAnchor,
    DownHeaderBody,
    DownHeaderBodySticky, DownHeaderCardButton,
    DownHeaderElement,
    DownHeaderElements,
    DownHeaderWrapper
} from "./DownHeader.style";
import React, {useEffect, useState} from "react";
import InterfaceService from "../../services/InterfaceService";

const DownHeader = () => {
    const [stickyNavbar, setStickyNavbar] = useState(false)
    const {scroller} = InterfaceService()

    const stickyChecker = () => {
        if (window.scrollY >= 150) {
            setStickyNavbar(true)
        } else {
            setStickyNavbar(false)
        }
    }

    useEffect(() => {
        if (window.scrollY >= 150) {
            setStickyNavbar(true)
        } else {
            setStickyNavbar(false)
        }

        window.addEventListener('scroll', stickyChecker)

        return () => {
            window.removeEventListener('scroll', stickyChecker)
        }
    }, [])


    return (
        <>
            {stickyNavbar ?
                <DownHeaderBodySticky>
                    <DownHeaderWrapper>
                        <DownHeaderElements>
                            <DownHeaderAnchor to={'/'} onClick={(e) => scroller(e, 'main')}>
                                <i className="fa-solid fa-pizza-slice "></i>
                            </DownHeaderAnchor>
                            <DownHeaderElement>
                                <DownHeaderAnchor to={'/'} onClick={(e) => scroller(e, 'pizza')}>
                                    Пицца
                                </DownHeaderAnchor>
                            </DownHeaderElement>

                            <DownHeaderElement>
                                <DownHeaderAnchor to={'/'} onClick={(e) => scroller(e, 'salads')}>
                                    Салаты
                                </DownHeaderAnchor>
                            </DownHeaderElement>

                            <DownHeaderElement>
                                <DownHeaderAnchor to={'/'} onClick={(e) => scroller(e, 'snacks')}>
                                    Закуски
                                </DownHeaderAnchor>
                            </DownHeaderElement>

                            <DownHeaderElement>
                                <DownHeaderAnchor to={'/'} onClick={(e) => scroller(e, 'drinks')}>
                                    Напитки
                                </DownHeaderAnchor>
                            </DownHeaderElement>

                            <DownHeaderElement>
                                <DownHeaderAnchor to={'/'} onClick={(e) => scroller(e, 'sauces')}>
                                    Соусы
                                </DownHeaderAnchor>
                            </DownHeaderElement>
                        </DownHeaderElements>

                        <DownHeaderCardButton>
                            Корзина
                        </DownHeaderCardButton>

                    </DownHeaderWrapper>
                </DownHeaderBodySticky>
            :
                <DownHeaderBody>
                    <DownHeaderWrapper>
                        <DownHeaderElements>
                            <DownHeaderElement>
                                <DownHeaderAnchor to={'/'} onClick={(e) => scroller(e, 'pizza')}>
                                    Пицца
                                </DownHeaderAnchor>
                            </DownHeaderElement>

                            <DownHeaderElement>
                                <DownHeaderAnchor to={'/'} onClick={(e) => scroller(e, 'salads')}>
                                    Салаты
                                </DownHeaderAnchor>
                            </DownHeaderElement>

                            <DownHeaderElement>
                                <DownHeaderAnchor to={'/'} onClick={(e) => scroller(e, 'snacks')}>
                                    Закуски
                                </DownHeaderAnchor>
                            </DownHeaderElement>

                            <DownHeaderElement>
                                <DownHeaderAnchor to={'/'} onClick={(e) => scroller(e, 'drinks')}>
                                    Напитки
                                </DownHeaderAnchor>
                            </DownHeaderElement>

                            <DownHeaderElement>
                                <DownHeaderAnchor to={'/'} onClick={(e) => scroller(e, 'sauces')}>
                                    Соусы
                                </DownHeaderAnchor>
                            </DownHeaderElement>
                        </DownHeaderElements>

                        <DownHeaderCardButton>
                            Корзина
                        </DownHeaderCardButton>

                    </DownHeaderWrapper>
                </DownHeaderBody>
            }
        </>
    )
}

export default DownHeader;
