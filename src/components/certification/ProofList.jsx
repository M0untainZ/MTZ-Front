import React from "react";
import styled from "styled-components";
import Proof from "./Proof";

const ProofList = () => {
    return (
        <StProof>
            <Proof />
        </StProof>
    );
}

export default ProofList;

const StProof = styled.div`
    width: 1000px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    position: relative;
    margin-left: 20px;
`;