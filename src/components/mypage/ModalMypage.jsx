import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __mynameCheck } from "../../redux/modules/mypageSlice";
import Modal from "./modal/MyModal";
import { getMypage, putMypage } from "../../shared/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ModalMypage = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  //마이페이지 개인정보 기본값 불러오기
  const { data } = useQuery(["mypage"], getMypage, {
    refetchOnWindowFocus: false,
    staleTime: 5000,
    cacheTime: Infinity,
    onSuccess: (data) => {
      setProfile({
        profilePhoto: data.data.profilePhoto,
        nickName: data.data.nickName,
        region: data.data.region,
        badgeName: data.data.badgeName,
      });
    },
  });

  const [profile, setProfile] = useState();

  //프로필 수정 쿼리
  const { mutate: putMypages } = useMutation(putMypage, {
    onSuccess: () => {
      queryClient.invalidateQueries(["mypage"]);
    },
  });

  const [modal, setModal] = useState(false);
  const { badgeModal, setBadgeModal } = useState([]);

  const regionList = ["서울", "경상", "경기", "충청", "전라", "강원", "제주"];

  //정보 변경
  const onChangeInfo = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  //뱃지 수정
  const onChangeBadge = (e) => {
    const { src, alt } = e.target;
    setProfile({ ...profile, badgeName: alt, profilePhoto: src });
  };
  const { mynameChk } = useSelector((state) => state.mypage);

  //닉네임 중복확인
  const NameCk = () => {
    if (mynameChk || data.data.nickName === profile.nickName) {
      dispatch(__mynameCheck({ nickName: profile.nickName }));
      return toast.success("사용가능한 닉네임 입니다.", {
        autoClose: 1500,
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      return toast.warning("이미 사용중인 닉네임 입니다.", {
        autoClose: 1500,
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  //정보 변경 사항 보내기
  const onSubmitInfo = () => {
    if (profile.nickName !== data.data.nickName && !mynameChk) {
      return toast.warning("중복된 닉네임 입니다.", {
        autoClose: 1500,
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      putMypages(profile);
      sessionStorage.removeItem("userinfos");
      sessionStorage.setItem("userinfos", JSON.stringify(profile));
      setModal(!modal);
      toast.success("수정이 완료되었습니다.", {
        autoClose: 1500,
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const ModalSwitch = () => {
    setModal(!modal);
  };

  //뱃지 선택 금지
  const onStopAlert = () => {
    toast.error("선택하실 수 없는 뱃지입니다 😭", {
      autoClose: 1000,
      position: toast.POSITION.TOP_CENTER,
    });
  };

  //미상의 뱃지 리스트
  function repeat(badgeModal) {
    let arr = [];
    for (let i = 0; i < 12 - data?.data.badgeList.length; i++) {
      arr.push(
        <img
          src="/icons/badge/lockBadge.png"
          onClick={onStopAlert}
          className="badge-element-img"
          name="badgeName"
          alt="lockBadge"
          key={i}
        />
      );
    }
    return arr;
  }

  return (
    <StModalMypage>
      <button className="profile-setting-btn-style" onClick={ModalSwitch}>
        <img src="/icons/profile_setting.png" alt="setting" />
      </button>
      {modal && (
        <Modal
          open={modal}
          onClose={() => {
            setModal(false);
          }}
        >
          <StMypageInfo>
            <div className="pick modal-setting-nickname">
              <p>닉네임</p>
              <div className="nickname-input">
                <input
                  onChange={onChangeInfo}
                  type="text"
                  name="nickName"
                  defaultValue={data?.data?.nickName}
                />
                {mynameChk || data.data.nickName === profile.nickName ? (
                  <Button
                    borderColor
                    className="name-check-btn"
                    onClick={NameCk}
                  >
                    사용 가능
                  </Button>
                ) : (
                  <Button className="name-check-btn" onClick={NameCk}>
                    중복 확인
                  </Button>
                )}
              </div>
            </div>
            <div className="pick modal-setting-region">
              <p>지역선택</p>
              <select onChange={onChangeInfo} name="region">
                <option value={data?.data?.region} hidden>
                  {data?.data?.region}
                </option>
                {regionList.map((regions, idx) => (
                  <option key={idx} value={regions}>
                    {regions}
                  </option>
                ))}
              </select>
            </div>
            <div className="pick pick-setting-badges">
              <p>대표 뱃지 설정 : {profile.badgeName}</p>
              <div className="pick-badge-list">
                {data?.data?.badgeList.map((badges, idx) => {
                  return (
                    <img
                      key={idx}
                      onClick={onChangeBadge}
                      className="badge-element-img"
                      src={badges.img}
                      name="badgeName"
                      alt={badges.badgeName}
                    />
                  );
                })}
                {repeat(badgeModal)}
              </div>
            </div>
            <div className="modal-mypage-box">
              <Button
                className="modal-mypage-btn"
                onClick={onSubmitInfo}
                borderColor
              >
                등록하기
              </Button>
              <Button
                className="modal-mypage-btn"
                onClick={() => setModal(false)}
              >
                취소하기
              </Button>
            </div>
          </StMypageInfo>
        </Modal>
      )}
      <ToastContainer style={{ width: "fit-content" }} />
    </StModalMypage>
  );
};

export default ModalMypage;

const StModalMypage = styled.div`
  width: 100%;
  height: 90%;
`;

const StMypageInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 20px 35px 40px 35px;
  font-size: 18px;
  img {
    width: 50px;
    height: 50px;
  }
  .pick {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 7px 0;
    position: relative;
    .nickname-input {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: space-between;
      .name-check-btn {
        width: 20%;
        height: 48px;
        font-size: 16px;
        font-weight: 600;
        background-color: transparent;
      }
    }
    p {
      padding: 5px 2px;
      color: var(--color-mypage);
    }
    .badge-setting-p {
      padding: 5px 2px 10px 2px;
      color: var(--color-mypage);
    }
    input {
      height: 48px;
      width: 78%;
      padding: 0 10px;
      box-sizing: border-box;
      font-size: 16px;
      border: 2px solid #ccc;
    }
    .use-name {
      width: fit-content;
      font-size: 15px;
      display: flex;
      align-items: center;
      position: absolute;
      bottom: -5px;
    }
    select {
      height: 48px;
      width: 100%;
      padding: 0 10px;
      box-sizing: border-box;
      font-size: 16px;
      border: 2px solid #ccc;
    }
  }
  .pick-setting-badges {
    height: 100%;
    width: 100%;
    padding: 20px 0;
    display: flex;
    .pick-badge-list {
      height: 100%;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      .badge-element-img {
        border: none;
        cursor: pointer;
        height: 100px;
        width: 100px;
        :hover {
          transform: scale(1.05);
        }
      }
      .pick-badge-element {
        width: 100px;
        height: 100px;
        background-color: var(--color-point);
        border: 2px solid var(--color-border);
        cursor: pointer;
        :focus {
          border: 3px solid var(--color-button);
        }
      }
      .picked {
        border: 3px solid var(--color-button);
      }
    }
  }
  .modal-mypage-box {
    display: flex;
    width: 100%;
    height: fit-content;
    justify-content: space-between;
    .modal-mypage-btn {
      width: 49%;
      height: 40px;
      font-size: 18px;
      font-weight: 600;
      background-color: transparent;
    }
  }
`;

const Button = styled.button`
  border: ${(props) =>
    props.borderColor ? "2px solid var(--color-button)" : "2px solid #777"};
  color: ${(props) => (props.borderColor ? "var(--color-button);" : "#777")};
  cursor: pointer;
`;
