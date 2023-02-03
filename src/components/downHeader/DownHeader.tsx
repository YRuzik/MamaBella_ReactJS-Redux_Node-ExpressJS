import {DownHeaderBody, DownHeaderElement, DownHeaderElements, DownHeaderWrapper} from "./DownHeader.style";

const DownHeader = () => {
    return (
        <DownHeaderBody>
            <DownHeaderWrapper>
                <DownHeaderElements>
                    <DownHeaderElement>
                        Пицца
                    </DownHeaderElement>

                    <DownHeaderElement>
                        Салаты
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
    )
}

export default DownHeader;
