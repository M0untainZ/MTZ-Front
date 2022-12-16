import React, { useEffect } from "react";
import styled from "styled-components";
import NoticePortal from "./NoticePortal";

const NoticeModal = ({ onClose }) => {

  const BEFORE_DATE = localStorage.getItem("visite")
  const NOW_DATE = Math.floor(new Date().getDate())

  useEffect(() => {
    if (BEFORE_DATE !== null) {
      if (BEFORE_DATE === NOW_DATE) {
        localStorage.removeItem("visite")
        onClose(true)
      }

      if (BEFORE_DATE !== NOW_DATE) {
        onClose(false)
      }
    }
  }, [BEFORE_DATE])

  const onNotSeeToday = (e) => {
    if (onClose) {
      onClose(e)
      const expires = new Date();
      const expiresDate = expires.getDate() + 1
      localStorage.setItem("visite", expiresDate)
    }
  }

  const onCloseHanlder = (e) => {
    if (onClose) {
      onClose(e)
    }
  }

  return (
    <NoticePortal>
      <StOverlay>
        <StModalWrap>
          <StModalHeader>
            <span>📢 공지사항</span>
          </StModalHeader>
          <StContent>
            <div>
              안녕하세요. "MTZ" 관리자 입니다. <br></br>
              <br></br>
              저희 "MTZ"는 <span className="font">22년 12월 16일</span>부로
              서비스가 종료되었습니다. <br></br>
              <br></br>
              그동안 "MTZ"를 이용해 주신 분들께 감사의 말씀을 드립니다.
              <br></br>
              <br></br>
              혹시나 지금 이 글을 보고 계신 항해 수강생분들
              <br></br>
              모두 파이팅입니다.
              <br></br>
              <br></br>
              항해99 9기 A 반 4조 올림
            </div>
            { onClose && (
              <footer>
                <button onClick={onNotSeeToday}>오늘 하루 보지 않기</button>
                <button onClick={onCloseHanlder}>닫기</button>
              </footer>
            )}
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
  height: 500px;
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
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  text-align: center;
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
  footer {
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 5%;
    button {
      border: 1px solid #959595;
      width: 47%;
      height: 30px;
      font-weight: bold;
      &:hover {
        background-color: lightgray;
      }
    }
  }
`;
