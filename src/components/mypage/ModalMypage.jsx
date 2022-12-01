import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { __getMyinfo, __putMyinfo } from "../../redux/modules/mypageSlice";
import Modal from "./modal/MyModal";

const ModalMypage = () => {
     const dispatch = useDispatch();
     const navigate = useNavigate();

     const initialState = {
          memberPhoto: "",
          nickName: "",
          region: "",
          badgeName: "",
     };

     const [profile, setProfile] = useState(initialState);
     const [modal, setModal] = useState(false);
     const [badge, setBadge] = useState(false);

     //입력정보 불러오기
     const userinfo = useSelector((state) => state.mypage.mypage?.data);

     useEffect(() => {
          dispatch(__getMyinfo());
     }, [dispatch]);

     const regionList = [
          "서울",
          "경상",
          "경기",
          "충청",
          "전라",
          "강원",
          "제주",
     ];

     const badgeTest = [
          "등산 비기너",
          "중급 산악인",
          "산린이",
          "등린이",
          "일등 산악인",
          "산울림",
          "산악 대장",
          "백패커",
          "일등 산악인",
          "산울림",
          "산악 대장",
          "백패커",
     ];

     //정보 변경
     const onChangeInfo = (e) => {
          const { name, value } = e.target;
          setProfile({ ...profile, [name]: value });
          console.log(profile);
     };

     const onChangeBadge = (e) => {
          const { name, value } = e.target;
          setProfile({ ...profile, [name]: value });
          console.log(profile);
          console.log(profile.badgeName);
          if (!!profile.badgeName) {
          }
     };

     useEffect(() => {});

     //정보 변경 사항 보내기
     const onSubmitInfo = () => {
          if (
               profile.badgeName === "" ||
               profile.nickName === "" ||
               profile.region === ""
          ) {
               alert("모든 내용을 입력해주세요.");
          } else {
               dispatch(__putMyinfo(profile));
               sessionStorage.removeItem("userinfos");
               sessionStorage.setItem("userinfos", JSON.stringify(profile));
               alert("정보 변경이 완료되었습니다.");
               window.location.replace("/mypage");
          }
     };
     const ModalSwitch = () => {
          setModal(!modal);
     };
     return (
          <StModalMypage>
               <button
                    className="profile-setting-btn-style"
                    onClick={ModalSwitch}
               >
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
                                        onChange={onChangeInfo}
                                        type="text"
                                        name="nickName"
                                        defaultValue={userinfo?.nickName}
                                   />
                              </div>
                              <div className="pick modal-setting-region">
                                   <p>지역선택</p>
                                   <select
                                        onChange={onChangeInfo}
                                        name="region"
                                   >
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
                                   <p>대표 뱃지 설정</p>
                                   <div className="pick-badge-list">
                                        {badgeTest.map((badges, idx) => (
                                             <button
                                                  onClick={onChangeBadge}
                                                  // className="pick-badge-element"
                                                  className={
                                                       profile.badgeName
                                                            ? "picked"
                                                            : "pick-badge-element"
                                                  }
                                                  name="badgeName"
                                                  value={badges}
                                                  key={idx}
                                             >
                                                  {badges}
                                             </button>
                                        ))}
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

     .pick {
          width: 100%;
          display: flex;
          flex-direction: column;
          padding: 7px 0;
          p {
               padding: 5px 2px;
               color: var(--color-mypage);
          }
          input {
               height: 48px;
               width: 100%;
               padding: 0 10px;
               box-sizing: border-box;
               font-size: 16px;
               border: 2px solid #ccc;
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
          padding: 20px 0;
          .pick-badge-list {
               display: flex;
               flex-wrap: wrap;
               gap: 11px;

               .pick-badge-element {
                    width: 105px;
                    height: 105px;
                    background-color: var(--color-point);
                    border: 2px solid var(--color-border);
                    cursor: pointer;
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
          props.borderColor
               ? "2px solid var(--color-button)"
               : "2px solid #777"};
     color: ${(props) => (props.borderColor ? "var(--color-button);" : "#777")};
`;
