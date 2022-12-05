import React from "react";
import styled from "styled-components";
import DetailList from "../components/detailone/DetailList";

const DetailOne = () => {
     return (
          <StDetailOne>
               <DetailList />
          </StDetailOne>
     );
};

export default DetailOne;

const StDetailOne = styled.div`
     display: flex;
     justify-content: center;
     margin-top: 9vh;
`;
