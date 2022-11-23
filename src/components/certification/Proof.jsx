import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { useQuery } from "react-query";
// import { getProof } from "../../shared/api";
import { useDispatch, useSelector } from "react-redux";
import { __getProof, __proofDelete } from "../../redux/modules/proofSlice";
import DeleteModal from "./DeleteModal";

const Proof = () => {
    // const {data} = useQuery(["proof"], getProof);
    const userNickName = JSON.parse(sessionStorage.getItem("userinfos"));
    const authority = sessionStorage.getItem("authority");
    const dispatch = useDispatch();
    const {proofs} = useSelector((state) => state.proofs)
    const [modalOn, setModalOn] = useState(false);
    const onModalOpen = () => {
        setModalOn(true);
    };

    const onDeleteProof = (id, photo) => {
        if (sessionStorage.getItem("Access_Token") !== null ) {
        dispatch(__proofDelete({certificationId:id, photo:photo}))
        window.location.replace("/certification");
        }
    }
    useEffect(() => {
        dispatch(__getProof());
    }, [dispatch]);

    return (
        <StImgContainer>
            {proofs.data?.slice(0).reverse().map((el, idx) => {
                return (
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
                            { (userNickName.nickName === el.nickName) || (authority === "ROLE_ADMIN") ? 
                                <div className="del-btn">
                                    <img src="/icons/icon_trash-can.png" alt="" onClick={onModalOpen}/>
                                    {modalOn && <DeleteModal setModalOn={setModalOn}/>} 
                                </div> 
                                :
                                null
                            } 
                        </StProofInfo>
                    </StProofBox>      
                )})
            }
        </StImgContainer>
    );
}

export default Proof;

const StImgContainer = styled.div`
    width: 1000px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 47px;
    position: relative;
    margin-bottom: 20px;
`;
const StProofBox = styled.div`
    width: 300px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }
`;

const StProofInfo = styled.div`
    width: 100%;
    height: 13%;
    background-color: aliceblue;
    display: flex;
    align-items: center;
    .profile-image {
        width: 36px;
        height: 36px;
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