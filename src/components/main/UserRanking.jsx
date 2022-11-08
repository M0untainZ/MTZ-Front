import React from "react";
import styled from "styled-components";

const UserRanking = () => {
    return (
        <>
            <StRankingWrap>
                <p>최고의 MTZ 프렌즈를 만나보세요 !</p>
                <StUserRank>
                    <StUserInfo>
                        <span className="rank">1</span>
                        <img src="logo192.png" />
                        <p className="user-name">나는야셰르파</p>
                        <span className="badge-cnt">모은 뱃지 갯수 50개</span>
                    </StUserInfo>
                    <StUserInfo>
                        <span className="rank">2</span>
                        <img src="logo192.png" />
                        <p className="user-name">나는야셰르파</p>
                        <span className="badge-cnt">모은 뱃지 갯수 50개</span>
                    </StUserInfo>
                    <StUserInfo>
                        <span className="rank">3</span>
                        <img src="logo192.png" />
                        <p className="user-name">나는야셰르파</p>
                        <span className="badge-cnt">모은 뱃지 갯수 50개</span>
                    </StUserInfo>
                </StUserRank>         
            </StRankingWrap>
        </>
    );
}

export default UserRanking;

const StRankingWrap = styled.div`
  width: 70%;
  height: 25vh;
  margin: 30px auto 30px;
`;

const StUserRank = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StUserInfo = styled.div`
    width: 33%;
    height: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    margin-top: 30px;
    img {
        width: 80px;
        height: 80px;
        border: 1px solid black;
        border-radius: 30px;
        margin-top: 10%;
    }
    .rank {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        margin: 30px 70px 0px 0px;
        width: 20px;
        height: 20px;
        border: 1px solid black;
        border-radius: 50%;
        background-color: #fff;
    }
    .user-name {
        margin-top: 15px;
    }
    .badge-cnt {
        font-size: 14px;
        margin-top: 10px;
    }
`;