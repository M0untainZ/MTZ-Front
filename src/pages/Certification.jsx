import React from "react";
import styled from "styled-components";

const Certification = () => {
     return (
          <StContainer>
               <StProofContainer>
                    <StProofImg>
                         <img src="" alt="" />
                    </StProofImg>
               </StProofContainer>
               <StProofContainer>
                    <StProofImg>
                         <img src="" alt="" />
                    </StProofImg>
               </StProofContainer>
               <StProofContainer>
                    <StProofImg>
                         <img src="" alt="" />
                    </StProofImg>
               </StProofContainer>
               <StProofContainer>
                    <StProofImg>
                         <img src="" alt="" />
                    </StProofImg>
               </StProofContainer>
          </StContainer>
     );
};

export default Certification;

const StContainer = styled.div`
     width: 100%;
     height: 100%;
     display: flex;
     gap: 55px;
`;

const StProofContainer = styled.div`
     width: 15vw;
     height: 35vh;
     border: 1px solid black;
     padding: 10px;
`;

const StProofImg = styled.div`
     width: 100%;
     height: 90%;
     border: 1px solid red;
     img {
          width: 100%;
          height: 100%;
     }
`;
