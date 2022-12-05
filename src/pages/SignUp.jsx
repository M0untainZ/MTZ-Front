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
                    region: user.region,
               })
          );
          setUser(initialState);
          alert("회원가입이 완료되었습니다!");
          navigate("/login");
     };

        <StLoginBox>
          <StInputBox>
            <div className="emailInputBox">
              <div className="inputName">이메일</div>
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
                {user.email.trim() === "" ? null : emailState ? (
                  overlapEmail ? (
                    <div className="checkLogo" style={{ color: "blue" }}>
                      <img
                        className="checkImg"
                        alt=""
                        src="/icons/signUpCheck.png"
                      />
                      사용 가능한 이메일입니다.
                    </div>
                  ) : (
                    <StErrorMassage>
                      <StDangerImg src="https://member.op.gg/icon_alert.953d9b77.svg" />
                      이미 사용중인 이메일 입니다.
                    </StErrorMassage>
                  )
                ) : emailCheck ? (
                  <div className="checkLogo" style={{ color: "blue" }}>
                    <img
                      className="checkImg"
                      alt=""
                      src="/icons/signUpCheck.png"
                    />
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
              <div className="inputName">닉네임</div>
              <input
                onBlur={NameCk}
                onChange={onChangeHandler}
                name="nickName"
                value={user.nickName}
                className="nickNameInput"
                type="text"
                placeholder="닉네임"
              />
              {user.nickName.trim() === "" ? null : overlapName ? (
                <div className="checkLogo" style={{ color: "blue" }}>
                  <img
                    className="checkImg"
                    alt=""
                    src="/icons/signUpCheck.png"
                  />
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
              <div className="inputName">비밀번호</div>
              <input
                onChange={onChangeHandler}
                name="password"
                value={user.password}
                className="pwInput"
                type="password"
                placeholder="비밀번호"
              />
              <div>
                {user.password.trim() === "" ? null : pwCheck ? (
                  <div className="checkLogo" style={{ color: "blue" }}>
                    <img
                      className="checkImg"
                      alt=""
                      src="/icons/signUpCheck.png"
                    />
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
            <div className="inputName">비밀번호 확인</div>
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
                {user.password.trim() === "" ? null : user.password ===
                  user.passwordConfirm ? (
                  <div className="checkLogo" style={{ color: "blue" }}>
                    <img
                      className="checkImg"
                      alt=""
                      src="/icons/signUpCheck.png"
                    />
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
              <div className="selectLogo">지역선택 </div>
              <div className="selectBox">
                <select
                  onChange={onChangeHandler}
                  name="region"
                  value={user.region}
                >
                  <option hidden>--지역을 선택해주세요.--</option>
                  <option>서울</option>
                  <option>경기도</option>
                  <option>경상도</option>
                  <option>충청도</option>
                  <option>전라도</option>
                  <option>강원도</option>
                  <option>제주도</option>
                </select>
              </div>
            </StSelectBox>
          </StInputBox>
        </StLoginBox>
        <StButtonBox>
          {emailCheck && overlapEmail && overlapName && pwCheck ? (
            <div className="signUpBox">
              <button className="signUp" onClick={onSubmit}>
                <img
                  className="signUpButtonImg"
                  alt=""
                  src="/icons/loginButton.png"
                ></img>
                <div className="signUpButtonDiv">
                  <div className="signUpButtonLogo">가입하기</div>
                </div>
              </button>
            </div>
          ) : (
            <div className="signUpBox">
              <button className="signUpDisabled" disabled="disabled">
                <img
                  className="signUpButtonImg"
                  alt=""
                  src="/icons/loginButton.png"
                ></img>
                <div className="signUpButtonDiv">
                  <div className="signUpButtonLogo">가입하기</div>
                </div>
              </button>
            </div>
          )}
        </StButtonBox>
      </StParentsBox>
    </StLoginContainer>
  );
};

export default SignUp;
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
          margin-top: 25%;
          font-weight: bolder;
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
     height: 60%;
     text-align: left;
`;
const StInputBox = styled.div`
     height: 30%;
     margin-top: 3%;
     .emailInputBox {
          width: 100%;
          height: 40%;
          .emailInput {
               margin-top: 1%;
               width: 90%;
               height: 60%;
               font-size: medium;
          }
     }

  .inputName {
    margin-top: 8%;
  }
  .nickNameInputBox {
    width: 100%;
    height: 40%;
    .nickNameInput {
      margin-top: 1%;
      width: 90%;
      height: 60%;
      font-size: medium;
    }
  }
  .pwInputBox {
    width: 100%;
    height: 40%;
    .pwInput {
      margin-top: 1%;
      width: 90%;
      height: 60%;
      font-size: medium;
    }
  }
  .pwCheckBox {
    width: 100%;
    height: 40%;
    .pwCheck {
      margin-top: 1%;
      width: 90%;
      height: 60%;
      font-size: medium;
    }
  }
  .checkLogo {
    width: fit-content;
    background-color: white;
    margin-top: -2px;
    font-size: 12px;
    .checkImg {
      margin-right: 3px;
      margin-top: 3px;
      width: 12px;
    }
  }
`;

const StButtonBox = styled.div`
     width: 100%;
     height: 7%;
     .signUpBox {
          width: 100%;
          height: 48px;
          .signUpDisabled {
               background-color: #dddfe4;
               border: 0px;
               width: 92%;
               height: 100%;
               display: flex;
               .signUpButtonImg {
                    margin: auto;
               }
               .signUpButtonDiv {
                    color: white;
                    height: 100%;
                    width: 90%;
                    font-weight: bold;
                    .signUpButtonLogo {
                         margin-top: 5%;
                    }
               }
          }
          .signUp {
               cursor: pointer;
               background-color: #185b6e;
               border: 0px;
               width: 92%;
               height: 100%;
               display: flex;
               .signUpButtonImg {
                    margin: auto;
               }
               .signUpButtonDiv {
                    color: white;
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

const StSelectBox = styled.div`
  width: 100%;
  height: 30%;
  .selectLogo {
    margin-top: 5px;
  }
  .selectBox {
    width: 92%;
    height: 100%;
    select {
      width: 100%;
      height: 100%;
    }
  }
`;
const StErrorMassage = styled.div`
  width: fit-content;
  background-color: white;
  color: red;
  margin-top: 0px;
  font-size: 12px;
`;
const StDangerImg = styled.img`
  width: 12px;
  margin-right: 3px;
`;
