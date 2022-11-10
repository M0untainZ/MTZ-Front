import React, { useState } from "react";
import styled from "styled-components";
// import Modal from "../common/modal/Modal";
import Badges from "../components/mypage/Badges";
import Myprofile from "../components/mypage/Myprofile";

const MyPage = () => {
     return (
          <STMypageContainer>
               <Myprofile />
               <Badges />
          </STMypageContainer>
     );
};

export default MyPage;

const STMypageContainer = styled.div`
     width: 100%;
     min-height: 90vh;
     height: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: flex-start;
     padding: 20px;
     box-sizing: border-box;
     gap: 4vh;
`;
