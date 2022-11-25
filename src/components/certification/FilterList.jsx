import React, { useEffect, useState } from "react";
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
          { id: 1, name: "region", value: "강원" },
          { id: 2, name: "region", value: "경기" },
          { id: 3, name: "region", value: "충청" },
          { id: 4, name: "region", value: "경상" },
          { id: 5, name: "region", value: "전라" },
          { id: 6, name: "region", value: "제주" },
     ];

     const onChangeMTList = (e) => {
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
          const checkbox = document.getElementsByName("region");
          for (let i = 0; i < checkbox.length; i++) {
               if (checkbox[i] !== e.target) {
                    checkbox[i].checked = false;
               }
          }
          const { name, value } = e.target;
          setCheckFilter({ ...checkFilter, [name]: value });
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
                    {/* <input id="seoul" type="checkbox" name="region" value="서울" onChange={onChangeMTList} />
                    <label htmlFor="seoul">서울</label>
                    <input id="gangwon" type="checkbox" name="region" value="강원" onChange={onChangeMTList} />
                    <label htmlFor="gangwon">강원</label>
                    <input id="gyeonggi" type="checkbox" name="region" value="경기" onChange={onChangeMTList} />
                    <label htmlFor="gyeonggi">경기</label>
                    <input id="chungchung" type="checkbox" name="region" value="충청" onChange={onChangeMTList} />
                    <label htmlFor="chungchung">충청</label>
                    <input id="gyeongsang" type="checkbox" name="region" value="경상" onChange={onChangeMTList} />
                    <label htmlFor="gyeongsang">경상</label>
                    <input id="jeolla" type="checkbox" name="region" value="전라" onChange={onChangeMTList} />
                    <label htmlFor="jeolla">전라</label>
                    <input id="jeju" type="checkbox" name="region" value="제주" onChange={onChangeMTList} />
                    <label htmlFor="jeju">제주</label> */}
                    {regionList.map((el, idx) => (
                         <label key={el.id}>
                              <input
                                   type="checkbox"
                                   name={el.name}
                                   className="region"
                                   value={el.value}
                                   onChange={onChangeMTList}
                              />
                              {el.value}
                         </label>
                    ))}
               </div>
               <p>산 필터링</p>
               <div className="mt-list">
               {checkRegion.map((mountain, idx) => (
                    <label key={idx}>
                         <input type="checkbox" name="name" value={mountain} onChange={onChangeMTList} />
                         {mountain}
                    </label>
               ))}
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
          gap: 10%;
          label {
               display: flex;
               justify-content: center;
               align-items: center;
               width: 40%;
               box-sizing: border-box;
               border: 1px solid black;
               border-radius: 20px;
               cursor: pointer;
               input {
               display: none;
          }
          }
     }
     .mt-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10%;
          label {
               display: flex;
               justify-content: center;
               align-items: center;
               width: 40%;
               box-sizing: border-box;
               border: 1px solid black;
               border-radius: 20px;
               cursor: pointer;
          }
          input {
               display: none;
          }
     }
`;
