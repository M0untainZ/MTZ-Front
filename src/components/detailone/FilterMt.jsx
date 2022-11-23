import { useState } from "react";
import styled from "styled-components";
import {
     __getMountains,
     __postFilterMountains,
     isSeasonFalse,
     isRegionFalse,
     isLevelFalse,
     isTimeFalse,
} from "../../redux/modules/mountainsSlice";
import { useDispatch } from "react-redux";

const FilterMt = () => {
     const dispatch = useDispatch();

     const [filter, setFilter] = useState();
     const [filterbox, setFilterbox] = useState();

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
          const checkboxes = document.getElementsByName("time");
          for (let i = 0; i < checkboxes.length; i++) {
               if (checkboxes[i] !== e.target) {
                    checkboxes[i].checked = false;
               }
          }
          const { name, value } = e.target;
          setFilter({ ...filter, [name]: value });
          console.log("확인", filter);
     };
     //필터 선택 onChange - region
     const onFilterRegion = (e) => {
          const checkboxes = document.getElementsByName("region");
          for (let i = 0; i < checkboxes.length; i++) {
               if (checkboxes[i] !== e.target) {
                    checkboxes[i].checked = false;
               }
          }
          // document
          //      .getElementsByName("region")
          //      .forEach((el) => (el.checked = false));
          // e.target.checked = true;

          //새로 checked된 값들은 value들은 새로운 입력값을 줌
          if (e.target.checked) {
               const { name, value } = e.target;
               setFilter({ ...filter, [name]: value });
          }
          //checked된 값은 삭제 시켜줌
          if (!e.target.checked) {
               delete filter["region"];
          }
          console.log("확인", filter);
     };
     //필터 선택 onChange - season
     const onFilterSeason = (e) => {
          const checkboxes = document.getElementsByName("season");
          for (let i = 0; i < checkboxes.length; i++) {
               if (checkboxes[i] !== e.target) {
                    checkboxes[i].checked = false;
               }
          }
          if (e.target.checked) {
               const { name, value } = e.target;
               setFilter({ ...filter, [name]: value });
          }
          if (!e.target.checked) {
               delete filter["season"];
          }
          console.log("확인", filter);
     };
     //필터 선택 onChange - level
     const onFilterLevel = (e) => {
          const checkboxes = document.getElementsByName("level");
          for (let i = 0; i < checkboxes.length; i++) {
               if (checkboxes[i] !== e.target) {
                    checkboxes[i].checked = false;
               }
          }

          if (e.target.checked) {
               const { name, value } = e.target;
               setFilter({ ...filter, [name]: value });
          }
          if (!e.target.checked) {
               delete filter["level"];
          }
          console.log("확인", filter);
     };

     //필터에 따른 산 리스트 불러오기
     const onFilterList = () => {
          dispatch(__postFilterMountains(filter));
     };
     //필터 초기화 시 -> 전체 산 리스트 불러오기
     const onFilterListnope = () => {
          dispatch(__getMountains());
          dispatch(isSeasonFalse());
          dispatch(isRegionFalse());
          dispatch(isLevelFalse());
          dispatch(isTimeFalse());
          setFilter("");
     };

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
                                   <span>0</span>
                                   <span>1</span>
                                   <span>2</span>
                                   <span>3</span>
                                   <span>4</span>
                                   <span>5</span>
                                   <span>6</span>
                              </div>
                              <input
                                   type="range"
                                   min="0"
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
                         <div className="list regionlist-style">
                              {regionList.map((item) => (
                                   <label key={item.id}>
                                        <input
                                             type="checkbox"
                                             name={item.name}
                                             value={item.value}
                                             onClick={onFilterRegion}
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
                                             type="checkbox"
                                             name={item.name}
                                             value={item.value}
                                             onClick={onFilterSeason}
                                        />
                                        {item.value}
                                   </label>
                              ))}
                         </div>
                    </div>
                    <div>
                         <p>난이도 설정</p>
                         <div className="list levellist-style">
                              {levelList.map((item) => (
                                   <label key={item.id}>
                                        <input
                                             type="checkbox"
                                             name={item.name}
                                             value={item.value}
                                             onClick={onFilterLevel}
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
     width: 18%;
     height: 973px;
     display: flex;
     flex-direction: column;
     justify-content: flex-start;
     box-sizing: border-box;
     .filter-btn-style {
          display: flex;
          justify-content: center;
          gap: 5px;
          button {
               width: 30%;
               font-size: 20px;
          }
     }
     .checkbox-list-style {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          gap: 30px;
          font-size: 20px;
          p {
               margin-bottom: 15px;
          }
          .list {
               display: flex;
               flex-wrap: wrap;
               gap: 10px;
               label {
                    width: 40%;
               }
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
          width: 80%;
          margin-bottom: 0;
          display: flex;
          justify-content: space-between;
          span {
               font-size: 13px;
          }
     }
     input {
          width: 85%;
     }
`;
