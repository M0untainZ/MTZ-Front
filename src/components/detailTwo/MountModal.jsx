import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { __imgPost } from "../../redux/modules/twoSlice";
import DetailTwoModal from "./modal/detailTwoModal";

const MountModal = () => {
     const dispatch = useDispatch();
     const mountId = useParams();
     const id = Number(mountId.id);
     const [modal, setModal] = useState(false);
     const [selectImg, setSelectImg] = useState(false);
     const [imgSave, setImgSave] = useState("");

     //이미지 파일 한장 업로드
     const saveFileImage = (e) => {
          setImgSave(URL.createObjectURL(e.target.files[0]));
          setSelectImg(!selectImg);
     };
     //이미지 파일 삭제
     const deleteFileImage = () => {
          URL.revokeObjectURL(imgSave);
          setSelectImg("");
     };
     const postImg = () => {
          const formData = new FormData();
          formData.append("photo", imgSave);
          dispatch(__imgPost({ imgSave: imgSave, id: id }));
     };

     // const postImg = () => {
     //   const image = document.getElementById("file");
     //   console.log(image, "imag");
     //   let formData = new FormData();
     //   formData.append("file", image.files[0]);
     //   dispatch(__imgPost(formData));
     // };

     const ModalSwitch = () => {
          setModal(!modal);
     };

     return (
          <>
               <StDiv>
                    <StButton onClick={ModalSwitch}>등산 인증하기</StButton>
                    {modal && (
                         <DetailTwoModal
                              open={modal}
                              onClose={() => {
                                   setModal(false);
                              }}
                         >
                              <StModalBox>
                                   <div className="titleBox">
                                        <div>당신의 등산을 인증해주세요</div>
                                        <div className="logo">
                                             하단의 [사진 등록하기]를 눌러
                                             사진을 고른 뒤,
                                        </div>
                                        <div className="logo">
                                             [인증하기] 버튼을 눌러 업로드하면
                                             인증 완료!
                                        </div>
                                   </div>
                                   {selectImg ? (
                                        <div className="fileBox">
                                             <div
                                                  className="deleteImg"
                                                  onClick={() =>
                                                       deleteFileImage()
                                                  }
                                             ></div>
                                             <img
                                                  className="prev-img"
                                                  alt=""
                                                  src={
                                                       imgSave
                                                            ? imgSave
                                                            : "image/no_img.png"
                                                  }
                                             />
                                        </div>
                                   ) : (
                                        <div className="fileBox">
                                             <label
                                                  className="uploadBox"
                                                  for="file"
                                             >
                                                  <div className="btn-upload"></div>
                                                  <div className="logo">
                                                       사진 등록하기
                                                  </div>
                                             </label>
                                             <input
                                                  type="file"
                                                  multiple
                                                  className="file"
                                                  id="file"
                                                  accept="image/*"
                                                  onChange={saveFileImage}
                                             />
                                        </div>
                                   )}

                                   <div className="buttonBox">
                                        <button
                                             className="addButton"
                                             onClick={postImg}
                                        >
                                             인증하기
                                        </button>
                                        <button
                                             className="cancelButton"
                                             onClick={() => {
                                                  setModal(false);
                                             }}
                                        >
                                             취소하기
                                        </button>
                                   </div>
                              </StModalBox>
                         </DetailTwoModal>
                    )}
               </StDiv>
          </>
     );
};

export default MountModal;

const StDiv = styled.div`
     .modalBox {
     }
`;

const StButton = styled.button`
     border: 1px solid white;
     border-radius: 5px;
     height: 30px;
     padding-left: 10px;
     padding-right: 10px;
     color: white;
     background-color: rgba(255, 255, 255, 0.2);
`;

const StModalBox = styled.div`
     text-align: center;
     padding-top: 3%;
     font-weight: bold;
     .titleBox {
          margin-bottom: 10%;
          font-size: large;
          .logo {
               font-size: x-small;
          }
     }
     .fileBox {
          height: 30vh;
          width: 40vh;
          background-color: #d9d9d9;
          display: flex;
          justify-content: center;
          .deleteImg {
               background-image: url("/icons/icon_cancel.png");
               background-color: rgba(0, 0, 0, 0);
               width: 24px;
               height: 24px;
               cursor: pointer;
               position: absolute;
               margin-left: 83%;
          }
          .prev-img {
               object-fit: cover;
               overflow: hidden;
               height: 30vh;
          }
          .uploadBox {
               height: 12%;
               margin: auto;
          }
          .btn-upload {
               width: 40px;
               height: 40px;
               background-image: url("/icons/selectPicture.png");
               cursor: pointer;
               margin: auto;
          }
          .logo {
               font-size: small;
               cursor: pointer;
               margin-top: 10%;
          }
          .file {
               display: none;
          }
     }

     .buttonBox {
          width: 80%;
          margin-left: 25%;
          margin-top: 5%;
          .cancelButton {
               width: 40%;
               border-radius: 7px;
               border: 0.5px solid;
               margin-left: 5%;
          }
          .addButton {
               width: 40%;
               border-radius: 7px;
               border: 0.5px solid;
          }
     }
`;
