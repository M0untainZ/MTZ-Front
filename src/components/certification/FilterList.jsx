import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useMutation } from "react-query"
import { proofFilter } from "../../shared/api.js";
import { filterFalse, filterTrue, proofData } from "../../redux/modules/proofSlice";

const FilterList = () => {
     const dispatch = useDispatch()
     // 산 리스트 저장
     const [checkRegion, setCheckRegion] = useState([]);
     // 클릭된 지역 필터 정보 저장
     const [checkFilter, setCheckFilter] = useState("");
     // 선택된 옵션 필터 정보 저장(산이름)
     const [selectOption, setSelectOption] = useState("");

     const regionList = [
          { id: 0, name: "region", value: "서울" },
          { id: 1, name: "region", value: "강원" },
          { id: 2, name: "region", value: "경기" },
          { id: 3, name: "region", value: "충청" },
          { id: 4, name: "region", value: "경상" },
          { id: 5, name: "region", value: "전라" },
          { id: 6, name: "region", value: "제주" },
     ];

     const onChangeRegionList = (e) => {
          const seoul = [
               "도봉산",
               "수락산",
               "인왕산",
               "북악산",
               "남산",
          ];
          const gangwon = ["명성산", "설악산", "치악산", "태백산", "오대산"];
          const gyeonggi = [
               "관악산",
               "북한산",
               "아차산",
               "마니산",
               "감악산",
               "소요산",
               "운악산",
               "명지산",
               "축령산",
               "천마산",
               "유명산",
               "용문산",
          ];
          const chungchung = ["속리산", "월악산", "소백산", "계룡산"];
          const gyeongsang = ["지리산", "팔공산", "대야산", "비슬산", "금정산"];
          const jeolla = ["백운산", "대둔산", "덕유산", "조계산"];
          const jeju = ["한라산"];

          if (e.target.value === "서울") {
               setCheckRegion(seoul);
          } else if (e.target.value === "강원") {
               setCheckRegion(gangwon);
          } else if (e.target.value === "경기") {
               setCheckRegion(gyeonggi);
          } else if (e.target.value === "충청") {
               setCheckRegion(chungchung);
          } else if (e.target.value === "경상") {
               setCheckRegion(gyeongsang);
          } else if (e.target.value === "전라") {
               setCheckRegion(jeolla);
          } else if (e.target.value === "제주") {
               setCheckRegion(jeju);
          }
          const regionCheckbox = document.getElementsByName("region");
          for (let i = 0; i < regionCheckbox.length; i++) {
               if (regionCheckbox[i] !== e.target) {
                    regionCheckbox[i].checked = false;
               }
          }
          const { name, value } = e.target;
          setCheckFilter({ ...checkFilter, [name]: value });
     };

     const onChangeMTList = (e) => {
          const { name, value } = e.target;
          setCheckFilter({ ...checkFilter, [name]: value });
     }

     // 선택된 항목들 초기화
     const onResetHandler = () => {
          const checkFilter = document.getElementsByName("region");
          checkFilter.forEach((ch) => {
               ch.checked = false;
          });
          setCheckRegion([]);
          setCheckFilter("");
          setSelectOption("");
          dispatch(filterFalse());
     };

     const { mutate: filter } = useMutation(proofFilter, {
          onSuccess: (config) => {
               dispatch(proofData(config.data))
          }
     });

     const onApplyHandler = () => {
          filter(checkFilter)
          dispatch(filterTrue());
     };
     
     return (
          <StFilterContainer>
               <div className="filter-box">
                    <p>상세조건</p>
                    <div className="filter-btn">
                         <button onClick={onResetHandler}>초기화</button>
                         <button
                              type="button"
                              onClick={() => {onApplyHandler()}}>
                              적용
                         </button>
                    </div>
               </div>
               <p>지역선택</p>
               <div className="region-list">
                    {regionList.map((el) => (
                         <label key={el.id}>
                              <input
                                   type="checkbox"
                                   className="region"
                                   name={el.name}
                                   value={el.value}
                                   onChange={onChangeRegionList}
                              />
                              &nbsp;{el.value}
                         </label>
                    ))}
               </div>
               <p>산 필터링</p>
               <div className="mt-list">
                    <select name="name" onChange={onChangeMTList}>
                         <option defaultValue>선택</option>
                         {checkRegion.map((mountain, idx) => (
                         <option key={idx} value={mountain}>{mountain}</option>
                         ))}
                    </select>
               </div>
          </StFilterContainer>
     );
};

export default FilterList;

const StFilterContainer = styled.div`
     width: 260px;
     height: 550px;
     font-size: 18px;
     .filter-btn {
          display: flex;
          justify-content: space-between;
          button {
               width: 128px;
               height: 25px;
          }
          button:first-child {
               background-color: #EDF4F5;
          }
          button:last-child {
               background-color: #276575;
               color: #ffffff;
          }
     }
     .region-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10%;
          label {
               display: flex;
               justify-content: center;
               align-items: center;
               width: 40%;
          }
          input {
               appearance: none;
               border: 1.5px solid gainsboro;
               width: 1.5rem;
               height: 1.5rem;
               cursor: pointer;
               margin: 0;
               &:checked {
                    border-color: transparent;
                    background-image: url("/icons/Property 1=check.png");
                    background-size: 100% 100%;
                    background-position: 50%;
                    background-repeat: no-repeat;
               }
          }
          
     }
     select {
          width: 150px;
          height: 30px;
     }
     
`;
