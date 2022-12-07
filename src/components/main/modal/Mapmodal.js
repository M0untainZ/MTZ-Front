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
  width: 524px;
  height: 750px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  button {
    border: none;
    background-color: #fff;
    cursor: pointer;
    width: 24px;
    height: 24px;
  }
`;

const StModalHeader = styled.div`
  border-bottom: 1px solid #ccc;
  margin-top: 2px;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 32%;
  padding: 0 15px;
  button {
    border: none;
    background-color: #fff;
    cursor: pointer;
  }
  span {
    font-size: 22px;
    font-weight: 600;
  }
`;

const StContent = styled.div`
  width: 100%;
  height: 100%;
`;
