import styled from "styled-components";
import { HiChevronUp } from "react-icons/hi";

const BtnUpside = () => {
     return (
          <StBtn className="gotoup-btn">
               <HiChevronUp />
          </StBtn>
     );
};

export default BtnUpside;

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
