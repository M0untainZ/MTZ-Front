import MountMap from "./MountMap";
import MountModal from "./MountModal";

const MountBackground = ({ children }) => {
  return (
    <>
      <div>
        <div>
          <div>수락산</div>
          <div>
            <MountMap />
          </div>
          <div>
            <MountModal />
          </div>
        </div>
      </div>
    </>
  );
};

export default MountBackground;
