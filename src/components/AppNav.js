import "./AppNav";
import imgLogo from "../images/logo.png";

function AppNav({ userInfo }) {
  console.log(userInfo.id);
  return (
    <nav>
      <div className="gnb">
        <a href="../public/index.html">
          <img
            className="logo"
            src={imgLogo}
            alt="홈으로 연결된 Linkbrary 로고"
          />
        </a>
        {userInfo.id === undefined ? (
          <a className="cta cta-short" href="#">
            <span>로그인</span>
          </a>
        ) : (
          <div>실행</div>
        )}
      </div>
    </nav>
  );
}

export default AppNav;
