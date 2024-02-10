import avatarImg from "./images/Avatar.png";
function AppHeader() {
  return (
    //fixme: 추후 코드잇을 받아온 로그인 닉네임이 보이게 교체
    <div className="appHeader">
      <img src={avatarImg}></img>
      <p>@코드잇</p>
      <h2>즐겨찾기</h2>
    </div>
  );
}

export default AppHeader;
