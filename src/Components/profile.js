import propTypes from "prop-types";

const Profile = ({ children, name, adresse }) => {
  return (
    <div>
      {children}
      <p> {name}</p>
      <h1> {adresse}</h1>
    </div>
  );
};
Profile.propTypes = {
  name: propTypes.string,
  adresse: propTypes.string,
};
export default Profile;
