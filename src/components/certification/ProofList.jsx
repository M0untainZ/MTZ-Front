import React from "react";
import styled from "styled-components";
import Proof from "./Proof";
import FilterList from "./FilterList";
import { BiArrowToTop } from "react-icons/bi";

const ProofList = () => {
    const onTopHandler = () => {
        window.scrollTo({
             top: 0
        });
    };

    return (
        <StProof>
            <FilterList />
            <Proof />
            <StTopBtn className="go-top" onClick={onTopHandler}>
                <BiArrowToTop />
            </StTopBtn>
        </StProof>
    );
}


export default ProofList;

const StProof = styled.div`
    width: 1400px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-left: 20px;
`;

const StTopBtn = styled.button`
    position: fixed;
    width: 56px;
    height: 56px;
    bottom: 5%;
    right: 100px;
    font-size: 24px;
    font-weight: 600;
    border: none;
    border-radius: 50%;
    background-color: white;
    z-index: 100;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 5px black;
    }
`;