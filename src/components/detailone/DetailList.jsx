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
     width: 74%;
     height: 100%;
`;
