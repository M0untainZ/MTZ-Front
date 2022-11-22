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

     return (
          <StLoginContainer>
               <div>
                    <div className="logo">로그인</div>
               </div>
               <StLoginBox>
                    <StInputBox>
                         <div className="emailInputBox">
                              <input
                                   onChange={onChangeHandler}
                                   name="email"
                                   value={loginUser.email}
                                   className="emailInput"
                                   type="text"
                                   placeholder="이메일"
                              />
                         </div>
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
                                   로그인
                              </button>
                         </div>
                         <div className="signUpBox">
                              <button
                                   className="signUp"
                                   onClick={() => navigate("/SignUp")}
                              >
                                   회원가입
                              </button>
                         </div>
                    </StButtonBox>
                    <StKakaOButton>
                         <OAuth />
                    </StKakaOButton>
               </StLoginBox>
          </StLoginContainer>
     );
};

export default Login;

const StLoginContainer = styled.div`
     height: 100%;
     width: 100%;
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
