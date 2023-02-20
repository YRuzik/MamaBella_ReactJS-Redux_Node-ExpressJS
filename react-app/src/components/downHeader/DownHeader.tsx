import {
    DownHeaderAnchor,
    DownHeaderBody,
    DownHeaderBodySticky, DownHeaderCardButton,
    DownHeaderElement,
    DownHeaderElements,
    DownHeaderWrapper
} from "./DownHeader.style";
import React, {useEffect, useState} from "react";
import {scroller} from "../../helpers/ScrollerToCategory";
import Cart from "../cart/Cart";

const DownHeader = () => {
    const [stickyNavbar, setStickyNavbar] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)

    const stickyChecker = () => {
        if (window.scrollY >= 150) {
            setStickyNavbar(true)
        } else {
            setStickyNavbar(false)
        }
    }

    useEffect(() => {
        stickyChecker()

        window.addEventListener('scroll', stickyChecker)

        return () => {
            window.removeEventListener('scroll', stickyChecker)
        }
    }, [])


    return (
        <>
            <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)}/>
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

                        <DownHeaderCardButton onClick={() => setCartOpen(true)}>
                            <i className='fa-solid fa-basket-shopping fa-2xl'></i>
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

                    </DownHeaderWrapper>
                </DownHeaderBody>
            }
        </>
    )
}

export default DownHeader;
