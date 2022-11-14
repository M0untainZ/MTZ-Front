import React, { useRef } from "react";
import styled from "styled-components";
import useSideClick from "../../../hooks/useSideClick";
import DetailTwoPortal from "./detailTwoPortal";
const DetailTwoModal = ({ onClose, children }) => {
  const modalRef = useRef(null);
  const onCloseHandler = () => {
    onClose?.();
  };

  useSideClick(modalRef, onCloseHandler);
  return (
    <DetailTwoPortal>
      <StOverlay>
        <StModalWrap ref={modalRef}>
          <button onClick={onCloseHandler}>
            <img alt="" src="/icons/icon_cancel.png" />
          </button>
          <StContent>{children}</StContent>
        </StModalWrap>
      </StOverlay>
    </DetailTwoPortal>
  );
};

export default DetailTwoModal;

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
  width: 375px;
  height: 490px;
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
  }
`;

const StContent = styled.div`
  width: 100%;
  height: 100%;
`;
