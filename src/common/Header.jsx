import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
     const navigate = useNavigate();
     const name = sessionStorage.getItem("name");
     const badge = sessionStorage.getItem("badge");

     const username = name ? name : "";
     //뱃지 null일 때 기본 값 이름
     const userbadge = badge ? (badge == null ? badge : "등산 비기너 ,") : "";

     return (
          <>
               <STHeader>
                    <div>
                         <Link to="/" className="header-title">
                              MTZ
                         </Link>
                         <Link to="/" className="header-main-btn">
                              메인페이지
                         </Link>
                         <Link to="/detail" className="header-detail-btn">
                              상세페이지
                         </Link>
                         <Link
                              to="/certification"
                              className="header-certify-btn"
                         >
                              인증샷페이지
                         </Link>
                    </div>
                    <div>
                         {/* <img src="" alt="badge" /> */}
                         <span>{`${userbadge} ${username}`}</span>
                         {username ? (
                              <button
                                   onClick={() => navigate("/mypage")}
                                   className="header-mypage-btn"
                              >
                                   마이페이지
                              </button>
                         ) : (
                              <button
                                   onClick={() => navigate("/login")}
                                   className="header-login-btn"
                              >
                                   로그인
                              </button>
                         )}
                    </div>
               </STHeader>
          </>
     );
};

export default Header;

const STHeader = styled.div`
     box-sizing: border-box;
     width: 100%;
     height: 6vh;
     background-color: #fff;
     color: #000;
     font-size: 16px;
     display: flex;
     justify-content: space-between;
     align-items: center;
     gap: 10%;
     padding: 0 14%;
     div {
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
               font-size: 1.5vh;
          }
          button {
               border-radius: 22px;
               border: 1px solid #000;
               padding: 5px 10px;
               cursor: pointer;
          }
          .header-title {
               font-size: 4vh;
               font-weight: bold;
               color: #000;
               padding: 0 1vh;
          }
          span {
               font-size: 1.6vh;
          }
     }
`;
