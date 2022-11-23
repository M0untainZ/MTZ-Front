import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __getProof, __proofFilter } from "../../redux/modules/proofSlice";

const FilterList = () => {
     // 산 리스트 저장
     const [checkRegion, setCheckRegion] = useState([]);
     // 클릭된 지역 필터 정보 저장
     const [checkFilter, setCheckFilter] = useState("");
     // 선택된 옵션 필터 정보 저장(산이름)
     const [selectOption, setSelectOption] = useState("");
     const dispatch = useDispatch();
     const regionList = [
          { id: 0, name: "region", value: "서울" },
          { id: 1, name: "region", value: "강원도" },
          { id: 2, name: "region", value: "경기도" },
          { id: 3, name: "region", value: "충청도" },
          { id: 4, name: "region", value: "경상도" },
          { id: 5, name: "region", value: "전라도" },
          { id: 6, name: "region", value: "제주도" },
     ];

     const onChangeMTList = (e) => {
          const seoul = [
               "관악산",
               "북한산",
               "아차산",
               "도봉산",
               "수락산",
               "인왕산",
               "북악산",
               "남산",
          ];
          const gangwon = ["설악산", "치악산", "태백산", "오대산"];
          const gyeonggi = [
               "명성산",
               "백운산",
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
          const gyeongsang = ["팔공산", "대야산", "비슬산", "덕유산", "금정산"];
          const jeolla = ["지리산", "대둔산", "조계산"];
          const jeju = ["한라산"];

          if (e.target.value === "서울") {
               setCheckRegion(seoul);
          } else if (e.target.value === "강원도") {
               setCheckRegion(gangwon);
          } else if (e.target.value === "경기도") {
               setCheckRegion(gyeonggi);
          } else if (e.target.value === "충청도") {
               setCheckRegion(chungchung);
          } else if (e.target.value === "경상도") {
               setCheckRegion(gyeongsang);
          } else if (e.target.value === "전라도") {
               setCheckRegion(jeolla);
          } else if (e.target.value === "제주도") {
               setCheckRegion(jeju);
          }
          const { name, value } = e.target;
          setCheckFilter({ ...checkFilter, [name]: value });
          setSelectOption("");
     };
     // 선택된 항목들 초기화
     const onResetHandler = () => {
          const checkFilter = document.getElementsByName("region");
          checkFilter.forEach((ch) => {
               ch.checked = false;
          });
          setCheckRegion([]);
          setCheckFilter("");
          setSelectOption("");
          dispatch(__getProof());
     };

     const onFilterApply = () => {
          dispatch(__proofFilter(checkFilter));
     };

     return (
          <StFilterContainer>
               <div className="filter-box">
                    <p>상세조건</p>
                    <div className="filter-btn">
                         <button onClick={onResetHandler}>초기화</button>
                         <button
                              type="button"
                              onClick={() => {
                                   onFilterApply();
                              }}
                         >
                              적용
                         </button>
                    </div>
               </div>
               <p>지역선택</p>
               <div className="region-list">
                    {regionList.map((el) => (
                         <label key={el.id}>
                              <StyledInput
                                   type="radio"
                                   name={el.name}
                                   className="region"
                                   value={el.value}
                                   onChange={onChangeMTList}
                              />
                              {el.value}
                         </label>
                    ))}
               </div>
               <div className="mt-list">
                    <p>산 필터링</p>
                    <select name="name" onChange={onChangeMTList}>
                         <option defaultValue>=====</option>
                         {checkRegion.map((mountain, idx) => (
                              <option key={idx} value={mountain}>
                                   {mountain}
                              </option>
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
     }
     .region-list {
          display: flex;
          flex-wrap: wrap;
          label {
               margin: 0 20px;
          }
     }
`;

const StyledInput = styled.input`
     margin: 0 5px;
`;
