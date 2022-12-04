import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
     loginState,
     logoutState,
     __loginUser,
} from "../redux/modules/userSlice";
import OAuth from "../components/kakao/OAuth";

const Login = () => {
     const navigate = useNavigate();
     const dispatch = useDispatch();
     const { isLogin } = useSelector((state) => state.user);

     const initialState = {
          email: "",
          password: "",
     };

     const [loginUser, setLoginUser] = useState(initialState);
     const onChangeHandler = (e) => {
          const { name, value } = e.target;
          setLoginUser({
               ...loginUser,
               [name]: value,
          });
     };

     useEffect(() => {
          if (isLogin) {
               navigate("/");
               dispatch(loginState());
          } else {
               navigate("/login");
               dispatch(logoutState());
          }
          // eslint-disable-next-line
     }, [isLogin]);

     const onSubmit = () => {
          dispatch(__loginUser(loginUser));
     };

     const onSearchEnter = (e) => {
          if (e.key === "Enter") {
               onSubmit();
          }
     };

     return (
          <StLoginContainer>
               <div className="imgBox">
                    <img
                         className="loginImg"
                         alt=""
                         src="/icons/loginImg.png"
                    ></img>
               </div>
               <StParentsBox>
                    <div>
                         <div className="helloLogo">안녕하세요,</div>
                         <div className="logo">당신의 셰르파 MTZ입니다.</div>
                    </div>
                    <StLoginBox>
                         <StInputBox>
                              <div className="emailInputBox">
                                   <div> 이메일</div>
                                   <input
                                        onChange={onChangeHandler}
                                        onKeyPress={onSearchEnter}
                                        name="email"
                                        value={loginUser.email}
                                        className="emailInput"
                                        type="text"
                                        placeholder="이메일"
                                   />
                              </div>
                              <div>비밀번호</div>
                              <div className="pwInputBox">
                                   <input
                                        onChange={onChangeHandler}
                                        name="password"
                                        value={loginUser.password}
                                        autoComplete="off"
                                        className="pwInput"
                                        type="password"
                                        placeholder="비밀번호"
                                   />
                              </div>
                         </StInputBox>
                         <StButtonBox>
                              <div className="loginBox">
                                   <button className="login" onClick={onSubmit}>
                                        <img
                                             className="loginButtonImg"
                                             alt=""
                                             src="/icons/loginButton.png"
                                        ></img>
                                        <div className="loginButtonDiv">
                                             <div className="loginButtonLogo">
                                                  이메일로 로그인
                                             </div>
                                        </div>
                                   </button>
                              </div>
                         </StButtonBox>
                         <StButtonBox>
                              <OAuth />
                         </StButtonBox>
                         <div className="sign-up">
                              <span>아직 계정이 없으신가요?</span>
                              <span
                                   onClick={() => navigate("/SignUp")}
                                   className="signUpTag"
                              >
                                   회원가입하기
                              </span>
                         </div>
                    </StLoginBox>
               </StParentsBox>
          </StLoginContainer>
     );
};

export default Login;

const StLoginContainer = styled.div`
     display: flex;
     justify-content: center;
     height: 100%;
     width: 100%;
     margin-top: 8vh;
     .imgBox {
          margin-left: -11%;
          height: 100%;
          width: 30%;
     }
     .loginImg {
          width: 100%;
     }
`;

const StParentsBox = styled.div`
     width: 388px;
     text-align: left;
     margin-left: 10%;

     .helloLogo {
          margin-top: 30%;
          font-weight: normal;
          font-size: large;
     }
     .logo {
          display: flex;
          font-weight: bolder;
          font-size: x-large;
          text-align: center;
     }
`;

const StLoginBox = styled.div`
     height: 70%;
     text-align: center;
     .sign-up {
          margin-top: 15%;
          font-size: small;
          .signUpTag {
               color: #185b6e;
               text-decoration: underline;
               :hover {
                    cursor: pointer;
                    font-weight: bold;
               }
          }
     }
`;

const StInputBox = styled.div`
     text-align: left;
     margin-top: 10%;
     .emailInputBox {
          width: 100%;
          height: 40%;
          .emailInput {
               margin-top: 1%;
               width: 90%;
               height: 40px;
               margin-bottom: 5%;
          }
     }
     .pwInputBox {
          width: 100%;
          height: 40%;
          .pwInput {
               margin-top: 1%;
               width: 90%;
               height: 40px;
          }
     }
`;

const StButtonBox = styled.div`
     width: 100%;
     height: 7%;
     margin-top: 20%;
     .loginBox {
          width: 92%;
          height: 48px;
          .login {
               cursor: pointer;
               background-color: #185b6e;
               border: 0px;
               width: 100%;
               height: 100%;
               display: flex;
               .loginButtonImg {
                    margin: auto;
               }
               .loginButtonDiv {
                    color: white;
                    height: 100%;
                    width: 90%;
                    font-weight: bold;
                    .loginButtonLogo {
                         margin-top: 5%;
                    }
               }
          }
     }
`;
