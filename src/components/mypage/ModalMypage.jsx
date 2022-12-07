import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  __getMyinfo,
  __mynameCheck,
  __putMyinfo,
} from "../../redux/modules/mypageSlice";
import Modal from "./modal/MyModal";

const ModalMypage = () => {
  const dispatch = useDispatch();

  const initialState = {
    memberPhoto: "",
    nickName: "",
    region: "",
    badgeName: "",
  };

  const [profile, setProfile] = useState(initialState);
  const [modal, setModal] = useState(false);
  const { badgeModal, setBadgeModal } = useState([]);

  //입력정보 불러오기
  const userinfo = useSelector((state) => state.mypage.mypage?.data);

  useEffect(() => {
    dispatch(__getMyinfo());
  }, [dispatch]);

  const regionList = ["서울", "경상", "경기", "충청", "전라", "강원", "제주"];

  //정보 변경
  const onChangeInfo = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const onChangeBadge = (e) => {
    const { src, alt } = e.target;
    setProfile({ ...profile, badgeName: alt, profilePhoto: src });
  };
  const { mynameChk } = useSelector((state) => state.mypage);

  const NameCk = () => {
    dispatch(__mynameCheck({ nickName: profile.nickName }));
  };
  //정보 변경 사항 보내기
  const onSubmitInfo = () => {
    if (
      profile.badgeName === "" ||
      profile.nickName === "" ||
      profile.region === ""
    ) {
      alert("모든 내용을 입력해주세요.");
    } else if (!mynameChk) {
      alert("닉네임 중복확인을 확인해주세요.");
    } else {
      dispatch(__putMyinfo(profile));
      sessionStorage.removeItem("userinfos");
      sessionStorage.setItem("userinfos", JSON.stringify(profile));
      alert("정보 변경이 완료되었습니다.");
      window.location.replace("/mypage");
      setModal(!modal);
    }
  };
  const ModalSwitch = () => {
    setModal(!modal);
  };
  //미상의 뱃지 리스트
  function repeat(badgeModal) {
    let arr = [];
    for (let i = 0; i < 12 - userinfo.badgeList.length; i++) {
      arr.push(
        <img
          src="/icons/badge/lockBadge.png"
          onClick={onChangeBadge}
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
              <input
                onBlur={NameCk}
                onChange={onChangeInfo}
                type="text"
                name="nickName"
                defaultValue={userinfo?.nickName}
              />
              {profile.nickName.trim() === "" ? null : mynameChk ? (
                <div className="use-name" style={{ color: "blue" }}>
                  사용 할 수 있는 닉네임입니다.
                </div>
              ) : (
                <StErrorMassage>
                  <img
                    src="https://member.op.gg/icon_alert.953d9b77.svg"
                    alt="warning"
                  />
                  이미 사용중인 닉네임입니다.
                </StErrorMassage>
              )}
            </div>
            <div className="pick modal-setting-region">
              <p>지역선택</p>
              <select onChange={onChangeInfo} name="region">
                <option value={userinfo?.region} hidden>
                  {userinfo?.region}
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
                {userinfo?.badgeList.map((badges, idx) => {
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
  padding: 20px 35px;
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
      width: 100%;
      padding: 0 10px;
      box-sizing: border-box;
      font-size: 16px;
      border: 2px solid #ccc;
      margin-bottom: 14px;
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
`;

const StErrorMassage = styled.div`
  width: fit-content;
  color: red;
  font-size: 15px;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: -5px;
  img {
    margin-right: 5px;
    width: 15px;
    height: 100%;
  }
`;
