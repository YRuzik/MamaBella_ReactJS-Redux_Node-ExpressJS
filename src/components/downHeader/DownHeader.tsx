import {
    DownHeaderAnchor,
    DownHeaderBody,
    DownHeaderBodySticky,
    DownHeaderElement,
    DownHeaderElements,
    DownHeaderWrapper
} from "./DownHeader.style";
import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

const DownHeader = () => {
    const [stickyNavbar, setStickyNavbar] = useState(false)

    const scroller = (e: any, id: string) => {
        const element = document.getElementById(id);
        e.preventDefault();
        element && element.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(id, id, `/#${id}`);
    }

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
                            <i className="fa-solid fa-pizza-slice "></i>
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
                                Закуски
                            </DownHeaderElement>

                            <DownHeaderElement>
                                Соусы
                            </DownHeaderElement>

                            <DownHeaderElement>
                                Напитки
                            </DownHeaderElement>
                        </DownHeaderElements>

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
                                Закуски
                            </DownHeaderElement>

                            <DownHeaderElement>
                                Соусы
                            </DownHeaderElement>

                            <DownHeaderElement>
                                Напитки
                            </DownHeaderElement>
                        </DownHeaderElements>

                    </DownHeaderWrapper>
                </DownHeaderBody>
            }
        </>
    )
}

export default DownHeader;
