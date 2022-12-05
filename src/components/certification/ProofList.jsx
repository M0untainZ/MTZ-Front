import React from "react";
import styled from "styled-components";
import FilterList from "./FilterList";
import Proof from "./Proof";

const ProofList = () => {
     return (
          <StProof>
               <FilterList />
               <Proof />
          </StProof>
     );
};

export default ProofList;

const StProof = styled.div`
     width: 1400px;
     height: 100%;
     display: flex;
     justify-content: space-around;
     position: relative;
     margin-top: 20px;
`;
