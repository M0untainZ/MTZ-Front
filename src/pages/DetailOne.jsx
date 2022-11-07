import React from "react";
import styled from "styled-components";

const DetailOne = () => {
     return (
          <STMTListContainer>
               <STSearchMT>
                    <input
                         className="search-input-style"
                         type="text"
                         placeholder="궁금하신 산을 검색해주세요"
                    />
                    <button className="search-btn-style">검색</button>
               </STSearchMT>
               <STFilterMT>
                    <select>
                         <option>지역</option>
                    </select>
                    <select>
                         <option>계절</option>
                    </select>
                    <select>
                         <option>난이도</option>
                    </select>
                    <select>
                         <option>산행시간</option>
                    </select>
                    <button className="filter-btn-style">검색</button>
               </STFilterMT>
               <STMTList>
                    <div className="mountain-element-style">
                         <span className="mountain-element-name-style">
                              이름
                         </span>
                         <div className="mountain-element-info-style">
                              <button className="mountain-element-quiz-btn-style">
                                   퀴즈
                              </button>
                              <span className="mountain-element-like-total-style">
                                   좋아요
                              </span>
                         </div>
                    </div>
                    <div className="mountain-element-style">
                         <span className="mountain-element-name-style">
                              이름
                         </span>
                         <div className="mountain-element-info-style">
                              <button className="mountain-element-quiz-btn-style">
                                   퀴즈
                              </button>
                              <span className="mountain-element-like-total-style">
                                   좋아요
                              </span>
                         </div>
                    </div>
                    <div className="mountain-element-style">
                         <span className="mountain-element-name-style">
                              이름
                         </span>
                         <div className="mountain-element-info-style">
                              <button className="mountain-element-quiz-btn-style">
                                   퀴즈
                              </button>
                              <span className="mountain-element-like-total-style">
                                   좋아요
                              </span>
                         </div>
                    </div>
                    <div className="mountain-element-style">
                         <span className="mountain-element-name-style">
                              이름
                         </span>
                         <div className="mountain-element-info-style">
                              <button className="mountain-element-quiz-btn-style">
                                   퀴즈
                              </button>
                              <span className="mountain-element-like-total-style">
                                   좋아요
                              </span>
                         </div>
                    </div>
               </STMTList>
               <button className="gotoup-btn">상단</button>
          </STMTListContainer>
     );
};

export default DetailOne;

const STMTListContainer = styled.div`
     width: 100%;
     min-height: 90vh;
     height: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: flex-start;
     padding: 20px;
     box-sizing: border-box;
     position: relative;
     .gotoup-btn {
          position: absolute;
          width: 50px;
          height: 20px;
          bottom: 5%;
          right: -8%;
          background-color: red;
     }
`;

const STSearchMT = styled.div`
     padding: 20px 0;
     width: 70%;
     height: 5vh;
     display: flex;
     justify-content: center;
     gap: 3%;
     .search-input-style {
          width: 70%;
          padding: 0 10px;
     }
     .search-btn-style {
          padding: 0 15px;
     }
`;

const STFilterMT = styled.div`
     padding: 20px 0;
     width: 70%;
     height: 5vh;
     display: flex;
     justify-content: center;
     gap: 2%;
     select {
          width: 20%;
     }
     .filter-btn-style {
          padding: 0 15px;
     }
`;

const STMTList = styled.div`
     padding: 20px 0;
     width: 70%;
     height: 100%;
     display: flex;
     flex-direction: column;
     justify-content: flex-start;
     gap: 5%;
     .mountain-element-style {
          background-color: var(--color-darktone);
          height: 20vh;
          margin-bottom: 3%;
          padding: 20px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .mountain-element-info-style {
               display: flex;
               justify-content: flex-end;
               gap: 3%;
          }
     }
`;
