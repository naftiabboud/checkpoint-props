import "./App.css";
import ProfileComponent from "./profile/ProfileComponent";
import PropTypes from 'prop-types';

function App() {
  function handleName(e) {
    e.preventDefault();
    alert('this is nafti profile');
  };
  ProfileComponent.defaultProps = {
    fullName: "FirstName FamilyName",
    bio: "Your bio",
    profession: "Your profession"
};
  ProfileComponent.propTypes = {
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func,
};

  return (
    <div className="App">
      <ProfileComponent
        fullname="Nafti Abboud"
        profession="Full Stack Developer"
        bio="this is my bio"
      >
        /profil-pic.jpg
      </ProfileComponent>
      <a href="/" onClick={handleName}>
        Click Here
      </a>
      
    </div>
  );
}

export default App;
