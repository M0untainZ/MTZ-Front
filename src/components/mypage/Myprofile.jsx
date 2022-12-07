import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import MyModal from "./modal/MyModal";
import { useNavigate } from "react-router-dom";
import ModalMypage from "./ModalMypage";
import { logoutState } from "../../redux/modules/userSlice";
import { __getMyinfo } from "../../redux/modules/mypageSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Myprofile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mySwal = withReactContent(Swal);

  const userinfo = useSelector((state) => state.mypage.mypage?.data);
  //마이페이지 개인정보 불러오기
  useEffect(() => {
    dispatch(__getMyinfo());
  }, [dispatch]);

  //로그아웃
  const onLogout = () => {
    mySwal
      .fire({
        title: "로그아웃 하시겠습니까?",
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "네",
        cancelButtonText: "아니오",
        background: "#ffffff",
        confirmButtonColor: "#185B6E",
        cancelButtonColor: "#C6C6C6",
        iconColor: "#699BF7",
      })
      .then((result) => {
        if (result.isConfirmed) {
          sessionStorage.clear();
          dispatch(logoutState());
          navigate("/");
        }
      });
  };

  //모달관리
  const [modalOn, setModalOn] = useState(false);
  const onModalOpen = () => {
    setModalOn(true);
  };

  return (
    <STProfile>
      <div className="profile-badge-style">
        <img
          className="profile-badge-view-style"
          src="/icons/badge/profile.png"
          alt="profile"
        />
        <div className="profile-setting-btn-style">
          <ModalMypage />
        </div>
      </div>
      <div className="profile-user-info-style">
        <p>{userinfo?.region}</p>
        <p>{userinfo?.nickName}</p>
      </div>
      <button className="profile-logout-btn-style" onClick={onLogout}>
        로그아웃
      </button>
      {modalOn && (
        <MyModal
          open={modalOn}
          onClose={() => {
            setModalOn(false);
          }}
        >
          <ModalMypage />
        </MyModal>
      )}
    </STProfile>
  );
};

export default Myprofile;

const STProfile = styled.div`
  width: 330px;
  height: 935px;
  border: none;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vh;
  padding: 40px 0;
  .profile-badge-style {
    position: relative;
    width: 120px;
    display: flex;
    justify-content: center;
    .profile-badge-view-style {
      width: 100%;
      height: fit-content;
    }
    .profile-setting-btn-style {
      position: absolute;
      bottom: -4%;
      right: 0.5%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;
      width: 32px;
      height: 32px;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      img {
        width: 22px;
      }
    }
  }
  .profile-user-info-style {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    p:last-child {
      font-size: 24px;
    }
  }
  .profile-logout-btn-style {
    text-decoration: underline;
    margin-top: 3vh;
    color: #a3a3a3;
    background-color: transparent;
    border: none;
  }
`;
