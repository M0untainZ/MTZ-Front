import React from "react";
import styled from "styled-components";

const ProofImage = () => {
    return (
        <>
            <StProofWrap>
                <p>인증사진 📷</p>
                <StImageList>
                    <button className="prev">⬅</button>
                    <button className="next">➡</button>
                    <img src="/icons/picture.jpg" />
                    <img src="/icons/pic.PNG" />
                    <img src="/icons/img.jpg" />
                    <img src="/icons/img1.jpg" />
                    <img src="/icons/mt.jpg" />
                    <img src="/icons/mt2.jpg" />
                    <img src="/icons/mt3.jpg" />
                </StImageList>
            </StProofWrap>
        </>
    );
}

export default ProofImage;

const StProofWrap = styled.div`
    width: 70%;
    height: 20%;
    margin: 20px auto 30px;
    p {
        margin-bottom: 10px;
    }
`;

const StImageList = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 14px;
    align-items: center;
    overflow: hidden;
    position: relative;
    border: 1px solid black;
    img {
        width: 235px;
        height: 260px;
        object-fit: cover;
    }
    button {
        position: absolute;
        font-weight: bolder;
        width: 30px;
        height: 30px;
        border: none;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
    }
    .prev {
        left: 5px;
    }
    .next {
        right: 5px;
    }
`;