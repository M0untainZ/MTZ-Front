import React, { useRef } from "react";
import styled from "styled-components";
import useSideClick from "../../../hooks/useSideClick";
import Mapportal from "./Mapportal";

const Modal = ({ onClose, children }) => {
     const modalRef = useRef(null);
     const onCloseHandler = () => {
          onClose?.();
     };

     useSideClick(modalRef, onCloseHandler);
     return (
          <Mapportal>
               <StOverlay>
                    <StModalWrap ref={modalRef}>
                         <StModalHeader>
                              <button onClick={onCloseHandler}>
                                   <img alt="" src="/icons/icon_cancel.png" />
                              </button>
                              <span>지도보기</span>
                         </StModalHeader>
                         <hr></hr>
                         <StContent>{children}</StContent>
                    </StModalWrap>
               </StOverlay>
          </Mapportal>
     );
};

export default Modal;

const StOverlay = styled.div`
     position: fixed;
     width: 100%;
     height: 100%;
     top: 0;
     bottom: 0;
     left: 0;
     right: 0;
     background-color: rgba(0, 0, 0, 0.3);
     z-index: 100;
`;

const StModalWrap = styled.div`
     width: 30%;
     height: 75%;
     border-radius: 15px;
     background-color: #fff;
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     button {
          border: none;
          background-color: #fff;
          cursor: pointer;
          width: 24px;
          height: 24px;
     }
     `;

const StModalHeader = styled.div`
     width: 100%;
     display: flex;
     align-items: center;
     margin: 15px;
     gap: 150px;
`;

const StContent = styled.div`
     width: 100%;
     height: 100%;
`;
