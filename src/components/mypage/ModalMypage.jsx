import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { __getMyinfo, __putMyinfo } from "../../redux/modules/mypageSlice";

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

     //입력정보 불러오기
     const userinfo = useSelector((state) => state.mypage.mypage?.data);

     useEffect(() => {
          dispatch(__getMyinfo());
     }, [dispatch]);

     const regionList = [
          "경상",
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
     ];

     //정보 변경
     const onChangeInfo = (e) => {
          const { name, value } = e.target;
          setProfile({ ...profile, [name]: value });
          console.log(profile);
     };

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

     return (
          <StModalMypage>
               <div className="pick-badges-style">
                    {badgeTest.map((badges, idx) => (
                         <button
                              onClick={onChangeInfo}
                              className="pick-badge-element-style"
                              name="badgeName"
                              value={badges}
                              key={idx}
                         >
                              {badges}
                         </button>
                    ))}
               </div>
               <input
                    onChange={onChangeInfo}
                    type="text"
                    name="nickName"
                    defaultValue={userinfo?.nickName}
               />
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
               <div className="modal-mypage-box">
                    <button className="modal-mypage-btn" onClick={onSubmitInfo}>
                         입력
                    </button>
                    <button className="modal-mypage-btn">취소</button>
               </div>
          </StModalMypage>
     );
};

export default ModalMypage;

const StModalMypage = styled.div`
     width: 100%;
     height: 90%;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     gap: 20px;
     background-color: wheat;
     padding: 10px;
     box-sizing: border-box;
     .pick-badges-style {
          background-color: var(--color-midtone);
          width: 80%;
          height: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          .pick-badge-element-style {
               text-align: center;
               width: 20%;
               height: 30%;
               background-color: var(--color-darktone);
               cursor: point;
          }
     }
     .modal-mypage-img {
          width: 220px;
          height: 220px;
          position: relative;
     }
     .modal-mypage-box {
          display: flex;
          width: 100%;
          height: fit-content;
          justify-content: flex-end;
          .modal-mypage-btn {
               width: 15%;
               height: fit-content;
          }
     }
`;
