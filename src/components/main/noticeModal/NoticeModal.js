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
            <span>π’ κ³΅μ§μ¬ν­</span>
          </StModalHeader>
          <StContent>
            <div>
              μλνμΈμ. "MTZ" κ΄λ¦¬μ μλλ€. <br></br>
              <br></br>
              μ ν¬ "MTZ"λ <span className="font">22λ 12μ 16μΌ</span>λΆλ‘
              μλΉμ€κ° μ’λ£λμμ΅λλ€. <br></br>
              <br></br>
              κ·Έλμ "MTZ"λ₯Ό μ΄μ©ν΄ μ£Όμ  λΆλ€κ» κ°μ¬μ λ§μμ λλ¦½λλ€.
              <br></br>
              <br></br>
              νΉμλ μ§κΈ μ΄ κΈμ λ³΄κ³  κ³μ  ν­ν΄ μκ°μλΆλ€
              <br></br>
              λͺ¨λ νμ΄νμλλ€.
              <br></br>
              <br></br>
              ν­ν΄99 9κΈ° A λ° 4μ‘° μ¬λ¦Ό
            </div>
            { onClose && (
              <footer>
                <button onClick={onNotSeeToday}>μ€λ νλ£¨ λ³΄μ§ μκΈ°</button>
                <button onClick={onCloseHanlder}>λ«κΈ°</button>
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
