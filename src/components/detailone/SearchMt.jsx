import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";

const SearchMt = () => {
     const [searchMt, setSearchMT] = useState("");

     const onChangeSearch = (e) => {
          setSearchMT(e.target.value);
          console.log("검색첸지", searchMt);
     };
     const onSearchEnter = (e) => {
          if (e.key === "Enter") {
               console.log("ok", searchMt);
          }
     };
     return (
          <StSearchMT>
               <div>
                    <input
                         className="search-input-style"
                         name="search"
                         type="text"
                         placeholder="궁금하신 산을 검색해주세요"
                         onChange={onChangeSearch}
                         onKeyPress={onSearchEnter}
                    />
                    <span className="search-btn-style">
                         <BiSearch />
                    </span>
               </div>
          </StSearchMT>
     );
};

export default SearchMt;

const StSearchMT = styled.div`
     padding: 20px 0;
     width: 50%;
     height: 5.4vh;
     display: flex;
     justify-content: flex-start;
     align-items: center;
     position: relative;
     div {
          width: 525px;
          height: 100%;
          position: relative;
          display: flex;
          align-items: center;
          .search-input-style {
               width: 100%;
               height: 100%;
               padding: 0 25px 0 40px;
               box-sizing: border-box;
               border: 1px solid var(--color-border);
               position: relative;
          }
          .search-btn-style {
               height: fit-content;
               padding: 0 10px;
               position: absolute;
               left: 0;
               display: flex;
               align-items: center;
               font-size: 19px;
          }
     }
`;
