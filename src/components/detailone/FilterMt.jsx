import styled from "styled-components";

const FilterMt = () => {
     const region = [
          { id: 1, query: "region", test: "경기" },
          { id: 2, query: "region", test: "서울" },
          { id: 3, query: "region", test: "부산" },
          { id: 4, query: "region", test: "충북" },
          { id: 5, query: "season", test: "봄" },
          { id: 6, query: "season", test: "겨울" },
     ];
     return (
          <StFilterMT>
               <select name="region">
                    <option value="none" hidden>
                         지역
                    </option>
                    <option value="1">서울</option>
                    <option value="2">경기</option>
                    <option value="3">강원</option>
                    <option value="4">충청</option>
                    <option value="5">전라</option>
                    <option value="6">경상</option>
                    <option value="7">제주</option>
               </select>
               <select name="season" hidden>
                    <option value="none">계절</option>
                    <option value="01">봄</option>
                    <option value="02">여름</option>
                    <option value="03">가을</option>
                    <option value="04">겨울</option>
               </select>
               {/* <select name="level">
                    <option>난이도</option>
               </select>
               <select name="time">
                    <option>산행시간</option>
               </select> */}
               <button className="filter-btn-style">검색</button>
          </StFilterMT>
     );
};

export default FilterMt;

const StFilterMT = styled.div`
     padding: 20px 0;
     width: 100%;
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
