import { useState } from "react";
import styled from "styled-components";
import "./index.css";
import { __postFilterMountains } from "../../redux/modules/mountainsSlice";
import { useDispatch, useSelector } from "react-redux";

const FilterMt = () => {
     const dispatch = useDispatch();
     const initialState = {
          mountainTime: "",
          mountainRegion: "",
          mountainSeason: "",
          mountainLevel: "",
     };
     //필터 - 소요시간

     //console.log(val1);

     const [filter, setFilter] = useState(initialState);

     const { mountains } = useSelector((state) => state.mountains);

     console.log("필터중", mountains);

     const markers = {
          0: "0",
          1: "1시간",
          2: "2시간",
          3: "3시간",
          4: "4시간",
          5: "5시간",
          6: "6시간 이상",
     };

     //리스트 체크박스
     const regionList = [
          { id: 0, name: "mountainRegion", region: "서울" },
          { id: 1, name: "mountainRegion", region: "경상" },
          { id: 2, name: "mountainRegion", region: "경기" },
          { id: 3, name: "mountainRegion", region: "충청" },
          { id: 4, name: "mountainRegion", region: "전라" },
          { id: 5, name: "mountainRegion", region: "강원" },
          { id: 6, name: "mountainRegion", region: "제주" },
     ];
     const seasonList = [
          { id: 0, name: "mountainSeason", season: "봄" },
          { id: 1, name: "mountainSeason", season: "가을" },
          { id: 2, name: "mountainSeason", season: "여름" },
          { id: 3, name: "mountainSeason", season: "겨울" },
     ];
     const levelList = [
          { id: 0, name: "mountainLevel", level: "초급" },
          { id: 1, name: "mountainLevel", level: "중급" },
          { id: 2, name: "mountainLevel", level: "고급" },
     ];

     const onFilterChange = (e) => {
          const { name, value } = e.target;
          setFilter({ ...filter, [name]: value });
          console.log(filter);
     };

     const onFilterList = () => {
          dispatch(__postFilterMountains(filter));
     };

     return (
          <StFilterMT>
               <div className="checkbox-list-style">
                    <div>
                         <p>상세조건</p>
                         <div className="filter-btn-style">
                              <button>초기화</button>
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
                                   name="mountainTime"
                                   onClick={onFilterChange}
                              />
                         </StFilterSlide>
                    </div>
                    <div>
                         <p>지역선택</p>
                         <div className="list regionlist-style">
                              {regionList.map((item) => (
                                   <label key={item.id}>
                                        <input
                                             type="radio"
                                             name={item.name}
                                             value={item.region}
                                             onClick={onFilterChange}
                                        />
                                        {item.region}
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
                                             value={item.season}
                                             onClick={onFilterChange}
                                        />
                                        {item.season}
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
                                             type="radio"
                                             name={item.name}
                                             value={item.level}
                                             onClick={onFilterChange}
                                        />
                                        {item.level}
                                   </label>
                              ))}
                         </div>
                    </div>
               </div>
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
