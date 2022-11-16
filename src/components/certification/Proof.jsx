import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getProof } from "../../shared/api";

const Proof = () => {
    const {data} = useQuery(["proof"], getProof);
    console.log(data)
    return (
        <StImgContainer>
            {data?.data.map((el) =>
                <div key={el.data}>
                    <p>{el.nickName}</p>
                    <img src={el.photo} alt="" />
                </div>
            )}
        </StImgContainer>
    );
}

export default Proof;

const StImgContainer = styled.div`
    width: 1100px;
    height: 100%;
    border: 1px solid red;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    div {
        width: 250px;
        height: 300px;
        padding: 5px;
        border: 1px solid blue;
    }
    img {
        width: 100%;
        height: 250px;
    }
`;