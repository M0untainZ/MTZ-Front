import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getMountains } from "../../redux/modules/mountainsSlice";
import SearchMt from "./SearchMt";
import Mountain from "./Mountain";

const MtList = () => {
     const dispatch = useDispatch();

     const { mountains } = useSelector((state) => state.mountains);

     console.log("test", mountains);

     useEffect(() => {
          dispatch(__getMountains());
     }, [dispatch]);

     return (
          <StMTList>
               <SearchMt />
               {mountains.data?.map((mountain, index) => {
                    return (
                         <div key={index}>
                              <Mountain mountain={mountain} />
                         </div>
                    );
               })}
          </StMTList>
     );
};
export default MtList;

const StMTList = styled.div`
     padding: 20px 0;
     width: 74%;
     height: 100%;
     display: flex;
     flex-direction: column;
     align-items: flex-end;
     gap: 5%;
     div {
          width: 100%;
     }
`;
