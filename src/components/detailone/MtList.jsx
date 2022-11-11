import styled from "styled-components";

const MtList = () => {
     return (
          <StMTList>
               <div className="mountain-element-style">
                    <span className="mountain-element-name-style">이름</span>
                    <div className="mountain-element-info-style">
                         <button className="mountain-element-quiz-btn-style">
                              퀴즈
                         </button>
                         <span className="mountain-element-like-total-style">
                              좋아요
                         </span>
                    </div>
               </div>
               <div className="mountain-element-style">
                    <span className="mountain-element-name-style">이름</span>
                    <div className="mountain-element-info-style">
                         <button className="mountain-element-quiz-btn-style">
                              퀴즈
                         </button>
                         <span className="mountain-element-like-total-style">
                              좋아요
                         </span>
                    </div>
               </div>
               <div className="mountain-element-style">
                    <span className="mountain-element-name-style">이름</span>
                    <div className="mountain-element-info-style">
                         <button className="mountain-element-quiz-btn-style">
                              퀴즈
                         </button>
                         <span className="mountain-element-like-total-style">
                              좋아요
                         </span>
                    </div>
               </div>
               <div className="mountain-element-style">
                    <span className="mountain-element-name-style">이름</span>
                    <div className="mountain-element-info-style">
                         <button className="mountain-element-quiz-btn-style">
                              퀴즈
                         </button>
                         <span className="mountain-element-like-total-style">
                              좋아요
                         </span>
                    </div>
               </div>
          </StMTList>
     );
};
export default MtList;

// const STMTListContainer = styled.div`
//      width: 100%;
//      min-height: 90vh;
//      height: 100%;
//      display: flex;
//      flex-direction: column;
//      align-items: center;
//      justify-content: flex-start;
//      padding: 20px;
//      box-sizing: border-box;
//      position: relative;
//      .gotoup-btn {
//           position: absolute;
//           width: 50px;
//           height: 20px;
//           bottom: 5%;
//           right: -8%;
//           background-color: red;
//      }
// `;

const StMTList = styled.div`
     padding: 20px 0;
     width: 100%;
     height: 100%;
     display: flex;
     flex-direction: column;
     justify-content: flex-start;
     gap: 5%;
     .mountain-element-style {
          background-color: var(--color-darktone);
          height: 20vh;
          margin-bottom: 3%;
          padding: 20px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .mountain-element-info-style {
               display: flex;
               justify-content: flex-end;
               gap: 3%;
          }
     }
`;
