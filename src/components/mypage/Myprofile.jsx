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

     const username = name ? name : "";
     //뱃지 null일 때 기본 값 이름
     const userbadge = badge ? (badge == null ? badge : "등산 비기너 ,") : "";

     const onLogout = () => {
          sessionStorage.removeItem(
               "Access_Token",
               "Refresh_Token",
               "name",
               "badge"
          );
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
               <div className="profile-badge-style">이미지</div>
               <div className="profile-info-style">
                    <p>{username}</p>
                    <p>지역</p>
                    <div className="profile-edit-style">
                         <button onClick={onModalOpen}>프로필 수정</button>
                         {modalOn && (
                              <Modal
                                   open={modalOn}
                                   onClose={() => {
                                        setModalOn(false);
                                   }}
                              >
                                   <StModalMypage>
                                        <div className="modal-mypage-img">
                                             이미지
                                        </div>
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
                         <button onClick={onLogout}>로그아웃</button>
                    </div>
               </div>
          </STProfile>
     );
};

export default Myprofile;

const STProfile = styled.div`
     width: 95vh;
     height: 20vh;
     display: flex;
     justify-content: center;
     padding: 20px;
     gap: 5%;
     font-size: 22px;
     .profile-badge-style {
          width: 20vh;
          height: 20vh;
          padding: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          background-color: var(--color-midtone);
     }
     .profile-info-style {
          width: 60%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5%;
          p {
               background-color: var(--color-midtone);
               display: flex;
               align-items: center;
               box-sizing: border-box;
               padding: 12px 20px;
               width: 100%;
               height: 5vh;
          }
          .profile-edit-style {
               width: 100%;
               height: 7vh;
               display: flex;
               justify-content: space-between;
               align-items: flex-start;
               button:first-child {
                    margin-top: 10px;
                    font-size: 18px;
               }
          }
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
          width: 30vh;
          height: 30vh;
          background-color: cadetblue;
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
