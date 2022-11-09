import React, { useState } from "react";
import styled from "styled-components";

const RecommendCourse = () => {
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
                    <StRecommend>
                         <div>
                              <span>
                                   # 초심자도 무리없는 낮은 산행 코스 모음
                              </span>
                              <img src="/icons/img.jpg" />
                         </div>
                         <div>
                              <span>
                                   # 2022년 마지막 단풍놀이, 이곳에서 즐겨요!
                              </span>
                              <img src="/icons/picture.jpg" />
                         </div>
                    </StRecommend>
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
          margin: 10px 0px;
          position: relative;
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
