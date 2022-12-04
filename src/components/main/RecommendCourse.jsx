import React, { useState } from "react";
import styled from "styled-components";
import { getMain } from "../../shared/api";
import { useQuery } from "react-query";

const RecommendCourse = () => {
     const {data} = useQuery(["main"], getMain);
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
                    { recommendList === false ? 
                         <StRecommend>
                              {data?.data.tagList.slice(0, 2).map((el, idx) => (
                                        <div key={idx}>
                                             <span>{el.name}</span>
                                             <img src={el.img} alt="" />
                                        </div>
                                   )
                              )}
                         </StRecommend> :
                         <StRecommend>
                         {data?.data.tagList.map((el, idx) => (
                                   <div key={idx}>
                                        <span>{el.name}</span>
                                        <img src={el.img} alt="" />
                                   </div>
                              )
                         )}
                    </StRecommend> 
               }
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
