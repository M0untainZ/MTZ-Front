import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HiMenu } from "react-icons/hi";
import { useQuery } from "react-query";
import { getMypage } from "../shared/api";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [logininfo, setLogininfo] = useState({});
  const [myPageData, setMyPageData] = useState([]);
  const { data } = useQuery(["mypage"], getMypage, {
    onSuccess: (config) => {
      setMyPageData(config.data);
    },
    enabled: false,
  });
  const userinfos = JSON.parse(sessionStorage.getItem("userinfos"));
  const kakaoinfos = sessionStorage.getItem("nickName");

  //유저 정보가 있으면 header에 개인정보(뱃지,이름) 불러오기
  const userinfo = userinfos ? userinfos : "";

  if (window.location.pathname === "/mypage") {
    //뱃지 null일 때 기본 값 이름
    const userbadge =
      userinfos.badgeName == null
        ? "등산 비기너, "
        : `${myPageData.badgeName}, `;
    const userName = myPageData.nickName;
    return (
      <>
        <StHeader>
          <div>
            <Link to="/" className="header-title">
              <img src="/icons/title_logo.png" alt="logo" />
            </Link>
            <Link to="/" className="header-main-btn">
              메인페이지
            </Link>
            <Link to="/detail" className="header-detail-btn">
              상세페이지
            </Link>
            <Link to="/certification" className="header-certify-btn">
              인증샷페이지
            </Link>
          </div>
          <div className="header-info-my-btn">
            {userinfo ? (
              <div>
                <span>{`${userbadge} ${userName}`}</span>
                <button
                  onClick={() => navigate("/mypage")}
                  className="header-mypage-btn"
                >
                  마이페이지
                </button>
              </div>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="header-login-btn"
              >
                로그인
              </button>
            )}
            <button className="mobile-btn">
              <HiMenu />
            </button>
          </div>
        </StHeader>
      </>
    );
  } else {
    //유저 정보가 있으면 header에 개인정보(뱃지,이름) 불러오기

    const userbadge =
      userinfos?.badgeName == null
        ? "등산 비기너, "
        : `${userinfos?.badgeName}, `;
    const userName = userinfos?.nickName;
    return (
      <>
        <StHeader>
          <div>
            <Link to="/" className="header-title">
              <img src="/icons/title_logo.png" alt="logo" />
            </Link>
            <Link to="/" className="header-main-btn">
              메인페이지
            </Link>
            <Link to="/detail" className="header-detail-btn">
              상세페이지
            </Link>
            <Link to="/certification" className="header-certify-btn">
              인증샷페이지
            </Link>
          </div>
          <div className="header-info-my-btn">
            {userinfo ? (
              <div>
                <span>{`${userbadge} ${userName}`}</span>
                <button
                  onClick={() => navigate("/mypage")}
                  className="header-mypage-btn"
                >
                  마이페이지
                </button>
              </div>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="header-login-btn"
              >
                로그인
              </button>
            )}
            <button className="mobile-btn">
              <HiMenu />
            </button>
          </div>
        </StHeader>
      </>
    );
  }
};

export default Header;

const StHeader = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 8vh;
  background-color: transparent;
  font-size: 1.6vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10%;
  padding: 0 14%;
  margin-bottom: 1vh;
  z-index: 10;
  position: absolute;
  color: #000;
  background-color: rgba(231, 232, 224, 0.3);
  .img-header {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
  div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: fit-content;

    a,
    button {
      border: none;
      background-color: transparent;
      color: #000;
    }
    button {
      border-radius: 22px;
      border: 1px solid #000;
      padding: 5px 10px;
      cursor: pointer;
      height: 35%;
    }
    .header-title {
      font-weight: bold;
      color: #000;
      padding: 0 1vh;
    }
    span {
    }
    .header-mypage-btn,
    .header-login-btn {
      padding: 5px 15px;
      margin-left: 20px;
      border: none;
      color: #fff;
      background-color: var(--color-button);
    }
    .header-login-btn {
      color: white;
      padding: 5px 30px;
      border: none;
      background-color: var(--color-button);
    }
    .mobile-btn {
      display: none;
    }
  }
`;
