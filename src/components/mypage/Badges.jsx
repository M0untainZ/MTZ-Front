import styled from "styled-components";

const Badges = () => {
     return (
          <STBadgeContainer>
               <div className="badge-element-style">
                    <div className="badge-element-img-style">뱃지그림</div>
                    <div className="badge-element-name-style">뱃지이름</div>
               </div>
               <div className="badge-element-style">
                    <div className="badge-element-img-style">뱃지그림</div>
                    <div className="badge-element-name-style">뱃지이름</div>
               </div>
               <div className="badge-element-style">
                    <div className="badge-element-img-style">뱃지그림</div>
                    <div className="badge-element-name-style">뱃지이름</div>
               </div>
               <div className="badge-element-style">
                    <div className="badge-element-img-style">뱃지그림</div>
                    <div className="badge-element-name-style">뱃지이름</div>
               </div>
               <div className="badge-element-style">
                    <div className="badge-element-img-style">뱃지그림</div>
                    <div className="badge-element-name-style">뱃지이름</div>
               </div>
               <div className="badge-element-style">
                    <div className="badge-element-img-style">뱃지그림</div>
                    <div className="badge-element-name-style">뱃지이름</div>
               </div>
               <div className="badge-element-style">
                    <div className="badge-element-img-style">뱃지그림</div>
                    <div className="badge-element-name-style">뱃지이름</div>
               </div>
               <div className="badge-element-style">
                    <div className="badge-element-img-style">뱃지그림</div>
                    <div className="badge-element-name-style">뱃지이름</div>
               </div>
               <div className="badge-element-style">
                    <div className="badge-element-img-style">뱃지그림</div>
                    <div className="badge-element-name-style">뱃지이름</div>
               </div>
               <div className="badge-element-style">
                    <div className="badge-element-img-style">뱃지그림</div>
                    <div className="badge-element-name-style">뱃지이름</div>
               </div>
               <div className="badge-element-style">
                    <div className="badge-element-img-style">뱃지그림</div>
                    <div className="badge-element-name-style">뱃지이름</div>
               </div>
               <div className="badge-element-style">
                    <div className="badge-element-img-style">뱃지그림</div>
                    <div className="badge-element-name-style">뱃지이름</div>
               </div>
          </STBadgeContainer>
     );
};

export default Badges;

const STBadgeContainer = styled.div`
     background-color: blue;
     width: 100vh;
     height: 50vh;
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     align-items: center;
     padding: 20px;
     gap: 3%;
     font-size: 22px;
     background-color: var(--color-midtone);
     .badge-element-style {
          width: 12vh;
          height: 18vh;
          background-color: var(--color-darktone);
          padding: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-bottom: 3%;
          .badge-element-img-style {
               width: 12vh;
               height: 12vh;
               background-color: var(--color-point);
          }
          .badge-element-name-style {
               width: 12vh;
               height: 4vh;
               background-color: var(--color-point);
          }
     }
`;
