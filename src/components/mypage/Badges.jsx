import styled from "styled-components";

const Badges = ({ badges }) => {
  return (
    <StBadges>
      <img className="badge-element-img-style" src={badges.img} alt="badges" />
      <div className="badges-info-style">
        <p className="badges-name">{badges.badgeName}</p>
        <p className="badges-info-day">
          {badges.content.split("!")[0]}
          <br />
          {badges.content.split("!")[1]}
        </p>
        <p className="badges-info-day">
          취득일자 : {badges.openTime.split("-")[0]}년&nbsp;
          {badges.openTime.split("-")[1]}월&nbsp;
          {badges.openTime.split("-")[2]}일
        </p>
      </div>
    </StBadges>
  );
};

export default Badges;

const StBadges = styled.div`
  width: 511px;
  height: 180px;
  background-color: white;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  .badge-element-img-style {
    width: 120px;
    height: 120px;
    box-sizing: border-box;
  }
  .badges-info-style {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    font-size: 15px;
    width: 290px;
    height: 120px;
    .badges-name {
      font-size: 18px;
    }
    .badges-info-day {
      color: var(--color-border);
      :nth-child(2) {
        color: #000;
      }
    }
  }
`;
