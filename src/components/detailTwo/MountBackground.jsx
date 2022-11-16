import MountMap from "./MountMap";
import MountModal from "./MountModal";
import MountPhoto from "./MountPhoto";
import styled from "styled-components";
import { __likePost, __getMountain } from "../../redux/modules/twoSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const MountBackground = () => {
  const mountId = useParams();
  const dispatch = useDispatch();
  const id = Number(mountId.id);
  const lovePost = () => {
    dispatch(__likePost(id));
  };
  const mountList = useSelector((state) => state.twoSlice.mountain);
  console.log(mountList);
  useEffect(() => {
    dispatch(__getMountain(id));
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <>
      <StContainer>
        {/* <img className="backgroundImg" alt="" src={`${mountList.img}`} /> */}
        <div>
          <div className="titleBox">
            <div className="mountainName">
              {/* {mountList.data?.name} */}
              <button className="likeBtn" onClick={lovePost}>
                <img alt="" className="heartImg" src="/icons/icon_heart.png" />
              </button>
            </div>
            <p className="information">
              <img alt="" className="routeImg" src="/icons/icon_route.png" />
              {/* {mountList?.level} 등산코스∙정상까지 평균 {mountList?.time} 소요 */}
            </p>
            <p className="information">
              <img alt="" className="starImg" src="/icons/icon_star.png" />
              {/* {mountList?.season} 산행에 추천합니다 */}
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
  .backgroundImg {
  }
  .likeBtn {
    background-color: rgba(0, 0, 0, 0);
    border: 0px;
    cursor: pointer;
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
