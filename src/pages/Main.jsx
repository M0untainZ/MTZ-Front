import React, { useState } from "react";
import ProofImage from "../components/main/ProofImage";
import RecommendCourse from "../components/main/RecommendCourse";
import UserRanking from "../components/main/UserRanking";
import Weather from "../components/main/Weather";
import NoticeModal from "../components/main/noticeModal/NoticeModal";

const Main = () => {
     const [modal, setModal] = useState(true);
     const onCloseHandler = () => {
          setModal(false);
        }
     return (
          <>
               <Weather />
               <UserRanking />
               <RecommendCourse />
               <ProofImage />
               {modal && (
               <NoticeModal
                    onClose={onCloseHandler}
               ></NoticeModal> )}
          </>
     );
};

export default Main;
