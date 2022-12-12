import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useSideClick from "../../../hooks/useSideClick";
import LikePortal from "./likePortal";
const LikeModal = ({ onClose, children }) => {
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const onCloseHandler = () => {
    onClose?.();
  };
  const onClickHandler = () => {
    navigate("/mypage");
  };
  const { badge } = useSelector((state) => state.twoSlice);

  useSideClick(modalRef, onCloseHandler);
  return (
    <LikePortal>
      <StOverlay>
        <StModalWrap ref={modalRef}>
          <StBadge>
            <div>새로운 뱃지 달성</div>
          </StBadge>
          <StBadgeLogo>
            <div className="imgBox">
              <img alt="" src={`${badge.img}`}></img>
            </div>
            <div className="BadgeName">{badge.badgeName}</div>
            <div className="BadgeTime">{badge.content}</div>
          </StBadgeLogo>
          <StButton>
            <button className="myPage" onClick={onClickHandler}>
              확인하러 가기
            </button>
            <button className="close" onClick={onCloseHandler}>
              닫기
            </button>
          </StButton>
          <StContent>{children}</StContent>
        </StModalWrap>
      </StOverlay>
    </LikePortal>
  );
};

export default LikeModal;

const StOverlay = styled.div`
  position: fixed;
  width: 45%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  margin-top: 5%;
  background-color: rgba(0, 0, 0, 0);
  z-index: 100;
`;

const StModalWrap = styled.div`
  width: 60%;
  height: 55vh;
  background-color: white;
  border: 1px solid #737373;
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%);

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

const StBadge = styled.div`
  border-bottom: 1px solid #cccccc;
  width: 100%;
  height: 13%;
  display: flex;
  div {
    margin: auto;
    font-size: x-large;
  }
`;

const StBadgeLogo = styled.div`
  .imgBox {
    margin-top: 8%;
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;

    img {
      margin-top: 25px;
      width: 150px;
      height: 150px;
    }
  }
  .BadgeName {
    height: 40px;
    font-size: x-large;
    text-align: center;
  }
  .BadgeTime {
    margin: auto;
    width: 70%;
    text-align: center;
    color: #737373;
  }
`;

const StButton = styled.div`
  height: 40px;
  width: 85%;
  margin: auto;
  margin-top: 10%;
  display: flex;
  justify-content: space-between;
  .myPage {
    border: 1px solid #185b6e;
    width: 49%;
    font-size: 15px;
    color: #185b6e;
    font-weight: 700;
  }
  .close {
    border: 1px solid #777777;
    width: 49%;
    font-size: 15px;
    color: #777777;
    font-weight: 700;
  }
`;
