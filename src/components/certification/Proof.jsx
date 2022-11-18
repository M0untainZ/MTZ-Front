import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getProof } from "../../shared/api";

const Proof = () => {
    const {data} = useQuery(["proof"], getProof);
    return (
        <StImgContainer>
            {data?.data.reverse().map((el, idx) =>
                <StProofBox key={idx}>
                    <img src={el.photo} alt="" />
                    <StProofInfo>
                        <div className="profile-image">
                            <img src="/icons/icon_default-badge.png" alt="" />
                        </div>
                        <div className="proof-info">
                            <p>{el.name}</p>
                            <span>{el.nickName}</span>
                        </div>
                        <div className="del-btn">
                            <img src="/icons/icon_trash-can.png" alt="" />
                        </div>
                    </StProofInfo>
                </StProofBox>      
            )}
        </StImgContainer>
    );
}

export default Proof;

const StImgContainer = styled.div`
    width: 1200px;
    height: 100%;
    border: 1px solid red;
    display: flex;
    align-items: center;
    padding:0px 15px;
    gap: 27px;
    flex-wrap: wrap;
    position: relative;
`;
const StProofBox = styled.div`
    width: 350px;
    height: 350px;
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
        width: 100%;
        height: 300px;
    }
`;

const StProofInfo = styled.div`
    width: 100%;
    height: 13%;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    .profile-image {
        width: 36px;
        height: 36px;
        border: 1px solid black;
        border-radius: 50%;
        margin:0px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #91acaa;
        img {
            width: 18px;
            height: 24px;
        }
    }
    .proof-info {
        width: 70%;
        height: 100%;
        p {
            font-size: 13px;
        }
        span {
            font-size: 18px;
        }
    }
    .del-btn {
        margin-left: 15px;
        width: 24px;
        height: 24px;
        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            cursor: pointer;
        }
    }
`;