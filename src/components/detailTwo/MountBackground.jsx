import MountMap from "./MountMap";
import MountModal from "./MountModal";
import MountPhoto from "./MountPhoto";
import styled from "styled-components";
import LikeModal from "./likeModal/likeModal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  isCorrectBadge,
  __likePost,
  __getMountain,
} from "../../redux/modules/twoSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const MountBackground = () => {
  const mountId = useParams();
  const dispatch = useDispatch();
  const [badgeModal, setBadgeModal] = useState(false);
  const [modal, setModal] = useState(false);
  const id = Number(mountId.id);
  const { isLike, correctBadge } = useSelector((state) => state.twoSlice);
  const token = sessionStorage.getItem("Access_Token");

  //좋아요 버튼
  const lovePost = () => {
    if (token) {
      dispatch(__likePost(id));
    } else if (!token) {
      toast.error("로그인이 필요한 기능입니다", {
        autoClose: 1500,
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  useEffect(() => {
    dispatch(__getMountain(id));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (correctBadge) {
      setModal(!modal);
      setBadgeModal(!badgeModal);
      dispatch(isCorrectBadge());
    }
    // eslint-disable-next-line
  }, [correctBadge]);

  const likeList = useSelector((state) => state.twoSlice);
  const mountList = useSelector((state) => state.twoSlice.mountain.data);
  return (
    <>
      <StContainer>
        <img className="backgroundImg" alt="" src={`${mountList?.img}`} />
        {mountList && (
          <div className="mountainInfo">
            <div className="titleBox">
              <div className="mountainName">
                {mountList.name}
                <button className="likeBtn" onClick={lovePost}>
                  {isLike === false ? (
                    <>{mountList.countLike}</>
                  ) : (
                    <> {likeList.countLike}</>
                  )}
                  {isLike === false ? (
                    <>
                      {mountList.correctLike ? (
                        <img
                          alt=""
                          className="heartImg"
                          src="/icons/icon_redheart.png"
                        />
                      ) : (
                        <img
                          alt=""
                          className="heartImg"
                          src="/icons/icon_heart.png"
                        />
                      )}
                    </>
                  ) : (
                    <>
                      {likeList.correctLike ? (
                        <img
                          alt=""
                          className="heartImg"
                          src="/icons/icon_redheart.png"
                        />
                      ) : (
                        <img
                          alt=""
                          className="heartImg"
                          src="/icons/icon_heart.png"
                        />
                      )}
                    </>
                  )}
                </button>
              </div>
              <p className="information">
                <img alt="" className="routeImg" src="/icons/icon_route.png" />
                {mountList.level} 등산코스∙정상까지 평균 {mountList.time} 소요
              </p>
              <p className="information">
                <img alt="" className="starImg" src="/icons/icon_star.png" />
                {mountList.season} 산행에 추천합니다
              </p>
            </div>
            <div>
              <MountMap />
            </div>
            <div>
              <MountModal />
            </div>
          </div>
        )}
        {badgeModal && (
          <LikeModal
            open={modal}
            onClose={() => {
              setBadgeModal(false);
            }}
          ></LikeModal>
        )}
      </StContainer>
      <MountPhoto />
    </>
  );
};

export default MountBackground;

const StContainer = styled.div`
  background-size: 1920px;
  height: 65vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  .mountainInfo {
    z-index: 5;
    margin-bottom: 5%;
  }
  .backgroundImg {
    background-size: 1920px;
    height: 65vh;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    object-fit: cover;
    z-index: 0;
  }
  .likeBtn {
    background-color: rgba(0, 0, 0, 0);
    border: 0px;
    cursor: pointer;
  }
  .titleBox {
    background-color: rgba(255, 255, 255, 0.9);
    width: 37vh;
    height: 20%;
    margin-top: 15%;
    padding-bottom: 5px;
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
      padding-top: 2px;
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
