import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getMountains } from "../../redux/modules/mountainsSlice";
import SearchMt from "./SearchMt";
import Mountain from "./Mountain";

const MtList = () => {
     const dispatch = useDispatch();

     const { mountains } = useSelector((state) => state.mountains);

     console.log(mountains.data);

     useEffect(() => {
          dispatch(__getMountains());
     }, [dispatch]);

     return (
          <StMTList>
               <SearchMt />

               <div>
                    {mountains.data &&
                         mountains.data.map((mountain, index) => {
                              return (
                                   <div key={index}>
                                        <Mountain mountain={mountain} />
                                   </div>
                              );
                         })}
               </div>
          </StMTList>
     );
};
export default MtList;

const StMTList = styled.div`
     padding: 20px 0;
     width: 1046px;
     height: 100%;
     display: flex;
     flex-direction: column;
     align-items: flex-end;
     gap: 5%;
     .mountain-element-style {
          background-position: center;
          background-size: cover;
          height: 240px;
          width: 100%;
          margin-bottom: 3%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .mountain-element-info-style {
               box-sizing: border-box;
               height: 76px;
               display: flex;
               align-items: center;
               justify-content: space-between;
               background-color: rgba(255, 255, 255, 0.7);
               padding: 0 20px;
               font-size: 30px;
               .mountain-element-name-style {
                    font-weight: bold;
               }
               .mountain-element-like-total-style {
                    font-size: 24px;
               }
          }
          .mountain-element-quiz-style {
               display: flex;
               justify-content: flex-end;
               padding: 20px;
               .mountain-element-quiz-btn-style {
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
