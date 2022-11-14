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

     const [val1, setVal1] = useState([0, 8]);

     console.log(val1);

     const regionList = [
          { id: 1, name: "region", region: "서울" },
          { id: 2, name: "region", region: "경상" },
          { id: 3, name: "region", region: "경기" },
          { id: 4, name: "region", region: "충청" },
          { id: 5, name: "region", region: "전라" },
          { id: 6, name: "region", region: "강원" },
          { id: 7, name: "region", region: "제주" },
     ];
     const seasonList = [
          { id: 1, name: "season", region: "봄" },
          { id: 2, name: "season", region: "가을" },
          { id: 3, name: "season", region: "여름" },
          { id: 4, name: "season", region: "겨울" },
     ];
     const levelList = [
          { id: 1, name: "level", region: "초급" },
          { id: 2, name: "level", region: "중급" },
          { id: 3, name: "level", region: "고급" },
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
                                             type="checkbox"
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
                                             type="checkbox"
                                             name={item.name}
                                             value={item.region}
                                        />
                                        {item.region}
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
                                             value={item.region}
                                        />
                                        {item.region}
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
