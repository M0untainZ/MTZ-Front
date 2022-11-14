import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
     __addUsers,
     overlapEmailCheck,
     __nameCheck,
     __emailCheck,
} from "../redux/modules/userSlice";

const SignUp = () => {
     const navigate = useNavigate();
     const dispatch = useDispatch();

     const initialState = {
          email: "",
          nickName: "",
          password: "",
          passwordConfirm: "",
          region: "",
     };
     const [user, setUser] = useState(initialState);
     const { overlapEmail, overlapName } = useSelector((state) => state.user);
     const [emailCheck, setEmailCheck] = useState(false);
     const [pwCheck, setPwCheck] = useState(false);
     const [emailState, setEmailState] = useState(false);

     const regEmail =
          /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;

     const regPw =
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;

     const onChangeHandler = (e) => {
          const { name, value } = e.target;
          setUser({
               ...user,
               [name]: value,
          });
     };

     //이메일 중복검사
     const EmailCk = () => {
          if (emailCheck === true) {
               setEmailState(true);
               dispatch(__emailCheck({ email: user.email }));
          }
     };

     //닉네임 중복검사
     const NameCk = () => {
          dispatch(__nameCheck({ nickName: user.nickName }));
     };

     useEffect(() => {
          if (regEmail.test(user.email)) {
               setEmailCheck(true);
          } else {
               setEmailCheck(false);
          }
          dispatch(overlapEmailCheck());
          // eslint-disable-next-line
     }, [user.email]);

     useEffect(() => {
          if (regPw.test(user.password)) {
               setPwCheck(true);
          } else {
               setPwCheck(false);
          }
          // eslint-disable-next-line
     }, [user.password]);

     const onSubmit = () => {
          dispatch(
               __addUsers({
                    email: user.email,
                    nickName: user.nickName,
                    password: user.password,
                    passwordConfirm: user.passwordConfirm,
                    memberRegion: user.region,
               })
          );
          setUser(initialState);
          alert("회원가입이 완료되었습니다!");
          navigate("/login");
     };

     return (
          <StLoginContainer>
               <div>
                    <div className="logo">회원가입</div>
               </div>
               <StLoginBox>
                    <StInputBox>
                         <div className="emailInputBox">
                              <input
                                   onBlur={EmailCk}
                                   onChange={onChangeHandler}
                                   name="email"
                                   value={user.email}
                                   autoComplete="off"
                                   className="emailInput"
                                   type="text"
                                   placeholder="이메일"
                              />
                              <div>
                                   {user.email.trim() ===
                                   "" ? null : emailState ? (
                                        overlapEmail ? (
                                             <div style={{ color: "blue" }}>
                                                  사용 가능한 이메일입니다.
                                             </div>
                                        ) : (
                                             <StErrorMassage>
                                                  <StDangerImg src="https://member.op.gg/icon_alert.953d9b77.svg" />
                                                  이미 사용중인 이메일 입니다.
                                             </StErrorMassage>
                                        )
                                   ) : emailCheck ? (
                                        <div style={{ color: "blue" }}>
                                             형식에 맞는 이메일 입니다.
                                        </div>
                                   ) : (
                                        <StErrorMassage>
                                             <StDangerImg src="https://member.op.gg/icon_alert.953d9b77.svg" />
                                             이메일이 형식에 맞지 않습니다.
                                        </StErrorMassage>
                                   )}
                              </div>
                         </div>
                         <div className="nickNameInputBox">
                              <input
                                   onBlur={NameCk}
                                   onChange={onChangeHandler}
                                   name="nickName"
                                   value={user.nickName}
                                   className="nickNameInput"
                                   type="text"
                                   placeholder="닉네임"
                              />
                              {user.nickName.trim() ===
                              "" ? null : overlapName ? (
                                   <div style={{ color: "blue" }}>
                                        사용 할 수 있는 닉네임입니다.
                                   </div>
                              ) : (
                                   <StErrorMassage>
                                        <StDangerImg src="https://member.op.gg/icon_alert.953d9b77.svg" />
                                        이미 사용중인 닉네임입니다.
                                   </StErrorMassage>
                              )}
                         </div>
                         <div className="pwInputBox">
                              <input
                                   onChange={onChangeHandler}
                                   name="password"
                                   value={user.password}
                                   className="pwInput"
                                   type="password"
                                   placeholder="비밀번호"
                              />
                              <div>
                                   {user.password.trim() ===
                                   "" ? null : pwCheck ? (
                                        <div style={{ color: "blue" }}>
                                             올바른 비밀번호입니다.
                                        </div>
                                   ) : (
                                        <StErrorMassage>
                                             <StDangerImg src="https://member.op.gg/icon_alert.953d9b77.svg" />
                                             비밀번호가 형식에 맞지 않습니다.
                                        </StErrorMassage>
                                   )}
                              </div>
                         </div>
                         <div className="pwCheckBox">
                              <input
                                   onChange={onChangeHandler}
                                   name="passwordConfirm"
                                   value={user.passwordConfirm}
                                   className="pwCheck"
                                   type="password"
                                   placeholder="비밀번호 확인"
                              />
                              <div>
                                   {user.password.trim() ===
                                   "" ? null : user.password ===
                                     user.passwordConfirm ? (
                                        <div style={{ color: "blue" }}>
                                             비밀번호가 일치합니다.
                                        </div>
                                   ) : (
                                        <StErrorMassage>
                                             <StDangerImg src="https://member.op.gg/icon_alert.953d9b77.svg" />
                                             비밀번호가 일치하지 않습니다.
                                        </StErrorMassage>
                                   )}
                              </div>
                         </div>
                         <StSelectBox>
                              <div className="selectName">
                                   <span>지역선택 :</span>
                              </div>
                              <div className="selectBox">
                                   <select
                                        onChange={onChangeHandler}
                                        name="region"
                                        value={user.region}
                                   >
                                        <option>경기도</option>
                                        <option>강원도</option>
                                        <option>전라도</option>
                                        <option>서울</option>
                                        <option>경상도</option>
                                   </select>
                              </div>
                         </StSelectBox>
                    </StInputBox>

                    <StKakaOButton>
                         {emailCheck &&
                         overlapEmail &&
                         overlapName &&
                         pwCheck ? (
                              <button className="kakaO" onClick={onSubmit}>
                                   가입하기
                              </button>
                         ) : (
                              <button className="kakaO" disabled="disabled">
                                   가입하기
                              </button>
                         )}
                    </StKakaOButton>
               </StLoginBox>
          </StLoginContainer>
     );
};

export default SignUp;

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
     .nickNameInputBox {
          width: 100%;
          height: 40%;
          .nickNameInput {
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
     .pwCheckBox {
          width: 100%;
          height: 40%;
          .pwCheck {
               margin-top: 1%;
               width: 50%;
               height: 60%;
               font-size: xx-large;
          }
     }
`;

const StKakaOButton = styled.div`
     width: 50%;
     margin: auto;
     margin-top: 20%;
     height: 7%;
     .kakaO {
          width: 100%;
          height: 130%;
          font-size: xx-large;
     }
`;

const StSelectBox = styled.div`
     width: 50%;
     height: 20%;
     margin: auto;
     margin-top: 1%;
     display: flex;
     justify-content: space-between;
     .selectName {
          width: 30%;
          span {
               font-size: xx-large;
          }
     }
     .selectBox {
          width: 65%;
          select {
               font-size: xx-large;
               width: 100%;
          }
     }
`;

const StErrorMassage = styled.div`
     color: red;
     margin-top: 5px;
`;
const StDangerImg = styled.img`
     width: 14px;
     margin-right: 5px;
`;
