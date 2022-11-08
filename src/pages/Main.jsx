import React from "react";
import ProofImage from "../components/main/ProofImage";
import RecommendCourse from "../components/main/RecommendCourse";
import UserRanking from "../components/main/UserRanking";
import Weather from "../components/main/Weather";

const Main = () => {
     return (
          <>
               <Weather />
               <UserRanking />
               <RecommendCourse />
               <ProofImage />
          </>
     );
};

export default Main;
