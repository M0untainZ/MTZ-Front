import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  __postSearchMountains,
  __postFilterMountains,
  resetData,
} from "../../redux/modules/mountainsSlice";
import { useEffect, useState } from "react";

const FilterResult = () => {
  const dispatch = useDispatch();

  //필터 팁 관련 전역 관리
  const filters = useSelector((state) => state.mountains.filter);

  const initialState = {};

  // console.log("이전", isfilters);

  //필터 팁 x 눌렀을 때 팁 사라짐 효과
  const onSeasonDelBtn = (e) => {
    const filt = { ...filters, season: null };
    dispatch(__postFilterMountains(filt));
    //console.log("결과", filt);
  };
  const onRegionDelBtn = () => {
    const filt = { ...filters, region: null };
    dispatch(__postFilterMountains(filt));
    dispatch(resetData());
  };
  const onLevelDelBtn = () => {
    const filt = { ...filters, level: null };
    dispatch(__postFilterMountains(filt));
  };
  const onTimeDelBtn = () => {
    const filt = { ...filters, time: null };
    dispatch(__postFilterMountains(filt));
  };

  return (
    <StFilterResult>
      <div>
        {filters.region ? (
          <div className="filter-chips">
            <button value="region" onClick={onRegionDelBtn}>
              <img src="icons/delete-filter.png" alt="delete-filter" />
            </button>
            <span>{filters.region}</span>
          </div>
        ) : null}
        {filters.season ? (
          <div className="filter-chips">
            <button name="season" onClick={onSeasonDelBtn}>
              <img src="icons/delete-filter.png" alt="delete-filter" />
            </button>
            <span> {filters.season}</span>
          </div>
        ) : null}
        {filters.time ? (
          <div className="filter-chips">
            <button onClick={onTimeDelBtn}>
              <img src="icons/delete-filter.png" alt="delete-filter" />
            </button>
            <span>{filters.time}</span>
          </div>
        ) : null}
        {filters.level ? (
          <div className="filter-chips">
            <button onClick={onLevelDelBtn}>
              <img src="icons/delete-filter.png" alt="delete-filter" />
            </button>
            <span> {filters.level}</span>
          </div>
        ) : null}
      </div>
    </StFilterResult>
  );
};

export default FilterResult;

const StFilterResult = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 15px;
  .filter-chips {
    width: fit-content;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    color: var(--color-border);
    border: 1px solid var(--color-border);
    border-radius: 20px;
    padding: 0.5px 15px;
    margin-right: 10px;
    font-size: 16px;
    button {
      background-color: transparent;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      font-size: 20px;
      cursor: pointer;
      img {
        width: 14px;
        height: 14px;
      }
    }
    span {
      margin-top: 2px;
    }
  }
`;
