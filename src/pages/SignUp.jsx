import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __addUsers } from "../redux/modules/userSlice";

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

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    console.log(user);
  };

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
    // navigate("/login")
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
              onChange={onChangeHandler}
              name="email"
              value={user.email}
              className="emailInput"
              type="text"
              placeholder="이메일"
            />
          </div>
          <div className="nickNameInputBox">
            <input
              onChange={onChangeHandler}
              name="nickName"
              value={user.nickName}
              className="nickNameInput"
              type="text"
              placeholder="닉네임"
            />
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
          <button className="kakaO" onClick={onSubmit}>
            가입하기
          </button>
        </StKakaOButton>
      </StLoginBox>
    </StLoginContainer>
  );
};

export default SignUp;

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
