import React from "react";
import styled from "styled-components";
import ProofList from "../components/certification/ProofList";
import FilterList from "../components/certification/FilterList";
import { BiArrowToTop } from "react-icons/bi";

const Certification = () => {
     const onTopHandler = () => {
          window.scrollTo({
               top: 0
          });
     };

     const token = sessionStorage.getItem("Access_Token");

     return (
          <>
          {(token !== null) ?
               <StCertification>
                    <button className="go-top" onClick={onTopHandler}>
                         <BiArrowToTop />
                    </button>
                    <FilterList />
                    <ProofList />
               </StCertification> :
               <div>인증사진은 회원만 이용할 수 있습니다.</div>
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
     .go-top {
          width: 40px;
          height: 40px;
          border: 1px solid purple;
          border-radius: 50%;
          position: fixed;
          bottom: 50px;
          right: 100px;
          font-size: 25px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
     }
`;
