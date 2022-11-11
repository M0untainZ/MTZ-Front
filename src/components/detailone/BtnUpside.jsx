import styled from "styled-components";

const BtnUpside = () => {
     return <Btn className="gotoup-btn">상단</Btn>;
};

export default BtnUpside;

const Btn = styled.button`
     position: absolute;
     width: 50px;
     height: 20px;
     bottom: 5%;
     right: 100px;
     background-color: red;
`;
