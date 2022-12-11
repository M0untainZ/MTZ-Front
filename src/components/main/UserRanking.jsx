import React from "react";
import styled from "styled-components";
import { getMain } from "../../shared/api";
import { useQuery } from "react-query";

const UserRanking = () => {
  const { data } = useQuery(["main"], getMain, {
    refetchOnWindowFocus: false,
    staleTime: 5000,
    cacheTime: Infinity
  });

  return (
    <>
      <StRankingWrap>
        <p>최고의 MTZ 프렌즈를 만나보세요 !</p>
        <StUserRank>
          <StUserInfo>
            <div className="rank-div">
              <span className="rank">1</span>
              <img alt="gold" src="/icons/badge/goldRank.webp" />
            </div>
            {data?.data.topMembers[0] ? (
              <div className="user-info">
                <p className="user-name">{`${data?.data.topMembers[0]}`}</p>
                <p className="user-count">
                  등산 포인트 :{`${data?.data.topMembersCertificationPoint[0]}`}
                  pt
                </p>
              </div>
            ) : (
              <p className="rank-info">
                등산 인증을 하여
                <br /> 1등을 쟁취해봅시다!
              </p>
            )}
          </StUserInfo>
          <StUserInfo>
            <div className="rank-div">
              <span className="rank">2</span>
              <img alt="silver" src="/icons/badge/silverRank.webp" />
            </div>
            {data?.data.topMembers[1] ? (
              <div className="user-info">
                <p className="user-name">{`${data?.data.topMembers[1]}`}</p>
                <p className="user-count">
                  등산 포인트 :{`${data?.data.topMembersCertificationPoint[1]}`}
                  pt
                </p>
              </div>
            ) : (
              <p className="rank-info">
                등산 인증을 하여
                <br /> 2등을 쟁취해봅시다!
              </p>
            )}
          </StUserInfo>
          <StUserInfo>
            <div className="rank-div">
              <span className="rank">3</span>
              <img alt="copper" src="/icons/badge/copperRank.webp" />
            </div>
            {data?.data.topMembers[2] ? (
              <div className="user-info">
                <p className="user-name">{`${data?.data.topMembers[2]}`}</p>
                <p className="user-count">
                  등산 포인트 :{`${data?.data.topMembersCertificationPoint[2]}`}
                  pt
                </p>
              </div>
            ) : (
              <p className="rank-info">
                등산 인증을 하여
                <br /> 3등을 쟁취해봅시다!
              </p>
            )}
          </StUserInfo>
        </StUserRank>
      </StRankingWrap>
    </>
  );
};

export default UserRanking;

const StRankingWrap = styled.div`
  width: 70%;
  height: 18vh;
  margin: 100px auto 50px;
  p {
    font-weight: bold;
  }
`;

const StUserRank = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StUserInfo = styled.div`
  width: 32%;
  height: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 30px;
  border-radius: 20px;
  .rank-div {
    position: relative;
    img {
      width: 110px;
      height: 110px;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 20px;
    }
    .rank {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 8%;
      left: 11%;
      width: 20px;
      height: 20px;
      border: 1px solid black;
      border-radius: 50%;
      color: #fff;
      background-color: var(--color-button);
    }
  }
  .user-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    width: 50%;
    height: 100%;
    padding: 35px 15px 30px 15px;
    box-sizing: border-box;
    .user-name {
      width: 100%;
      font-size: 1.1rem;
      padding: 10px 0;
    }
    .user-count {
      width: 100%;
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--color-border);
    }
  }
  .rank-info {
    width: 50%;
    padding: 35px 15px 30px 15px;
    box-sizing: border-box;
  }
  .badge-cnt {
    font-size: 14px;
    margin-top: 10px;
  }
`;
