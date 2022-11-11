import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../../common/modal/Modal";

const MountModal = () => {
  const [modal, setModal] = useState(false);
  const ModalSwitch = () => {
    setModal(!modal);
  };

  return (
    <>
      <div>
        <button onClick={ModalSwitch}>인증하기</button>
        {modal && (
          <Modal
            open={modal}
            onClose={() => {
              setModal(false);
            }}
          >
            <StModalBox>
              <div className="titleBox">
                <div>등산 갔음???</div>
              </div>
              <div className="imgBox">
                인증 사진
                <img></img>
              </div>
              <div className="addBox">
                <button>사진 추가하기</button>
              </div>
              <div className="buttonBox">
                <button
                  className="cancelButton"
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  취소
                </button>
                <button className="addButton">등록</button>
              </div>
            </StModalBox>
          </Modal>
        )}
      </div>
    </>
  );
};

export default MountModal;

const StModalBox = styled.div`
  text-align: center;
  padding-top: 3%;
  .titleBox {
    margin-bottom: 5%;
    font-size: xx-large;
  }
  .imgBox {
    height: 25vh;
    border: 1px solid;
  }
  .addBox {
    button {
      width: 100%;
      margin-top: 5%;
      border: 0.5px solid;
    }
  }
  .buttonBox {
    width: 40%;
    margin-left: 60%;
    margin-top: 10%;
    .cancelButton {
      width: 40%;
      border: 0.5px solid;
    }
    .addButton {
      margin-left: 15%;
      width: 40%;
      border: 0.5px solid;
    }
  }
`;
