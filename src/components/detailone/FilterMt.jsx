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
          dispatch(__postFilterMountains(initialState));
          // dispatch(__getMountains());
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
                         <div className="marker-name">
                              <span>~ 1시간</span>
                              <span>6시간 이상~</span>
                         </div>
                         <StFilterSlide>
                              <datalist id="markers">
                                   <option value="1"></option>
                                   <option value="2"></option>
                                   <option value="3"></option>
                                   <option value="4"></option>
                                   <option value="5"></option>
                                   <option value="6"></option>
                              </datalist>
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
                                        <StInput
                                             type="radio"
                                             name={item.name}
                                             value={item.value}
                                             onClick={onFilterSelect}
                                        />
                                        &nbsp;{item.value}
                                   </label>
                              ))}
                         </div>
                    </div>
                    <div>
                         <p>계절별</p>
                         <div className="list season-style">
                              {seasonList.map((item) => (
                                   <label key={item.id}>
                                        <StInput
                                             type="radio"
                                             name={item.name}
                                             value={item.value}
                                             onClick={onFilterSelect}
                                        />
                                        &nbsp;{item.value}
                                   </label>
                              ))}
                         </div>
                    </div>
                    <div>
                         <p>난이도 설정</p>
                         <div className="list level-style">
                              {levelList.map((item) => (
                                   <label key={item.id}>
                                        <StInput
                                             type="radio"
                                             name={item.name}
                                             value={item.value}
                                             onClick={onFilterSelect}
                                        />
                                        &nbsp;{item.value}
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
     width: 18.5%;
     height: 100%;
     display: flex;
     flex-direction: column;
     justify-content: flex-start;
     box-sizing: border-box;
     .filter-btn-style {
          display: flex;
          justify-content: space-between;
          button {
               width: 49%;
               min-height: 44px;
               padding: 5px 0;
               font-size: 18px;
               font-weight: 500;
               border: 1px solid black;
               cursor: pointer;
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
               flex-wrap: wrap;
               align-content: space-between;
               gap: 35%;
               label {
                    width: 30%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    color: var(--color-border);
                    padding: 3px 0;
                    font-size: 18px;
               }
          }
     }
     .marker-name {
          display: flex;
          justify-content: space-between;
          width: 105%;
          margin-bottom: -5px;
          span {
               font-size: 14px;
          }
     }
`;

const StInput = styled.input`
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
`;

const StFilterSlide = styled.div`
     width: 100%;
     height: 100%;
     display: flex;
     flex-direction: column;
     justify-content: flex-start;
     align-items: center;
     position: relative;
     #markers {
          margin-left: 10px;
          width: 120%;
          min-height: 100%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          position: relative;
          top: 20px;
     }
     input[type="range"] {
          width: 97%;
          margin-left: 15px;
          -webkit-appearance: none;
          background: transparent;
          border-radius: 30px;
          border: 1px solid var(--color-border);
          accent-color: var(--color-border);
          box-sizing: border-box;
          padding: 0 1px;
          z-index: 1;
     }
     input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          background: var(--color-border);
          border: 1px solid var(--color-border);
          cursor: pointer;
          height: 18px;
          width: 18px;
          border-radius: 50%;
          z-index: 3;
     }
     #markers option {
          border-right: 1px solid var(--color-border);
          min-height: 12px;
          box-sizing: border-box;
          :first-child,
          :last-child {
               border: none;
          }
     }
`;
