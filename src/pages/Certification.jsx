import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProofList from "../components/certification/ProofList";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Certification = () => {
     const token = sessionStorage.getItem("Access_Token");
     const navigate = useNavigate();
     const MySwal = withReactContent(Swal)
     const onRedirectLogin = () => {
          MySwal.fire({
               text: "인증게시판은 회원만 이용할 수 있습니다.",
               icon: "error",
               confirmButtonText: "확인",
               background: "#ffffff",
               confirmButtonColor: "#185B6E",
          }).then((result) => {
               if (result.isConfirmed || result.isDismissed) {
                   navigate("/login")
               } 
          })
     }

     return (
          <>
          {(token !== null) ?
               <StCertification>
                    <ProofList />
               </StCertification> :
               <StNotCertification>
                    <Fragment onClick={onRedirectLogin()}></Fragment>
               </StNotCertification>
          }
          </>
     );
};

export default Certification;

const StCertification = styled.div`
     max-width: 100%;
     height: 100%;
     display: flex;
     justify-content: center;
     margin-top: 30px;
     position: relative;
     margin-top: 9vh;
`;

const StNotCertification = styled.div`
     max-width: 100%;
     height: 90vh;
     display: flex;
     justify-content: center;
     align-items: center;
     margin-top: 30px;
     position: relative;
`;
