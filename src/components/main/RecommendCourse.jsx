import React, { useState } from "react";
import styled from "styled-components";
import { getMain } from "../../shared/api";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  regionData,
  seasonData,
  levelData,
  timeData,
} from "../../redux/modules/mountainsSlice";

const RecommendCourse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useQuery(["main"], getMain, {
    refetchOnWindowFocus: false,
    staleTime: 5000,
    cacheTime: Infinity
  });
  const [recommendList, setRecommendList] = useState(false);
  const onListToggle = () => {
    setRecommendList(!recommendList);
  };

  return (
    <>
      <StRecommendWrap>
        <StRecommendHeader>
          <span>MTZ 엄선 등산코드 🏃‍♂️</span>
          {recommendList === false ? (
            <span onClick={onListToggle}>더보기</span>
          ) : (
            <span onClick={onListToggle}>접기</span>
          )}
        </StRecommendHeader>
        {recommendList === false ? (
          <StRecommend>
            <div
              onClick={() => {
                dispatch(levelData("초급"));
                navigate("/detail");
              }}
            >
              <span>{`${data?.data.tagList[3]?.name}`}</span>
              <img src={`${data?.data.tagList[3]?.img}`} alt="" />
            </div>
            <div
              onClick={() => {
                dispatch(regionData("서울"));
                navigate("/detail");
              }}
            >
              <span>{`${data?.data.tagList[5]?.name}`}</span>
              <img src={`${data?.data.tagList[5]?.img}`} alt="" />
            </div>
          </StRecommend>
        ) : (
          <StRecommend>
            <div
              onClick={() => {
                dispatch(levelData("초급"));
                navigate("/detail");
              }}
            >
              <span>{`${data?.data.tagList[3]?.name}`}</span>
              <img src={`${data?.data.tagList[3]?.img}`} alt="" />
            </div>
            <div
              onClick={() => {
                dispatch(regionData("서울"));
                navigate("/detail");
              }}
            >
              <span>{`${data?.data.tagList[5]?.name}`}</span>
              <img src={`${data?.data.tagList[5]?.img}`} alt="" />
            </div>
            <div
              onClick={() => {
                dispatch(timeData("1시간"));
                navigate("/detail");
              }}
            >
              <span>{`${data?.data.tagList[0]?.name}`}</span>
              <img src={`${data?.data.tagList[0]?.img}`} alt="" />
            </div>
            <div
              onClick={() => {
                dispatch(seasonData("겨울"));
                navigate("/detail");
              }}
            >
              <span>{`${data?.data.tagList[1]?.name}`}</span>
              <img src={`${data?.data.tagList[1]?.img}`} alt="" />
            </div>
            <div
              onClick={() => {
                dispatch(timeData("2시간"));
                navigate("/detail");
              }}
            >
              <span>{`${data?.data.tagList[2]?.name}`}</span>
              <img src={`${data?.data.tagList[2]?.img}`} alt="" />
            </div>

            <div
              onClick={() => {
                dispatch(levelData("중급"));
                navigate("/detail");
              }}
            >
              <span>{`${data?.data.tagList[4]?.name}`}</span>
              <img src={`${data?.data.tagList[4]?.img}`} alt="" />
            </div>
          </StRecommend>
        )}
      </StRecommendWrap>
    </>
  );
};

export default RecommendCourse;

const StRecommendWrap = styled.div`
  width: 70%;
  height: 15%;
  margin: 50px auto;
`;

const StRecommendHeader = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    cursor: pointer;
  }
`;

const StRecommend = styled.div`
  width: 100%;
  div {
    width: 100%;
    height: 150px;
    margin: 15px 0px;
    position: relative;
    cursor: pointer;
    transition: all 0.2s linear;
    &:hover {
      transform: translate(0, -5px);
      box-shadow: 0px 0px 10px black;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 40%;
    height: 15px;
    position: absolute;
    bottom: 15px;
    left: 20px;
    border: 1px solid black;
    border-radius: 15px;
    padding: 5px 15px;
    background-color: #fff;
  }
`;
