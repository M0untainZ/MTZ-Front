import styled from "styled-components";

const Mountain = ({ mountain }) => {
     return (
          <StMountainWrap>
               <div className="mountain-element">
                    <img src={mountain.img} alt="mountain" />
                    <div className="mountain-element-info">
                         <span className="mountain-element-name">
                              {mountain.name}
                         </span>
                         <span className="mountain-element-like-total">
                              ❤<span>+{mountain.mountainLikeTotal}</span>
                         </span>
                    </div>
                    <div className="mountain-element-quiz">
                         <button className="mountain-element-quiz-btn">
                              Q
                         </button>
                    </div>
               </div>
          </StMountainWrap>
     );
};

export default Mountain;

const StMountainWrap = styled.div`
     padding: 20px 0;
     width: 100%;
     height: 100%;
     .mountain-element {
          background-position: center;
          background-size: cover;
          height: 300px;
          width: 100%;
          margin-bottom: 3%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          img {
               position: absolute;
               width: 100%;
               /* height: fit-content;
               object-fit: cover; */
               z-index: 0;
               bottom: 30%;
          }
          .mountain-element-info {
               z-index: 1;
               box-sizing: border-box;
               height: 76px;
               display: flex;
               align-items: center;
               justify-content: space-between;
               background-color: rgba(255, 255, 255, 0.7);
               padding: 0 20px;
               font-size: 30px;

               .mountain-element-name {
                    font-weight: bold;
               }
               .mountain-element-like-total {
                    font-size: 24px;
               }
          }
          .mountain-element-quiz {
               z-index: 1;
               display: flex;
               justify-content: flex-end;
               padding: 20px;
               .mountain-element-quiz-btn {
                    width: 60px;
                    height: 60px;
                    font-size: 24px;
                    font-weight: 500;
                    background-color: rgba(255, 255, 255, 0.7);
                    border: none;
                    border-radius: 50%;
               }
          }
     }
`;
