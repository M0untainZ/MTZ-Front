import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Modal from "../../common/modal/Modal";
import { useNavigate } from "react-router-dom";
import ModalMypage from "./ModalMypage";
import { logoutState } from "../../redux/modules/userSlice";
import { __getMyinfo } from "../../redux/modules/mypageSlice";

const Myprofile = () => {
     const dispatch = useDispatch();
     const navigate = useNavigate();

     const userinfo = useSelector((state) => state.mypage.mypage?.data);
     //마이페이지 개인정보 불러오기
     useEffect(() => {
          dispatch(__getMyinfo());
     }, [dispatch]);

     //로그아웃
     const onLogout = () => {
          sessionStorage.clear();
          dispatch(logoutState());
          alert("로그아웃되셨습니다.");
          navigate("/");
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
                    <button
                         className="profile-setting-btn-style"
                         onClick={onModalOpen}
                    >
                         <img src="/icons/profile_setting.png" alt="setting" />
                    </button>
               </div>
               <div className="profile-user-info-style">
                    <p>{userinfo?.region}</p>
                    <p>{userinfo?.nickName}</p>
               </div>
               <button className="profile-logout-btn-style" onClick={onLogout}>
                    로그아웃
               </button>

               {modalOn && (
                    <Modal
                         open={modalOn}
                         onClose={() => {
                              setModalOn(false);
                         }}
                    >
                         <ModalMypage />
                    </Modal>
               )}
          </STProfile>
     );
};

export default Myprofile;

const STProfile = styled.div`
     width: 220px;
     height: 450px;
     border: none;
     font-size: 18px;
     display: flex;
     flex-direction: column;
     align-items: center;
     gap: 2vh;
     padding: 80px 0;
     .profile-badge-style {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          .profile-badge-view-style {
               width: 100%;
               height: fit-content;
          }
          .profile-setting-btn-style {
               position: absolute;
               bottom: 0;
               right: 10%;
               display: flex;
               align-items: center;
               justify-content: center;
               background-color: white;
               width: 46px;
               height: 46px;
               border: none;
               border-radius: 50%;
               cursor: pointer;
               img {
                    width: 26px;
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
