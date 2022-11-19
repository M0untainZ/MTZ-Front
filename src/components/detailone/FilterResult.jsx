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

const FilterResult = () => {
     const dispatch = useDispatch();

     //필터 팁 관련 전역 관리
     const filters = useSelector((state) => state.mountains.filter);
     const isfilters = useSelector((state) => state.mountains);
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
                              {filters.region}
                              <button value="region" onClick={onRegionDelBtn}>
                                   x
                              </button>
                         </div>
                    ) : null}
               </div>
               <div>
                    {isfilters.isseason ? (
                         <div>
                              {filters.season}
                              <button onClick={onSeasonDelBtn}>x</button>
                         </div>
                    ) : null}
               </div>
               <div>
                    {isfilters.istime ? (
                         <div>
                              {filters.time}
                              <button onClick={onLevelDelBtn}>x</button>
                         </div>
                    ) : null}
               </div>
               <div>
                    {isfilters.islevel ? (
                         <div>
                              {filters.level}
                              <button onClick={onTimeDelBtn}>x</button>
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
     position: relative;
`;
