import styled from "styled-components";

const Mountain = ({ mountain }) => {
     return (
          <StMountainWrap>
               <div className="mountain-element">
                    <img
                         src={mountain.img}
                         className="mountain-img"
                         alt="mountain"
                    />
                    <div className="mountain-element-info">
                         <span className="mountain-element-name">
                              {mountain.name}
                         </span>
                         <p className="mountain-element-like-total">
                              <img
                                   alt=""
                                   className="heartImg"
                                   src="/icons/icon_redheart.png"
                              />
                              &nbsp;
                              <span> {mountain.mountainLikeTotal}+</span>
                         </p>
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
     margin-top: 40px;
     padding: 10px 0;
     width: 100%;
     height: 100%;
     .mountain-element {
          height: 240px;
          width: 100%;
          margin-bottom: 1%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          .mountain-img {
               position: absolute;
               width: 100%;
               height: 100%;
               object-fit: cover;
               object-position: 30% center;
               z-index: 0;
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
                    display: flex;
                    align-items: center;
                    font-size: 24px;
                    .heartImg {
                         width: 24px;
                         height: 24px;
                    }
               }
          }
          .mountain-element-quiz {
               z-index: 1;
               display: flex;
               justify-content: flex-end;
               align-items: flex-end;
               padding: 20px;
               box-sizing: border-box;
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
