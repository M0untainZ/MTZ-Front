import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { logoutState } from "../../redux/modules/userSlice";
import Modal from "../../common/modal/Modal";
import { useNavigate } from "react-router-dom";

const Myprofile = () => {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const name = sessionStorage.getItem("name");
     const badge = sessionStorage.getItem("badge");
     const region = sessionStorage.getItem("region");

     const userbadge = badge ? (badge == null ? badge : "등산 비기너 ,") : "";

     const onLogout = () => {
          sessionStorage.clear();
          dispatch(logoutState());
          alert("로그아웃되셨습니다.");
          navigate("/");
     };

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
                    <p>{region}</p>
                    <p>{name}</p>
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
                         <StModalMypage>
                              <div className="modal-mypage-img">이미지</div>
                              <input type="file" />
                              <input type="text" />
                              <div className="modal-mypage-box">
                                   <button className="modal-mypage-btn">
                                        입력
                                   </button>
                              </div>
                         </StModalMypage>
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

const StModalMypage = styled.div`
     width: 100%;
     height: 90%;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     gap: 20px;
     background-color: wheat;
     padding: 10px;
     box-sizing: border-box;
     .modal-mypage-img {
          width: 220px;
          height: 220px;
          position: relative;
     }
     .modal-mypage-box {
          display: flex;
          width: 100%;
          height: fit-content;
          justify-content: flex-end;
          .modal-mypage-btn {
               width: 15%;
               height: fit-content;
          }
     }
`;
