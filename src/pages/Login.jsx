import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <StLoginContainer>
      <div>
        <div className="logo">로그인</div>
      </div>
      <StLoginBox>
        <StInputBox>
          <div className="emailInputBox">
            <input className="emailInput" type="text" placeholder="이메일" />
          </div>
          <div className="pwInputBox">
            <input className="pwInput" type="password" placeholder="비밀번호" />
          </div>
        </StInputBox>
        <StButtonBox>
          <div className="loginBox">
            <button className="login">로그인</button>
          </div>
          <div className="signUpBox">
            <button className="signUp" onClick={() => navigate("/SignUp")}>
              회원가입
            </button>
          </div>
        </StButtonBox>
        <StKakaOButton>
          <button className="kakaO">카카오로 회원가입하기</button>
        </StKakaOButton>
      </StLoginBox>
    </StLoginContainer>
  );
};

export default Login;

const StLoginContainer = styled.div`
  height: 100%;
  .logo {
    padding-top: 10%;
    font-size: xx-large;
    text-align: center;
  }
`;

const StLoginBox = styled.div`
  height: 70%;
  text-align: center;
`;

const StInputBox = styled.div`
  height: 30%;
  margin-top: 3%;
  .emailInputBox {
    width: 100%;
    height: 40%;
    .emailInput {
      margin-top: 1%;
      width: 50%;
      height: 60%;
      font-size: xx-large;
    }
  }
  .pwInputBox {
    width: 100%;
    height: 40%;
    .pwInput {
      margin-top: 1%;
      width: 50%;
      height: 60%;
      font-size: xx-large;
    }
  }
`;

const StButtonBox = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  height: 7%;
  margin: auto;
  .loginBox {
    width: 46%;
    .login {
      width: 100%;
      height: 100%;
    }
  }
  .signUpBox {
    width: 46%;
    margin-left: 9%;
    background-color: black;
    .signUp {
      width: 100%;
      height: 100%;
    }
  }
`;

const StKakaOButton = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 20px;
  height: 7%;
  .kakaO {
    width: 100%;
    height: 100%;
  }
`;
