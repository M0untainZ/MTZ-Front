import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __infiniteScroll } from "../../redux/modules/mountainsSlice";
import SearchMt from "./SearchMt";
import Mountain from "./Mountain";
import { useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

const MtList = () => {
  const dispatch = useDispatch();
  const reftest = useRef();

  const [page, setPage] = useState(0);
  const [reff, inView] = useInView();

  const { mountains, filterDataState } = useSelector(
    (state) => state.mountains
  );

  //infinite scroll
  const getItems = useCallback(() => {
    dispatch(__infiniteScroll(page));
  }, [page, dispatch]);

  useEffect(() => {
    if (!filterDataState) {
      getItems(page);
    }
  }, [getItems]);

  useEffect(() => {
    if (inView) {
      setPage((prevState) => prevState + 1);
    }
  }, [inView]);

  return (
    <StMTList>
      <SearchMt />
      <div className="mtlist-side">
        {mountains.map((mountain, idx) => {
          return (
            <div className="mountains" key={idx}>
              <Mountain mountain={mountain} />
              <div ref={reff} className="Target-Element"></div>
            </div>
          );
        })}
      </div>
    </StMTList>
  );
};
export default MtList;

const StMTList = styled.div`
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
    padding: 40px 0;
    .mountains {
      height: 100%;
      width: 48%;
    }
  }
`;
