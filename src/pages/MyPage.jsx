import styled from "styled-components";
import Badges from "../components/mypage/Badges";
import Myprofile from "../components/mypage/Myprofile";

const MyPage = () => {
     return (
          <StMypage>
               <Myprofile />
               <Badges />
          </StMypage>
     );
};

export default MyPage;

const StMypage = styled.div`
     display: flex;
     justify-content: center;
     width: 100%;
     margin-top: 10vh;
`;
