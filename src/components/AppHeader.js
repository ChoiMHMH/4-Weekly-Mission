import "./AppHeader.css";

function AppHeader({ user }) {
  console.log(user.folder?.name);
  const userName = user.folder?.name;
  const userOwner = user.folder?.owner.name;
  const userProfile = user.folder?.owner.profileImageSource;

  return (
    <div className="appHeader">
      <img src={userProfile}></img>
      <p>@{userOwner}</p>
      <h2>{userName}</h2>
    </div>
  );
}

export default AppHeader;
