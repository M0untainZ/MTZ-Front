import React from "react";
import styled from "styled-components";
import ProofList from "../components/certification/ProofList";

const Certification = () => {
     const token = sessionStorage.getItem("Access_Token");

     return (
          <>
          {(token !== null) ?
               <StCertification>
                    <ProofList />
               </StCertification> :
               <StNotCertification>
                    <div>인증사진은 회원만 이용할 수 있습니다.</div>
               </StNotCertification>
          }
          </>
     );
};

export default Certification;

const StCertification = styled.div`
     max-width: 100%;
     height: 100%;
     display: flex;
     justify-content: center;
     margin-top: 30px;
     position: relative;
     margin-top: 9vh;
`;

const StNotCertification = styled.div`
     max-width: 100%;
     height: 90vh;
     display: flex;
     justify-content: center;
     align-items: center;
     margin-top: 30px;
     position: relative;
`;
