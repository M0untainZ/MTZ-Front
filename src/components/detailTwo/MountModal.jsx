import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { __imgPost, isImgCorrectBadge } from "../../redux/modules/twoSlice";
import DetailTwoModal from "./detailtwoModal/modal/detailTwoModal";
import BadgeModal from "./badgeModal/badgeModal";
import imageCompression from "browser-image-compression";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const MountModal = () => {
  const dispatch = useDispatch();
  const mountId = useParams();
  const { imgCorrectBadge } = useSelector((state) => state.twoSlice);
  const id = Number(mountId.id);
  const token = sessionStorage.getItem("Access_Token");
  const [modal, setModal] = useState(false);
  const [badgeModal, setBadgeModal] = useState(false);
  const [selectImg, setSelectImg] = useState(false);
  const [imgSave, setImgSave] = useState("");
  const [post_Img, setPost_Img] = useState("");
  //이미지 파일 한장 업로드

  const saveFileImage = (e) => {
    setImgSave(URL.createObjectURL(e.target.files[0]));
    setPost_Img(e.target.files[0]);
    setSelectImg(!selectImg);
    console.log("압축 전", e.target.files[0]);
  };
  //이미지 파일 삭제
  const deleteFileImage = () => {
    URL.revokeObjectURL(imgSave);
    setSelectImg("");
  };
  const postImg = async (fileSrc) => {
    const options = {
      maxSizeMB: 1, // 허용하는 최대 사이즈 지정
      maxWidthOrHeight: 1920, // 허용하는 최대 width, height 값 지정
      useWebWorker: true, // webworker 사용 여부
    };
    try {
      const reader = new FileReader();
      const imgFile = await imageCompression(post_Img, options);
      console.log("압축 후", imgFile);
      reader.readAsDataURL(imgFile);
      reader.onloadend = () => {
        const base64data = reader.result;
        setPost_Img(base64data);
        handlingDataForm(base64data);
      };
    } catch (error) {}
  };

  const handlingDataForm = async (dataURI) => {
    const byteString = atob(dataURI.split(",")[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ia], {
      type: "image/jpeg",
    });
    const file = new File([blob], "image.jpg");
    const formData = new FormData();
    formData.append("photo", file);
    dispatch(__imgPost({ formData, id: id }));
    setModal(!modal);
    setSelectImg(false);
    toast.success("사진이 등록되었습니다.", {
      autoClose: 1500,
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const ModalSwitch = () => {
    if (token) {
      setModal(!modal);
    } else {
      toast.error("로그인이 필요한 기능입니다.", {
        autoClose: 1500,
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  useEffect(() => {
    console.log(imgCorrectBadge);
    if (imgCorrectBadge) {
      setBadgeModal(!badgeModal);
      dispatch(isImgCorrectBadge());
    }
    // eslint-disable-next-line
  }, [imgCorrectBadge]);

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
                  하단의 [사진 등록하기]를 눌러 사진을 고른 뒤,
                </div>
                <div className="logo">
                  [인증하기] 버튼을 눌러 업로드하면 인증 완료!
                </div>
              </div>
              {selectImg ? (
                <div className="fileBox">
                  <div
                    className="deleteImg"
                    onClick={() => deleteFileImage()}
                  ></div>
                  <img
                    className="prev-img"
                    alt=""
                    src={imgSave ? imgSave : "image/no_img.png"}
                  />
                </div>
              ) : (
                <div className="fileBox">
                  <label className="uploadBox" htmlFor="file">
                    <div className="btn-upload"></div>
                    <div className="logo">사진 등록하기</div>
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
                <button className="addButton" onClick={postImg}>
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
        {badgeModal && (
          <BadgeModal
            open={modal}
            onClose={() => {
              setBadgeModal(false);
            }}
          ></BadgeModal>
        )}
        <ToastContainer />
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
  border-radius: 2px;
  height: 40px;
  width: 37vh;
  margin-right: 27vh;
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
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
