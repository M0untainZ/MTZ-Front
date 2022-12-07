import styled from "styled-components";
import BadgeList from "../components/mypage/BadgeList";
import Myprofile from "../components/mypage/Myprofile";

const MyPage = () => {
  return (
    <StMypage>
      <Myprofile />
      <BadgeList />
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
