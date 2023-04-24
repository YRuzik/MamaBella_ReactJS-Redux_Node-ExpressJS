import {ToasterBody} from "./Toaster.style";
import ReactDOM from "react-dom/client";
import {createPortal} from "react-dom";
import {FC, useEffect, useState} from "react";

type GreetingsProps = {
    isOpen: boolean;
}

const Toaster: FC<GreetingsProps> = ({isOpen}) => {

    if(isOpen) {
        return createPortal(
            <ToasterBody>
                <i className="fa fa-check" aria-hidden="true" style={{color: 'limegreen'}}></i> Товар успешно добавлен в корзину
            </ToasterBody>,
            document.querySelector('#portal')!)
    }

    return null;
}

export default Toaster
