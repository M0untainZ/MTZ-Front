import React from "react";
import styled from "styled-components";
import BtnUpside from "../components/detailone/BtnUpside";
import FilterMt from "../components/detailone/FilterMt";
import MtList from "../components/detailone/MtList";
import SearchMt from "../components/detailone/SearchMt";

const DetailOne = () => {
     return (
          <STMTListContainer>
               <SearchMt />
               <FilterMt />
               <MtList />
               <BtnUpside />
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
`;

// const STSearchMT = styled.div`
//      padding: 20px 0;
//      width: 70%;
//      height: 5vh;
//      display: flex;
//      justify-content: center;
//      gap: 3%;
//      .search-input-style {
//           width: 70%;
//           padding: 0 10px;
//      }
//      .search-btn-style {
//           padding: 0 15px;
//      }
// `;

// const STFilterMT = styled.div`
//      padding: 20px 0;
//      width: 70%;
//      height: 5vh;
//      display: flex;
//      justify-content: center;
//      gap: 2%;
//      select {
//           width: 20%;
//      }
//      .filter-btn-style {
//           padding: 0 15px;
//      }
// `;

// const STMTList = styled.div`
//      padding: 20px 0;
//      width: 70%;
//      height: 100%;
//      display: flex;
//      flex-direction: column;
//      justify-content: flex-start;
//      gap: 5%;
//      .mountain-element-style {
//           background-color: var(--color-darktone);
//           height: 20vh;
//           margin-bottom: 3%;
//           padding: 20px;
//           box-sizing: border-box;
//           display: flex;
//           flex-direction: column;
//           justify-content: space-between;
//           .mountain-element-info-style {
//                display: flex;
//                justify-content: flex-end;
//                gap: 3%;
//           }
//      }
// `;
