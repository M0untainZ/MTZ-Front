import React from "react";
import styled from "styled-components";
const OAuth = () => {
  const KAKAO_CLIENT_ID = "cc12618ddc81cd5d765c74e98974c11b";
  const KAKAO_REDIRECT_URL = "http://localhost:3000/oauth/callback/kakao";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`;

  return (
    <StButton>
      <a href={KAKAO_AUTH_URL}>
        <div className="signUpBox">
          <button className="signUp">
            <img
              className="signUpButtonImg"
              alt=""
              src="/icons/kakaOLogin.png"
            ></img>
            <div className="signUpButtonDiv">
              <div className="signUpButtonLogo">카카오 로그인</div>
            </div>
          </button>
        </div>
      </a>
    </StButton>
  );
};

export default OAuth;

const StButton = styled.div`
  width: 100%;
  margin-top: -15%;
  .signUpBox {
    width: 92%;
    height: 48px;
    .signUp {
      cursor: pointer;
      background-color: #fee500;
      border: 0px;
      width: 100%;
      height: 100%;
      display: flex;
      .signUpButtonImg {
        margin: auto;
      }
      .signUpButtonDiv {
        color: black;
        height: 100%;
        width: 90%;
        font-weight: bold;
        .signUpButtonLogo {
          margin-top: 5%;
        }
      }
    }
  }
`;
