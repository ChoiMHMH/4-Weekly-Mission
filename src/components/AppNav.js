import "./AppNav";
import imgLogo from "../images/logo.png";

function AppNav({ userInfo }) {
  console.log(userInfo.length);
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
        {userInfo.length === 0 ? (
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
