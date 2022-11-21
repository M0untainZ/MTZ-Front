import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getMyinfo } from "../../redux/modules/mypageSlice";

const Badges = () => {
     const dispatch = useDispatch();

     const userinfo = useSelector((state) => state.mypage.mypage?.data);

     //뱃지리스트 불러오기
     useEffect(() => {
          dispatch(__getMyinfo());
     }, [dispatch]);

     return (
          <STBadgeContainer>
               <p className="badges-title-style">🎖 활동 뱃지</p>
               <div className="badges-list-style">
                    <div className="badge-element-style">
                         <img
                              className="badge-element-img-style"
                              src="icons/badge/frame.png"
                              alt="badges"
                         />
                         <div className="badges-info-style">
                              <p className="badges-name">Lv. 1 산악인</p>
                              <p className="badges-day">
                                   취득일자 : 2022년 11월 21일
                              </p>
                         </div>
                    </div>
                    <div className="badge-element-style">
                         <img
                              className="badge-element-img-style"
                              src="icons/badge/frame.png"
                              alt="badges"
                         />
                         <div className="badges-info-style">
                              <p className="badges-name">Lv. 1 산악인</p>
                              <p className="badges-day">
                                   취득일자 : 2022년 11월 21일
                              </p>
                         </div>
                    </div>
                    <div className="badge-element-style">
                         <img
                              className="badge-element-img-style"
                              src="icons/badge/frame.png"
                              alt="badges"
                         />
                         <div className="badges-info-style">
                              <p className="badges-name">Lv. 1 산악인</p>
                              <p className="badges-day">
                                   취득일자 : 2022년 11월 21일
                              </p>
                         </div>
                    </div>
                    <div className="badge-element-style">
                         <img
                              className="badge-element-img-style"
                              src="icons/badge/frame.png"
                              alt="badges"
                         />
                         <div className="badges-info-style">
                              <p className="badges-name">Lv. 1 산악인</p>
                              <p className="badges-day">
                                   취득일자 : 2022년 11월 21일
                              </p>
                         </div>
                    </div>
                    <div className="badge-element-style">
                         <img
                              className="badge-element-img-style"
                              src="icons/badge/frame.png"
                              alt="badges"
                         />
                         <div className="badges-info-style">
                              <p className="badges-name">Lv. 1 산악인</p>
                              <p className="badges-day">
                                   취득일자 : 2022년 11월 21일
                              </p>
                         </div>
                    </div>
                    <div className="badge-element-style">
                         <img
                              className="badge-element-img-style"
                              src="icons/badge/frame.png"
                              alt="badges"
                         />
                         <div className="badges-info-style">
                              <p className="badges-name">Lv. 1 산악인</p>
                              <p className="badges-day">
                                   취득일자 : 2022년 11월 21일
                              </p>
                         </div>
                    </div>
                    <div className="badge-element-style">
                         <img
                              className="badge-element-img-style"
                              src="icons/badge/frame.png"
                              alt="badges"
                         />
                         <div className="badges-info-style">
                              <p className="badges-name">Lv. 1 산악인</p>
                              <p className="badges-day">
                                   취득일자 : 2022년 11월 21일
                              </p>
                         </div>
                    </div>
                    <div className="badge-element-style">
                         <img
                              className="badge-element-img-style"
                              src="icons/badge/frame.png"
                              alt="badges"
                         />
                         <div className="badges-info-style">
                              <p className="badges-name">Lv. 1 산악인</p>
                              <p className="badges-day">
                                   취득일자 : 2022년 11월 21일
                              </p>
                         </div>
                    </div>
                    <div className="badge-element-style">
                         <img
                              className="badge-element-img-style"
                              src="icons/badge/frame.png"
                              alt="badges"
                         />
                         <div className="badges-info-style">
                              <p className="badges-name">Lv. 1 산악인</p>
                              <p className="badges-day">
                                   취득일자 : 2022년 11월 21일
                              </p>
                         </div>
                    </div>
                    <div className="badge-element-style">
                         <img
                              className="badge-element-img-style"
                              src="icons/badge/frame.png"
                              alt="badges"
                         />
                         <div className="badges-info-style">
                              <p className="badges-name">Lv. 1 산악인</p>
                              <p className="badges-day">
                                   취득일자 : 2022년 11월 21일
                              </p>
                         </div>
                    </div>
                    <div className="badge-element-style">
                         <img
                              className="badge-element-img-style"
                              src="icons/badge/frame.png"
                              alt="badges"
                         />
                         <div className="badges-info-style">
                              <p className="badges-name">Lv. 1 산악인</p>
                              <p className="badges-day">
                                   취득일자 : 2022년 11월 21일
                              </p>
                         </div>
                    </div>
               </div>
          </STBadgeContainer>
     );
};

export default Badges;

const STBadgeContainer = styled.div`
     box-sizing: border-box;
     padding: 40px 0 20px 40px;
     width: 1062px;
     height: 100%;
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     gap: 5%;
     .badges-title-style {
          font-size: 24px;
          font-weight: 500;
          padding: 10px 0;
     }
     .badges-list-style {
          display: flex;
          flex-wrap: wrap;
          gap: 1vh;
          width: 100%;

          .badge-element-style {
               width: 332px;
               height: 236px;
               background-color: white;
               padding: 10px;
               display: flex;
               flex-direction: column;
               justify-content: center;
               align-items: center;
               box-sizing: border-box;
               .badge-element-img-style {
                    width: 132px;
                    height: 132px;
                    padding: 15px;
                    box-sizing: border-box;
               }
               .badges-info-style {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    font-size: 20px;
                    .badges-day {
                         font-size: 18px;
                         color: var(--color-border);
                    }
               }
          }
     }
`;
