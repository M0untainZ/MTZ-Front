import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
     __postSearchMountains,
     isSeasonFalse,
     isRegionFalse,
     isLevelFalse,
     isTimeFalse,
} from "../../redux/modules/mountainsSlice";
import { HiOutlineXMark } from "react-icons/hi2";

const FilterResult = () => {
     const dispatch = useDispatch();

     //필터 팁 관련 전역 관리
     const filters = useSelector((state) => state.mountains.filter);
     const isfilters = useSelector((state) => state.mountains);

     console.log(filters);

     //필터 팁 x 눌렀을 때 팁 사라짐 효과
     const onSeasonDelBtn = () => {
          dispatch(isSeasonFalse());
     };
     const onRegionDelBtn = () => {
          dispatch(isRegionFalse());
     };
     const onLevelDelBtn = () => {
          dispatch(isLevelFalse());
     };
     const onTimeDelBtn = () => {
          dispatch(isTimeFalse());
     };

     return (
          <StFilterResult>
               <div>
                    {isfilters.isregion ? (
                         <div>
                              <button value="region" onClick={onRegionDelBtn}>
                                   <HiOutlineXMark />
                              </button>
                              {filters.region}
                         </div>
                    ) : null}
               </div>
               <div>
                    {isfilters.isseason ? (
                         <div>
                              <button onClick={onSeasonDelBtn}>
                                   <HiOutlineXMark />
                              </button>
                              {filters.season}
                         </div>
                    ) : null}
               </div>
               <div>
                    {isfilters.istime ? (
                         <div>
                              <button onClick={onLevelDelBtn}>
                                   <HiOutlineXMark />
                              </button>
                              {filters.time}시간
                         </div>
                    ) : null}
               </div>
               <div>
                    {isfilters.islevel ? (
                         <div>
                              <button onClick={onTimeDelBtn}>
                                   <HiOutlineXMark />
                              </button>
                              {filters.level}
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
     margin-top: 10px;
     div {
          width: 100%;
          height: 100%;
          width: fit-content;
          div {
               width: 100%;
               height: 100%;
               display: flex;
               align-items: center;
               justify-content: center;
               gap: 5px;
               color: var(--color-border);
               border: 1px solid var(--color-border);
               border-radius: 15px;
               padding: 0 10px 0 5px;
               button {
                    width: 14px;
                    height: 14px;
                    background-color: transparent;
                    border: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0;
                    font-size: 20px;
               }
          }
     }
`;
