import styled from "styled-components";
import FilterMt from "./FilterMt";
import MtList from "./MtList";

const DetailList = () => {
     return (
          <StDetailList>
               <FilterMt />
               <MtList />
          </StDetailList>
     );
};

export default DetailList;

const StDetailList = styled.div`
     display: flex;
     justify-content: space-between;
     width: 1400px;
     height: 100%;
     margin-top: 10vh;
`;
