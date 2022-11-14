import React from "react";
import styled from "styled-components";
import BtnUpside from "../components/detailone/BtnUpside";
import DetailList from "../components/detailone/DetailList";

const DetailOne = () => {
     return (
          <StDetailOne>
               <DetailList />
               <BtnUpside />
          </StDetailOne>
     );
};

export default DetailOne;

const StDetailOne = styled.div`
     display: flex;
     justify-content: center;
`;
