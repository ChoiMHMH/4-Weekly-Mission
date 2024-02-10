import "./AppNav";
import imgLogo from "./images/logo.png";

function AppNav() {
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
        <a className="cta cta-short" href="#">
          <span>로그인</span>
        </a>
      </div>
    </nav>
  );
}

export default AppNav;
