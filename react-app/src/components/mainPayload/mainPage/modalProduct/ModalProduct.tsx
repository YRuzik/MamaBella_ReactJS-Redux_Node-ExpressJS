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
import useOnClickOutside from "../../../../hooks/onClickOutside";
import {useDispatch, useSelector} from "react-redux";
import {Button, ButtonGroup} from "@mui/material";
import {addToCart, currentProductFetched} from "../../../../actions/actions";
import {products} from "../../../../interfaces/ProductsInterfaces";
import productService from "../../../../services/ProductService";
import Toaster from "../toaster/Toaster";

type GreetingProps = {
    isOpen: boolean;
    onClose: () => void;
    label: string;
}

type CurrentProducts = {
    currentProduct: products[]
}

const ModalProduct: FC<GreetingProps> = ({isOpen, onClose, label}) => {
    const {currentProduct} = useSelector((state: CurrentProducts) => state)
    const dispatch = useDispatch()
    const [thumbnailScale, setThumbnailScale] = useState(1)
    const [isToasterOpen, setIsToasterOpen] = useState(false)
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
        if (isToasterOpen) {
            setTimeout(() => setIsToasterOpen(false), 5000)
        }
    }, [isToasterOpen])

    onClickOutside(modalWindow, () => onClose())

    return (
        <>
            <Toaster isOpen={isToasterOpen}/>
            {currentProduct.length > 0 ?
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
                                        {currentProduct.length > 1 && currentProduct[0].size !== 0 ? <div style={{fontSize: '1rem', opacity: '0.75'}}>{currentProduct[index].size} см.</div> : null}
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

                                    <ModalBottom onClick={() => {
                                        setIsToasterOpen(true)
                                        dispatch(addToCart([{...currentProduct[index], quantity: 1}]))
                                    }}>
                                        <ModalButtonBuy>
                                            Купить за {currentProduct.length > 1 ? currentProduct[index].price : currentProduct[0].price} ₽
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
