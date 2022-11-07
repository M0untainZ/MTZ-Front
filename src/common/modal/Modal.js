import React, {useRef} from "react";
import styled from "styled-components";
import useSideClick from "../../hooks/useSideClick";
import Portal from "./Portal"

const Modal = ({onClose, children}) => {
    const modalRef = useRef(null);
    const onCloseHandler = () => {
        onClose?.();
    }

    useSideClick(modalRef, onCloseHandler);
    return(
        <Portal>
            <StOverlay>
                <StModalWrap ref={modalRef}>
                    <button onClick={onCloseHandler}>❌</button>
                    <StContent>
                        {children}
                    </StContent>
                </StModalWrap>
            </StOverlay>
        </Portal>
    );
}

export default Modal;

const StOverlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 100;
`;

const StModalWrap = styled.div`
    width: 25%;
    height: 50%;
    border-radius: 15px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 15px;
    button {
        border: none;
        background-color: #fff;
        cursor: pointer;
        &:hover {
            box-shadow:0 0 5px black;;
        }
    }
`;

const StContent = styled.div`

`;