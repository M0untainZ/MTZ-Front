import { useEffect, useState } from "react";
import styled from "styled-components";
import {
     __getMountains,
     __postFilterMountains,
} from "../../redux/modules/mountainsSlice";
import { useDispatch, useSelector } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";

const FilterMt = () => {
     const dispatch = useDispatch();

     const [filter, setFilter] = useState();

     const initialState = {};

     //리스트 체크박스
     const regionList = [
          { id: 0, name: "region", value: "서울" },
          { id: 1, name: "region", value: "경상" },
          { id: 2, name: "region", value: "경기" },
          { id: 3, name: "region", value: "충청" },
          { id: 4, name: "region", value: "전라" },
          { id: 5, name: "region", value: "강원" },
          { id: 6, name: "region", value: "제주" },
     ];
     const seasonList = [
          { id: 0, name: "season", value: "봄" },
          { id: 1, name: "season", value: "가을" },
          { id: 2, name: "season", value: "여름" },
          { id: 3, name: "season", value: "겨울" },
     ];
     const levelList = [
          { id: 0, name: "level", value: "초급" },
          { id: 1, name: "level", value: "중급" },
          { id: 2, name: "level", value: "고급" },
     ];

     //필터 선택 onChange - time
     const onFilterTime = (e) => {
          const { name, value } = e.target;
          setFilter({ ...filter, [name]: value });
          console.log("확인", filter);
     };
     //필터 선택 onChange - region
     const onFilterSelect = (e) => {
          const { name, value } = e.target;
          setFilter({ ...filter, [name]: value });

          console.log("확인", filter);
     };

     //필터에 따른 산 리스트 불러오기
     const onFilterList = () => {
          dispatch(__postFilterMountains(filter));
     };
     //필터 초기화 시 -> 전체 산 리스트 불러오기
     const onFilterListnope = () => {
          dispatch(__getMountains());
          dispatch(__postFilterMountains(initialState));
          setFilter("");
     };

     console.log("확인", filter);
     return (
          <StFilterMT>
               <form className="checkbox-list-style">
                    <div>
                         <p>상세조건</p>
                         <div className="filter-btn-style">
                              <button
                                   type="reset"
                                   onClick={() => {
                                        onFilterListnope();
                                   }}
                              >
                                   초기화
                              </button>
                              <button
                                   type="button"
                                   onClick={() => {
                                        onFilterList();
                                   }}
                              >
                                   적용
                              </button>
                         </div>
                    </div>
                    <div>
                         <p>소요시간</p>
                         <StFilterSlide>
                              <div className="marker">
                                   <span>~1시간</span>
                                   <span></span>
                                   <span></span>
                                   <span></span>
                                   <span></span>
                                   <span>6시간 이상</span>
                              </div>
                              <input
                                   type="range"
                                   min="1"
                                   max="6"
                                   step="1"
                                   list="markers"
                                   name="time"
                                   defaultValue="0"
                                   onClick={onFilterTime}
                              />
                         </StFilterSlide>
                    </div>
                    <div>
                         <p>지역선택</p>
                         <div className="list region-style">
                              {regionList.map((item) => (
                                   <label key={item.id}>
                                        <input
                                             type="radio"
                                             name={item.name}
                                             value={item.value}
                                             onClick={onFilterSelect}
                                        />
                                        {item.value}
                                   </label>
                              ))}
                         </div>
                    </div>
                    <div>
                         <p>계절별</p>
                         <div className="list season-style">
                              {seasonList.map((item) => (
                                   <label key={item.id}>
                                        <input
                                             type="radio"
                                             name={item.name}
                                             value={item.value}
                                             onClick={onFilterSelect}
                                        />
                                        {item.value}
                                   </label>
                              ))}
                         </div>
                    </div>
                    <div>
                         <p>난이도 설정</p>
                         <div className="list level-style">
                              {levelList.map((item) => (
                                   <label key={item.id}>
                                        <input
                                             type="radio"
                                             name={item.name}
                                             value={item.value}
                                             onClick={onFilterSelect}
                                        />
                                        {item.value}
                                   </label>
                              ))}
                         </div>
                    </div>
               </form>
          </StFilterMT>
     );
};

export default FilterMt;

const StFilterMT = styled.div`
     padding: 40px 0;
     width: 14%;
     height: 100%;
     display: flex;
     flex-direction: column;
     justify-content: flex-start;
     box-sizing: border-box;
     .filter-btn-style {
          display: flex;
          justify-content: space-between;
          button {
               width: 47%;
               padding: 5px 0;
               font-size: 18px;
               font-weight: 500;
               border: 1px solid black;
               :nth-child(2) {
                    background-color: var(--color-button);
                    color: white;
               }
          }
     }
     .checkbox-list-style {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          gap: 30px;
          font-size: 20px;
          p {
               margin-bottom: 10px;
          }
          .list {
               display: flex;
               flex-direction: column;
               flex-wrap: wrap;
               align-content: space-between;
               gap: 5%;
               height: 15.2vh;
               padding: 5px;
               label {
                    width: fit-content;
                    input[type="radio"] {
                         accent-color: var(--color-border);
                    }
               }
          }
          .season-style {
               height: 6.9vh;
          }
          .level-style {
               height: 6.9vh;
          }
     }
`;

const StFilterSlide = styled.div`
     width: 100%;
     height: 100%;
     display: flex;
     flex-direction: column;
     justify-content: flex-start;
     align-items: center;
     position: relative;
     .marker {
          width: 98%;
          margin-bottom: 0;
          display: flex;
          justify-content: space-between;
          span {
               font-size: 13px;
          }
     }
     input {
          width: 90%;
     }
     input[type="range"] {
          width: 85%;
          -webkit-appearance: none;
          background: transparent;
          accent-color: var(--color-border);
     }
`;
