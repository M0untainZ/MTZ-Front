import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Mountain = ({ mountain }) => {
     const navigate = useNavigate();

     return (
          <StMountainWrap>
               <div
                    className="mountain-element"
                    onClick={() => {
                         navigate(`/detail/${mountain.id}`);
                    }}
               >
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
               </div>
          </StMountainWrap>
     );
};

export default Mountain;

const StMountainWrap = styled.div`
     padding: 5px 0;
     height: 100%;
     width: 48%;
     display: flex;
     flex-wrap: wrap;
     justify-content: flex-start;
     z-index: 0;
     :first-child,
     :nth-child(2) {
          margin-top: 50px;
     }
     .mountain-element {
          height: 25.5vh;
          width: 100%;
          margin-bottom: 1%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          position: relative;
          cursor: pointer;

          :hover {
               transform: scale(1.04);
               border: 3px solid #fff;
               z-index: 3;
          }
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
               height: 48px;
               display: flex;
               align-items: center;
               justify-content: space-between;
               background-color: rgba(255, 255, 255, 0.7);
               padding: 0 20px;
               font-size: 26px;

               .mountain-element-name {
                    font-weight: bold;
               }
               .mountain-element-like-total {
                    display: flex;
                    align-items: center;
                    font-size: 20px;
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
