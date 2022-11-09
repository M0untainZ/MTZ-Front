import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../../common/modal/Modal";

const Myprofile = () => {
     const [modalOn, setModalOn] = useState(false);
     const onModalOpen = () => {
          setModalOn(true);
     };

     // <StWrap>
     //     <button onClick={onModalOpen}>모달열기</button>
     //     {modalOn && (<Modal open={modalOn} onClose={() => {setModalOn(false)}}>

     //     </Modal>)}
     // </StWrap>
     return (
          <STProfile>
               <div className="profile-badge-style">이미지</div>
               <div className="profile-info-style">
                    <p>닉네임</p>
                    <p>지역</p>
                    <div className="profile-edit-style">
                         <button onClick={onModalOpen}>프로필 수정</button>
                         <button>로그아웃</button>
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
