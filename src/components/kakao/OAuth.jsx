import React from "react";
import styled from "styled-components";
const OAuth = () => {
  const KAKAO_CLIENT_ID = "cc12618ddc81cd5d765c74e98974c11b";
  const KAKAO_REDIRECT_URL = "http://localhost:3000/oauth/callback/kakao";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`;

  return (
    <a href={KAKAO_AUTH_URL}>
      <StButton>
        <img className="kakaOImg" alt="" src="/icons/kakaOTalk.png"></img>
        <div className="buttonLogo">카카오 로그인</div>
      </StButton>
    </a>
  );
};

export default OAuth;

const StButton = styled.div`
  background-color: #fee500;
  margin-top: -58px;
  width: 92%;
  height: 48px;
  display: flex;
  img {
    width: 18px;
    height: 18px;
    margin: auto;
    padding-left: 3%;
  }
  .buttonLogo {
    font-weight: bold;
    color: black;
    height: 100%;
    width: 90%;
    margin-top: 3%;
  }
`;
