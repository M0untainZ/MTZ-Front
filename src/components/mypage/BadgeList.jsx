import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getMyinfo } from "../../redux/modules/mypageSlice";
import Badges from "./Badges";

const BadgeList = () => {
  const dispatch = useDispatch();

  const { badgeModal, setbadgeModal } = useState([]);

  const userinfo = useSelector((state) => state.mypage.mypage);

  //미상의 뱃지 리스트
  function repeat(badgeModal) {
    let arr = [];
    for (let i = 0; i < 12 - userinfo.data?.badgeList?.length; i++) {
      arr.push(
        <div className="badge-element-style" key={i}>
          <img
            className="badge-element-img-style"
            src="/icons/badge/lockBadge.png"
            alt="badges"
          />
          <div className="badges-info-style">
            <p className="badges-name">🔐 미상의 뱃지</p>
            <p className="badges-info-day">
              아직 알려지지 않은 뱃지입니다.
              <br />
              MTZ를 더 탐색해보면 열 수 있어요!
            </p>
          </div>
        </div>
      );
    }
    return arr;
  }

  //뱃지리스트 불러오기
  useEffect(() => {
    dispatch(__getMyinfo());
  }, [dispatch]);

  return (
    <STBadgeContainer>
      <p className="badges-title-style">🎖 활동 뱃지</p>
      <div className="badges-list-style">
        {userinfo.data?.badgeList?.map((badges, idx) => {
          return <Badges badges={badges} key={idx} />;
        })}
        {repeat(badgeModal)}
      </div>
    </STBadgeContainer>
  );
};

export default BadgeList;

const STBadgeContainer = styled.div`
  box-sizing: border-box;
  width: 1046px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5%;
  .badges-title-style {
    font-size: 24px;
    font-weight: 500;
    padding: 10px 0;
  }
  .badges-list-style {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1vh;

    .badge-element-style {
      width: 511px;
      height: 180px;
      background-color: white;
      padding: 10px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      box-sizing: border-box;
      .badge-element-img-style {
        width: 120px;
        height: 120px;
        box-sizing: border-box;
      }
      .badges-info-style {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
        font-size: 15px;
        width: 290px;
        height: 120px;
        .badges-name {
          font-size: 18px;
        }
        .badges-info-day {
          color: var(--color-border);
          :nth-child(2) {
            color: #000;
          }
        }
      }
    }
  }
`;
