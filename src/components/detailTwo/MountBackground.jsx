import MountMap from "./MountMap";
import MountModal from "./MountModal";
import MountPhoto from "./MountPhoto";
import styled from "styled-components";

const MountBackground = () => {
  return (
    <>
      <StContainer>
        <div>
          <div className="titleBox">
            <div className="mountainName">
              수락산
              <img alt="" src="/icons/icon_heart.png" />
            </div>
            <p className="information">
              상급 등산코스∙정상까지 평균 22시간 22분 소요
            </p>
            <p className="information">여름 산행에 추천합니다</p>
          </div>

          <div>
            <MountMap />
          </div>
          <div>
            <MountModal />
          </div>
        </div>
      </StContainer>
      <MountPhoto />
    </>
  );
};

export default MountBackground;

const StContainer = styled.div`
  background-image: url("/icons/detailTwo.png");
  background-size: 1920px;
  height: 65vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  img {
    width: 32px;
    height: 32px;
  }
  .titleBox {
    background-color: rgba(255, 255, 255, 0.6);
    margin-right: 27vh;
    width: 35vh;
    height: 20%;
    margin-top: 10vh;
    font-size: smaller;
    .mountainName {
      font-size: large;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      padding: 10px;
    }
    .information {
      padding-left: 10px;
      padding-top: 5px;
      display: flex;
    }
  }
`;
