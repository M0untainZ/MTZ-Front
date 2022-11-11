import React from "react";
import BtnUpside from "../components/detailone/BtnUpside";
import FilterMt from "../components/detailone/FilterMt";
import MtList from "../components/detailone/MtList";
import SearchMt from "../components/detailone/SearchMt";

const DetailOne = () => {
     return (
          <>
               <SearchMt />
               <FilterMt />
               <MtList />
               <BtnUpside />
          </>
     );
};

export default DetailOne;
