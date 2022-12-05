import styled from "styled-components";
import FilterMt from "./FilterMt";
import MtList from "./MtList";

import { HiChevronUp } from "react-icons/hi";

const DetailList = () => {
     //무한 스크롤 상단으로 이동
     const onTopHandler = () => {
          window.scrollTo({
               top: 0,
          });
     };

     return (
          <StDetailList>
               <FilterMt />
               <MtList />
               <StBtn className="gotoup-btn" onClick={onTopHandler}>
                    <HiChevronUp />
               </StBtn>
          </StDetailList>
     );
};

export default DetailList;

const StDetailList = styled.div`
     display: flex;
     justify-content: space-between;
     width: 1400px;
     height: 100%;
`;
const StBtn = styled.button`
     position: fixed;
     width: 56px;
     height: 56px;
     bottom: 5%;
     right: 100px;
     font-size: 24px;
     font-weight: 600;
     border: none;
     border-radius: 50%;
     background-color: white;
     z-index: 100;
`;
