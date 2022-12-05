import React, { useEffect } from "react";
import { Fragment } from "react";
import styled from "styled-components";
import { useMutation, useQueryClient, useInfiniteQuery } from "react-query";
import { deleteProof } from "../../shared/api";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from "axios";
import { useInView } from "react-intersection-observer"
import Loading from "../../elements/Loading";
import Error from "../../elements/Error";
import { useSelector } from "react-redux";

const URI = {
    BASE: process.env.REACT_APP_AXIOS_API
}

const infiniteProof = async (pageParam) => {
    const res = await axios.get(`${URI.BASE}/api/photos?page=${pageParam}`, {
        headers: {
            Authorization: sessionStorage.getItem("Access_Token"),
        }
    })
    const data = res.data;
    return data;
}

const Proof = () => {
    const buttonState = useSelector((state) => state.proofs.filterButton)
    const filterData = useSelector((state) => state.proofs.filterData)
    const MySwal = withReactContent(Swal)
    const queryClient = useQueryClient();
    const userNickName = JSON.parse(sessionStorage.getItem("userinfos"));
    const authority = sessionStorage.getItem("authority");

    const { mutate:deleteProofs } = useMutation(deleteProof, {
        onSuccess: () => {
            queryClient.invalidateQueries(["proof"]);
        }
    })

    const onDeleteHandler = (id, photo) => {
        MySwal.fire({
            title: "인증사진을 삭제합니다",
            text: "삭제를 누르시면 되돌릴 수 없어요 !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "네",
            cancelButtonText: '아니오',
            background: "#ffffff",
            confirmButtonColor: "#185B6E",
            cancelButtonColor: "#C6C6C6",
            iconColor: "#F24E1E",
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

    const { ref, inView } = useInView();
    const { data, fetchNextPage, isFetchingNextPage, status, error } = useInfiniteQuery(
        ["proof"], ({ pageParam = 0 }) => infiniteProof(pageParam),
        {
            getNextPageParam: (lastPage, allPage) => {
                if (lastPage.data.length === 12) {
                    return allPage.length
                }
            }
        }
    ) 
    useEffect(() => {
        if (inView) fetchNextPage();
    }, [inView])

    if (status === "loading") return <Loading />
    if (status === "error") return <Error message={(error).message} />

    if (buttonState) {
        return (
            <StImgContainer>
                <Fragment>
                        {filterData?.slice().reverse().map((el, idx) => (
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
                        ))}
                    </Fragment>
            </StImgContainer>
            )
        } else {
            return (
                <StImgContainer>
                {data?.pages.map((page, i) => (
                    <Fragment key={i}>
                        {page.data.slice().reverse().map((el, idx) => (
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
                        ))}
                    </Fragment>
                ))}
                {isFetchingNextPage ? <Loading /> : <div ref={ref}></div>}
            </StImgContainer>      
            )
        }
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