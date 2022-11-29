import React, { useState } from "react";
import styled from "styled-components";
import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from "react-query";
import { getProof, deleteProof } from "../../shared/api";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useInView } from "react-intersection-observer";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Proof = () => {
    const MySwal = withReactContent(Swal)
    const queryClient = useQueryClient();
    const userNickName = JSON.parse(sessionStorage.getItem("userinfos"));
    const authority = sessionStorage.getItem("authority");
    
    const { data } = useQuery(["proof"], getProof);
    const { mutate:deleteProofs } = useMutation(deleteProof, {
        onSuccess: () => {
            queryClient.invalidateQueries(["proof"]);
        }
    })

    const onDeleteHandler = (id, photo) => {
        MySwal.fire({
            title: "정말 삭제하시겠어요?",
            text: "삭제를 하면 되돌릴 수 없어요!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "네",
            cancelButtonText: '아니오',
            background: "skyblue",
            confirmButtonColor: "yellowgreen",
            cancelButtonColor: "darkblue",
            color: "blue",
            iconColor: "red",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProofs({id, photo})
                toast.success("성공적으로 삭제 되었습니다.", {
                    autoClose: 1500,
                    position: toast.POSITION.TOP_CENTER
                })
            } 
        })
    }
    
    return (
        <StImgContainer>
            {data?.data.slice().reverse().map((el, idx) => {
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
                                <div className="del-btn" onClick={() => {onDeleteHandler(el.certificationId, el.photo)}}>
                                    <img src="/icons/icon_trash-can.png" alt="" />
                                </div>
                                :
                                null
                            }
                            <ToastContainer />
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