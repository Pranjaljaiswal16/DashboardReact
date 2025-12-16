import Profile from "../../assets/profile.png";

const UserAvtar = (props) => {
  return (
    <>
      <div className={`userImg ${props.lg === true && "lg"}`}>
        <span className="rounded_circle">
          <img src={Profile} alt="Profile-image" />
        </span>
      </div>
    </>
  );
};

export default UserAvtar;
