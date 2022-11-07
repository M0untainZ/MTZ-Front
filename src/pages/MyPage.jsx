import React from "react";
import styled from "styled-components";

const MyPage = () => {
     return (
          <STMypageContainer>
               <STProfile>
                    <div className="profile-badge-style">이미지</div>
                    <div className="profile-info-style">
                         <div>닉네임</div>
                         <div>지역</div>
                         <div className="profile-edit-style">
                              <button>프로필 수정</button>
                              <button>로그아웃</button>
                         </div>
                    </div>
               </STProfile>
               <STBadgeContainer>
                    <div className="badge-element-style">
                         <div className="badge-element-img-style">뱃지그림</div>
                         <div className="badge-element-name-style">
                              뱃지이름
                         </div>
                    </div>
                    <div className="badge-element-style">
                         <div className="badge-element-img-style">뱃지그림</div>
                         <div className="badge-element-name-style">
                              뱃지이름
                         </div>
                    </div>
                    <div className="badge-element-style">
                         <div className="badge-element-img-style">뱃지그림</div>
                         <div className="badge-element-name-style">
                              뱃지이름
                         </div>
                    </div>
                    <div className="badge-element-style">
                         <div className="badge-element-img-style">뱃지그림</div>
                         <div className="badge-element-name-style">
                              뱃지이름
                         </div>
                    </div>
                    <div className="badge-element-style">
                         <div className="badge-element-img-style">뱃지그림</div>
                         <div className="badge-element-name-style">
                              뱃지이름
                         </div>
                    </div>
                    <div className="badge-element-style">
                         <div className="badge-element-img-style">뱃지그림</div>
                         <div className="badge-element-name-style">
                              뱃지이름
                         </div>
                    </div>
                    <div className="badge-element-style">
                         <div className="badge-element-img-style">뱃지그림</div>
                         <div className="badge-element-name-style">
                              뱃지이름
                         </div>
                    </div>
                    <div className="badge-element-style">
                         <div className="badge-element-img-style">뱃지그림</div>
                         <div className="badge-element-name-style">
                              뱃지이름
                         </div>
                    </div>
                    <div className="badge-element-style">
                         <div className="badge-element-img-style">뱃지그림</div>
                         <div className="badge-element-name-style">
                              뱃지이름
                         </div>
                    </div>
                    <div className="badge-element-style">
                         <div className="badge-element-img-style">뱃지그림</div>
                         <div className="badge-element-name-style">
                              뱃지이름
                         </div>
                    </div>
                    <div className="badge-element-style">
                         <div className="badge-element-img-style">뱃지그림</div>
                         <div className="badge-element-name-style">
                              뱃지이름
                         </div>
                    </div>
                    <div className="badge-element-style">
                         <div className="badge-element-img-style">뱃지그림</div>
                         <div className="badge-element-name-style">
                              뱃지이름
                         </div>
                    </div>
               </STBadgeContainer>
          </STMypageContainer>
     );
};

export default MyPage;

const STMypageContainer = styled.div`
     width: 100%;
     min-height: 90vh;
     height: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: flex-start;
     padding: 20px;
     box-sizing: border-box;
     gap: 4vh;
`;

const STProfile = styled.div`
     width: 95vh;
     height: 20vh;
     display: flex;
     justify-content: center;
     padding: 20px;
     gap: 5%;
     font-size: 22px;
     background-color: var(--color-midtone);
     .profile-badge-style {
          width: 20vh;
          height: 20vh;
          padding: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
     }
     .profile-info-style {
          width: 60%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5%;
          div {
               display: flex;
               align-items: center;
               box-sizing: border-box;
               padding: 12px 20px;
               width: 100%;
               height: 5vh;
          }
          .profile-edit-style {
               width: 100%;
               height: 7vh;
               display: flex;
               justify-content: space-between;
               align-items: flex-start;
               button:first-child {
                    margin-top: 10px;
                    font-size: 18px;
               }
          }
     }
`;

const STBadgeContainer = styled.div`
     background-color: blue;
     width: 100vh;
     height: 50vh;
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     align-items: center;
     padding: 20px;
     gap: 3%;
     font-size: 22px;
     background-color: var(--color-midtone);
     .badge-element-style {
          width: 12vh;
          height: 18vh;
          background-color: var(--color-darktone);
          padding: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-bottom: 3%;
          .badge-element-img-style {
               width: 12vh;
               height: 12vh;
               background-color: var(--color-point);
          }
          .badge-element-name-style {
               width: 12vh;
               height: 4vh;
               background-color: var(--color-point);
          }
     }
`;
