import styled from "styled-components";

const BtnUpside = () => {
     return <StBtn className="gotoup-btn">상단</StBtn>;
};

export default BtnUpside;

const StBtn = styled.button`
     position: fixed;
     width: 50px;
     height: 20px;
     bottom: 5%;
     right: 100px;
     background-color: var(--color-light);
`;
