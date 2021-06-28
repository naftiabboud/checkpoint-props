function ProfileComponent(props) {
  
  return (
      
    <div className="containt">
        <img src={props.children} alt="profil pic" />
      <div className="fullname">
        <h1>{props.fullname}</h1>
      </div>

      
      <div className="profession">
        <h2>{props.profession}</h2>
      </div>
      <div className="bio">
        <p>{props.bio}</p>
      </div>
    </div>
  );
}
export default ProfileComponent;
