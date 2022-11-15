import { useState } from "react";
import styled from "styled-components";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";

const FilterMt = () => {
     const initialState = {
          time: "",
          region: "",
          season: "",
          level: "",
     };
     //필터 - 소요시간
     const [val1, setVal1] = useState([0, 8]);

     // console.log(val1);
     //리스트 체크박스
     const regionList = [
          { id: 0, name: "region", region: "서울" },
          { id: 1, name: "region", region: "경상" },
          { id: 2, name: "region", region: "경기" },
          { id: 3, name: "region", region: "충청" },
          { id: 4, name: "region", region: "전라" },
          { id: 5, name: "region", region: "강원" },
          { id: 6, name: "region", region: "제주" },
     ];
     const seasonList = [
          { id: 0, name: "season", season: "봄" },
          { id: 1, name: "season", season: "가을" },
          { id: 2, name: "season", season: "여름" },
          { id: 3, name: "season", season: "겨울" },
     ];
     const levelList = [
          { id: 0, name: "level", level: "초급" },
          { id: 1, name: "level", level: "중급" },
          { id: 2, name: "level", level: "고급" },
     ];

     return (
          <StFilterMT>
               <div className="checkbox-list-style">
                    <div>
                         <p>상세조건</p>
                         <div className="filter-btn-style">
                              <button>초기화</button>
                              <button>적용</button>
                         </div>
                    </div>
                    <div>
                         <p>소요시간</p>
                         <StFilterSlide>
                              <p>
                                   {val1[0]}~{val1[1]}시간
                              </p>
                              <Slider
                                   range
                                   min={0}
                                   max={8}
                                   value={val1}
                                   step={1}
                                   dots={true}
                                   name="time"
                                   onChange={setVal1}
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
     width: 260px;
     height: 973px;
     display: flex;
     flex-direction: column;
     justify-content: flex-start;
     box-sizing: border-box;
     .filter-btn-style {
          display: flex;
          justify-content: space-between;
          button {
               width: 128px;
               height: 46px;
               font-size: 24px;
          }
     }
     .checkbox-list-style {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          gap: 30px;
          font-size: 24px;
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
`;
