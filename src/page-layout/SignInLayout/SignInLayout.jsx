import classNames from "classnames/bind";
import styles from "./SigninLayout.module.css";
import Link from "next/link";

const LOGO_IMAGE = "images/linkbrary.svg";
export function SignInLayout() {
  const cx = classNames.bind(styles);
  return (
    <body className={cx("body")}>
      <header>
        <Link className={cx("logo-link")} href="/">
          <img
            className={cx("header-logo")}
            src={LOGO_IMAGE}
            alt="홈으로 연결된 Linkbrary 로고"
          />
        </Link>
        <p className={cx("header-message")}>
          회원이 아니신가요?
          <a className={cx("header-link")} href="signup.html">
            회원 가입하기
          </a>
        </p>
      </header>
      <div className={cx("sign-box")}>
        <form id="form" className={cx("sign-form")}>
          <div className={cx("sign-inputs")}>
            <div className={cx("sign-input-box")}>
              <label className={cx("sign-input-label")}>이메일</label>
              <input
                id="email"
                className={cx("sign-input")}
                placeholder="이메일을 입력해 주세요"
              />
              <p id="email-error-message" className={cx("error-message")}></p>
            </div>
            <div className={cx("sign-input-box", "sign-password")}>
              <label className={cx("sign-input-label")}>비밀번호</label>
              <input
                id="password"
                className={cx("sign-input")}
                type="password"
                placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
              />
              <p
                id="password-error-message"
                className={cx("error-message")}
              ></p>
              <button
                id="password-toggle"
                className={cx("eye-button")}
                type="button"
              >
                <img src="./images/eye-off.svg" />
              </button>
            </div>
          </div>
          <button className={cx("cta")} type="submit">
            로그인
          </button>
        </form>
        <div className={cx("sns-box")}>
          <span className={cx("sns-text")}>소셜 로그인</span>
          <div className={cx("sns-links")}>
            <a
              className={cx("sns-link", "google-link")}
              href="https://www.google.com/"
            >
              <img src="./images/google.png" />
            </a>
            <a
              className={cx("sns-link", "kakao-link")}
              href="https://www.kakaocorp.com/page/"
            >
              <img src="./images/kakao.svg" />
            </a>
          </div>
        </div>
      </div>
    </body>
  );
}
