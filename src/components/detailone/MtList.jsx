import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
     __getMountains,
     __postFilterMountains,
} from "../../redux/modules/mountainsSlice";
import SearchMt from "./SearchMt";
import Mountain from "./Mountain";
import { useNavigate } from "react-router-dom";

const MtList = () => {
     const dispatch = useDispatch();
     const { mountains } = useSelector((state) => state.mountains);
     const { filter } = useSelector((state) => state.mountains);

     const initialState = {};

     useEffect(() => {
          dispatch(__getMountains());
          dispatch(__postFilterMountains(initialState));
     }, [dispatch]);

     return (
          <StMTList>
               <SearchMt />
               <div className="mtlist-side">
                    {mountains.data?.map((mountain, index) => {
                         return <Mountain mountain={mountain} key={index} />;
                    })}
               </div>
          </StMTList>
     );
};
export default MtList;

const StMTList = styled.div`
     padding: 20px 0;
     width: 1080px;
     height: 100%;
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     gap: 5%;
     box-sizing: border-box;
     .mtlist-side {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          gap: 4vh;
     }
`;
