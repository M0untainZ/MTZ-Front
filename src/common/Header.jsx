import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HiMenu } from "react-icons/hi";

const Header = () => {
  const navigate = useNavigate();
  //유저 정보가 있으면 header에 개인정보(뱃지,이름) 불러오기
  const userinfos = JSON.parse(sessionStorage.getItem("userinfos"));
  const userinfo = userinfos ? userinfos : "";
  //뱃지 null일 때 기본 값 이름
  const userbadge =
    userinfos?.badgeName == null
      ? "등산 비기너, "
      : `${userinfos?.badgeName}, `;

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
          {/* <img src="" alt="badge" /> */}

          {userinfo ? (
            <div>
              <span>{`${userbadge} ${userinfos?.nickName}`}</span>
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
};

export default Header;

const StHeader = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 9vh;
  background-color: transparent;
  font-size: 1.6vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10%;
  padding: 0 14%;
  z-index: 10;
  position: absolute;
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
