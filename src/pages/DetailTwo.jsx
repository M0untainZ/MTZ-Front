import React from "react";
import MountBackground from "../components/detailTwo/MountBackground";
import styled from "styled-components";

const DetailTwo = () => {
     return (
          <StContainer>
               <MountBackground />
          </StContainer>
     );
};

export default DetailTwo;

const StContainer = styled.div`
     text-align: center;
`;
