import React, { useRef } from "react";
import styled from "styled-components";
import useSideClick from "../../../hooks/useSideClick";
import ImgPortal from "./imgPortal";
const ImgModal = ({ onClose, children }) => {
  const modalRef = useRef(null);
  const onCloseHandler = () => {
    onClose?.();
  };

  useSideClick(modalRef, onCloseHandler);
  return (
    <ImgPortal>
      <StOverlay>
        <StModalWrap ref={modalRef}>
          <button onClick={onCloseHandler}>
            <img alt="" src="/icons/icon_cancel_24.png" />
          </button>
          <StContent>{children}</StContent>
        </StModalWrap>
      </StOverlay>
    </ImgPortal>
  );
};

export default ImgModal;

const StOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0);
  z-index: 100;
`;

const StModalWrap = styled.div`
  width: 100%;
  height: 62vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 38.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px;
  button {
    padding: 10px;
    padding-left: 20px;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
  }
  img {
    width: 30px;
    height: 30px;
  }
`;

const StContent = styled.div`
  width: 100%;
  height: 100%;
`;
