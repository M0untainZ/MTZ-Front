import React from "react";
import styled from "styled-components";
import ProofList from "../components/certification/ProofList";

const Certification = () => {
     return (
          <StCertification>
               <ProofList />
          </StCertification>
     );
};

export default Certification;

const StCertification = styled.div`
     display: flex;
     justify-content: center;
`;