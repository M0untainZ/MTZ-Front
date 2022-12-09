import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { __postSearchMountains } from "../../redux/modules/mountainsSlice";
import FilterResult from "./FilterResult";

const SearchMt = () => {
  const dispatch = useDispatch();

  //검색기능
  const [keyword, setKeyword] = useState("");

  //검색기능 onChange
  const onChangeSearch = (e) => {
    const { name, value } = e.target;
    setKeyword({ ...keyword, [name]: value });
  };
  //검색한 산 리스트 불러오기
  const onClickSearch = () => {
    dispatch(__postSearchMountains(keyword));
  };
  //검색한 산 리스트 불러오기(Enter키로 입력)
  const onSearchEnter = (e) => {
    if (e.key === "Enter") {
      onClickSearch();
    }
  };

  console.log(keyword);
  return (
    <StSearchMT>
      <div>
        <input
          className="search-input"
          name="keyword"
          type="text"
          placeholder="궁금하신 산을 검색해주세요"
          onChange={onChangeSearch}
          onKeyPress={onSearchEnter}
        />
        <button className="search-btn" onClick={onClickSearch}>
          <BiSearch />
        </button>
      </div>
      <FilterResult />
    </StSearchMT>
  );
};

export default SearchMt;

const StSearchMT = styled.div`
  padding: 20px 0;
  width: 50%;
  height: 5.4vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  position: relative;
  div {
    width: 525px;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    .search-input {
      width: 525px;
      height: 50px;
      padding: 0 25px 0 40px;
      box-sizing: border-box;
      border: 2px solid var(--color-border);
      position: relative;
    }
    .search-btn {
      padding: 0 10px;
      position: absolute;
      left: 0;
      display: flex;
      align-items: center;
      font-size: 25px;
      background-color: transparent;
      border: none;
    }
  }
`;
