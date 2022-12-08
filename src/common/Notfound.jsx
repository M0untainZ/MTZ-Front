import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <StDiv>
      <div>
        <p>해당 페이지를 찾을 수 없습니다.</p>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          홈으로 돌아가기
        </button>
      </div>
    </StDiv>
  );
};

export default Notfound;

const StDiv = styled.div`
  width: 100%;
  height: 90vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  button {
    margin-top: 10px;
    font-size: 15px;
    padding: 10px 20px;
    border: none;
    color: #fff;
    background-color: var(--color-button);
  }
`;
