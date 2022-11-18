import React from "react";
import styled from "styled-components";
import ProofList from "../components/certification/ProofList";

const Certification = () => {

     const onTopHandler = () => {
          window.scrollTo({
               top: 0,
               behavior: "smooth"
          });
     };

     return (
          <StCertification>
               <button className="go-top" onClick={onTopHandler}></button>
               <ProofList />
          </StCertification>
     );
};

export default Certification;

const StCertification = styled.div`
     display: flex;
     justify-content: center;
     position: relative;
     .go-top {
        width: 30px;
        height: 30px;
        border: 1px solid purple;
        border-radius: 50%;
        position: fixed;
        bottom: 5%;
        right: 6%;
        cursor: pointer;
    }
`;