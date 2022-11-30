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
                              <p className="badges-name">
                                   💪 Lv. 1 산을 알아가는 뉴비
                              </p>
                              <p className="badges-info-day">
                                   MTZ에 오신 것을 환영합니다! <br />
                                   다른 뱃지를 모아 프로 산악인으로
                                   거듭나보세요.
                              </p>
                              <p className="badges-info-day">
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
                              <p className="badges-name">
                                   💪 Lv. 1 산을 알아가는 뉴비
                              </p>
                              <p className="badges-info-day">
                                   MTZ에 오신 것을 환영합니다! <br />
                                   다른 뱃지를 모아 프로 산악인으로
                                   거듭나보세요.
                              </p>
                              <p className="badges-info-day">
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
                              <p className="badges-name">
                                   💪 Lv. 1 산을 알아가는 뉴비
                              </p>
                              <p className="badges-info-day">
                                   MTZ에 오신 것을 환영합니다! <br />
                                   다른 뱃지를 모아 프로 산악인으로
                                   거듭나보세요.
                              </p>
                              <p className="badges-info-day">
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
                              <p className="badges-name">
                                   💪 Lv. 1 산을 알아가는 뉴비
                              </p>
                              <p className="badges-info-day">
                                   MTZ에 오신 것을 환영합니다! <br />
                                   다른 뱃지를 모아 프로 산악인으로
                                   거듭나보세요.
                              </p>
                              <p className="badges-info-day">
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
                              <p className="badges-name">
                                   💪 Lv. 1 산을 알아가는 뉴비
                              </p>
                              <p className="badges-info-day">
                                   MTZ에 오신 것을 환영합니다! <br />
                                   다른 뱃지를 모아 프로 산악인으로
                                   거듭나보세요.
                              </p>
                              <p className="badges-info-day">
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
                              <p className="badges-name">
                                   💪 Lv. 1 산을 알아가는 뉴비
                              </p>
                              <p className="badges-info-day">
                                   MTZ에 오신 것을 환영합니다! <br />
                                   다른 뱃지를 모아 프로 산악인으로
                                   거듭나보세요.
                              </p>
                              <p className="badges-info-day">
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
                              <p className="badges-name">
                                   💪 Lv. 1 산을 알아가는 뉴비
                              </p>
                              <p className="badges-info-day">
                                   MTZ에 오신 것을 환영합니다! <br />
                                   다른 뱃지를 모아 프로 산악인으로
                                   거듭나보세요.
                              </p>
                              <p className="badges-info-day">
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
                              <p className="badges-name">
                                   💪 Lv. 1 산을 알아가는 뉴비
                              </p>
                              <p className="badges-info-day">
                                   MTZ에 오신 것을 환영합니다! <br />
                                   다른 뱃지를 모아 프로 산악인으로
                                   거듭나보세요.
                              </p>
                              <p className="badges-info-day">
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
                              <p className="badges-name">
                                   💪 Lv. 1 산을 알아가는 뉴비
                              </p>
                              <p className="badges-info-day">
                                   MTZ에 오신 것을 환영합니다! <br />
                                   다른 뱃지를 모아 프로 산악인으로
                                   거듭나보세요.
                              </p>
                              <p className="badges-info-day">
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
                              <p className="badges-name">
                                   💪 Lv. 1 산을 알아가는 뉴비
                              </p>
                              <p className="badges-info-day">
                                   MTZ에 오신 것을 환영합니다! <br />
                                   다른 뱃지를 모아 프로 산악인으로
                                   거듭나보세요.
                              </p>
                              <p className="badges-info-day">
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
     padding: 40px 0 20px 0;
     width: 1046px;
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
          justify-content: flex-start;
          gap: 1vh;

          .badge-element-style {
               width: 511px;
               height: 180px;
               background-color: white;
               padding: 10px;
               display: flex;
               justify-content: space-evenly;
               align-items: center;
               box-sizing: border-box;
               .badge-element-img-style {
                    width: 120px;
                    height: 120px;
                    box-sizing: border-box;
               }
               .badges-info-style {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: space-evenly;
                    font-size: 20px;
                    width: fit-content;
                    height: 120px;
                    .badges-name {
                         font-size: 20px;
                    }
                    .badges-info-day {
                         font-size: 16px;
                         color: var(--color-border);
                         :nth-child(2) {
                              color: #000;
                         }
                    }
               }
          }
     }
`;
