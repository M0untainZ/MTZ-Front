import React, { useRef } from "react";
import styled from "styled-components";
import useSideClick from "../../../hooks/useSideClick";
import NoticePortal from "./NoticePortal";

const NoticeModal = ({ onClose, children }) => {
  const modalRef = useRef(null);
  const onCloseHandler = () => {
    onClose?.();
  };

  useSideClick(modalRef, onCloseHandler);
  return (
    <NoticePortal>
      <StOverlay>
        <StModalWrap ref={modalRef}>
          <StModalHeader>
            <button onClick={onCloseHandler}>
              <img alt="" src="/icons/icon_cancel.png" />
            </button>
            <span>공지사항</span>
          </StModalHeader>
          <StContent>
            <div>
              안녕하세요. ‘MTZ’ 관리자 입니다. <br></br>
              향후 일정 및 이용에 대해 공지해 드립니다.<br></br>
              <br></br>
              저희 ‘MTZ’는 <span className="font">12월 23일</span>까지 오픈되어
              있을 예정이며 <br></br>
              <br></br>
              12/14(수) 자정까지 <span className="font">인증하기 서비스</span>를
              통해<br></br>
              <span className="font">랭킹 TOP 3</span>에 드신 분들께 한하여
              선물을 드리고자 합니다.<br></br>
              <br></br>
              🥇 TOP1 : 치킨 <br></br>
              🥈 TOP2 : 타워박스 <br></br>
              🥉 TOP3 : 스타벅스 아메리카노 <br></br> <br></br>
              추가로 아래 링크를 통해 설문에 참여해주신 <br></br>
              ‘MTZ’ 회원님들에게 소량의 선물이 지급되오니 <br></br>
              많은 참여 부탁드립니다.
              <br></br> <br></br>
              설문참여 →
              <span>
                <a href="https://forms.gle/aYYQqfaJzyB9tFba7">
                  https://forms.gle/aYYQqfaJzyB9tFba7
                </a>
              </span>
              <br></br>
              오늘도 즐겁고 안전한 등산이 되기를 바랍니다. <br></br> <br></br>{" "}
              감사합니다!
            </div>
            <button onClick={onCloseHandler}>확인했습니다!</button>
          </StContent>
        </StModalWrap>
      </StOverlay>
    </NoticePortal>
  );
};

export default NoticeModal;

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
  width: 500px;
  height: 700px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border: 2px solid #959595;
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
  width: 90%;
  height: 80%;
  margin: auto;
  margin-top: 40px;
  .font {
    font-weight: bolder;
  }
  button {
    border: 1px solid #959595;
    width: 100%;
    height: 6%;
    margin-top: 30px;
    font-weight: bold;
  }
`;
