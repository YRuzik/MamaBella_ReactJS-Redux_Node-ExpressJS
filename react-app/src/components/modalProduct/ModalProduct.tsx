import {
    ModalBottom, ModalButtonBuy,
    ModalContainer,
    ModalDescription,
    ModalDetails,
    ModalLeft,
    ModalRight,
    ModalThumbnail,
    ModalTitle
} from "./ModalProduct.style";
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import {FC, useEffect, useRef, useState} from "react";
import useOnClickOutside from "../../hooks/onClickOutside";
import {useDispatch, useSelector} from "react-redux";
import {Button, ButtonGroup} from "@mui/material";
import {currentProductFetched} from "../../actions/actions";
import {drinks, pizza, salads, snacks, souses} from "../../interfaces/ProductsInterfaces";

type GreetingProps = {
    isOpen: boolean;
    onClose: () => void;
    label: string;
}

type CurrentProducts = {
    currentProduct: pizza[] | salads[] | drinks[] | snacks[] | souses[]
}

const ModalProduct: FC<GreetingProps> = ({isOpen, onClose, label}) => {
    const {currentProduct} = useSelector((state: CurrentProducts) => state)
    const dispatch = useDispatch()
    const [thumbnailScale, setThumbnailScale] = useState(1)

    let index = 0

    const pizzas = 'Пицца',
        drinkss = 'Напитки'

    const modalWindow = useRef() as React.MutableRefObject<HTMLDivElement>
    const onClickOutside = useOnClickOutside

    switch (thumbnailScale) {
        case (1):
            index = 0
            break;
        case (1.2):
            index = 1
            break;
        case (1.4):
            index = 2
            break;
        default: break
    }

    useEffect(() => {
        return () => {
            dispatch(currentProductFetched({}))
            label = ''
        }
    }, [])

    onClickOutside(modalWindow, () => onClose())

    return (
        <>
            {currentProduct.length ?
                <div>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={isOpen || false}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                        disableAutoFocus={true}
                        style={{zIndex: '100000000'}}
                    >
                        <Fade in={isOpen}>
                            <ModalContainer ref={modalWindow}>
                                <ModalLeft>
                                    <ModalThumbnail src={currentProduct[0].thumbnail} scale={thumbnailScale}/>
                                </ModalLeft>
                                <ModalRight>
                                    <ModalTitle>
                                        {currentProduct[0].title}
                                    </ModalTitle>
                                    <ModalDetails>
                                        {currentProduct[index].dimension ? currentProduct[index].dimension + ' см.' || null : null } {currentProduct[index].weight} гр.
                                    </ModalDetails>
                                    <ModalDescription>
                                        {currentProduct[0].description}
                                    </ModalDescription>

                                    {label === pizzas || label === drinkss ?
                                        <ButtonGroup fullWidth={true} size={'large'} color={'error'} variant="text" aria-label="outlined primary button group">
                                            <Button sx={{color: 'darkorange'}} onClick={() => setThumbnailScale(1)}>Маленькая</Button>
                                            <Button sx={{color: 'darkorange'}} onClick={() => setThumbnailScale(1.2)}>Средняя</Button>
                                            <Button sx={{color: 'darkorange'}} onClick={() => setThumbnailScale(1.4)}>Большая</Button>
                                        </ButtonGroup>
                                    : null}

                                    <ModalBottom>
                                        <ModalButtonBuy>
                                            Купить за {currentProduct[index].price} ₽
                                        </ModalButtonBuy>
                                    </ModalBottom>
                                </ModalRight>
                            </ModalContainer>
                        </Fade>
                    </Modal>
                </div>
            : null
            }

        </>
    );
}

export default ModalProduct
