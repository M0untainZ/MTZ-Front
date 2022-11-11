import styled from "styled-components";

const SearchMt = () => {
     return (
          <StSearchMT>
               <input
                    className="search-input-style"
                    type="text"
                    placeholder="궁금하신 산을 검색해주세요"
               />
               <button className="search-btn-style">검색</button>
          </StSearchMT>
     );
};

export default SearchMt;

const StSearchMT = styled.div`
     padding: 20px 0;
     width: 100%;
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
