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
              <img alt="" className="heartImg" src="/icons/icon_heart.png" />
            </div>
            <p className="information">
              <img alt="" className="routeImg" src="/icons/icon_route.png" />{" "}
              상급 등산코스∙정상까지 평균 22시간 22분 소요
            </p>
            <p className="information">
              <img alt="" className="starImg" src="/icons/icon_star.png" />
              여름 산행에 추천합니다
            </p>
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
    width: 24px;
    height: 24px;
  }
  .titleBox {
    background-color: rgba(255, 255, 255, 0.4);
    margin-right: 27vh;
    width: 40vh;
    height: 20%;
    margin-top: 10vh;
    font-size: smaller;
    .mountainName {
      font-size: large;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      padding: 10px;
      .heartImg {
        width: 22px;
        height: 22px;
      }
    }
    .information {
      font-size: 14px;
      padding-left: 10px;
      padding-top: 5px;
      display: flex;
      align-items: center;
      .routeImg {
        width: 15px;
        height: 15px;
      }
      .starImg {
        width: 15px;
        height: 15px;
      }
    }
  }
`;
