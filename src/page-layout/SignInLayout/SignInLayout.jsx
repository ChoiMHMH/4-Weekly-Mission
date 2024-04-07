"use client";
import classNames from "classnames/bind";
import styles from "./SigninLayout.module.css";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LOGO_IMAGE = "images/linkbrary.svg";
export function SignInLayout() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm();
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
          <Link className={cx("header-link")} href="/signup">
            회원 가입하기
          </Link>
        </p>
      </header>
      <div className={cx("sign-box")}>
        <form
          id="form"
          className={cx("sign-form")}
          onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
        >
          <div className={cx("sign-inputs")}>
            <div className={cx("sign-input-box")}>
              <label className={cx("sign-input-label")}>이메일</label>
              <input
                id="email"
                className={cx("sign-input")}
                placeholder="이메일을 입력해 주세요"
                {...register("email", {
                  required: "이메일을 입력해 주세요",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "이메일 형식에 맞지 않습니다.",
                  },
                })}
                aria-invalid={
                  isSubmitted ? (errors.email ? "true" : "false") : undefined
                }
              />
              {errors.email && (
                <p
                  role="alert"
                  id="email-error-message"
                  className={cx("error-message")}
                >
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className={cx("sign-input-box", "sign-password")}>
              <label className={cx("sign-input-label")}>비밀번호</label>
              <input
                id="password"
                className={cx("sign-input")}
                type="password"
                placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
                {...register("password", {
                  required: "비밀번호를 입력해 주세요.",
                  minLength: {
                    value: 8,
                    message: "8자리 이상 비밀번호를 사용해주세요",
                  },
                })}
                aria-invalid={
                  isSubmitted ? (errors.password ? "true" : "false") : undefined
                }
              />
              {errors.password && (
                <p
                  role="alert"
                  id="password-error-message"
                  className={cx("error-message")}
                >
                  {errors.password.message}
                </p>
              )}
              <button
                id="password-toggle"
                className={cx("eye-button")}
                type="button"
              >
                <img src="./images/eye-off.svg" />
              </button>
            </div>
          </div>
          <button className={cx("cta")} type="submit" disabled={isSubmitting}>
            로그인
          </button>
        </form>
        <div className={cx("sns-box")}>
          <span className={cx("sns-text")}>소셜 로그인</span>
          <div className={cx("sns-links")}>
            <Link
              className={cx("sns-link", "google-link")}
              href="https://www.google.com/"
            >
              <img src="./images/google.png" />
            </Link>
            <Link
              className={cx("sns-link", "kakao-link")}
              href="https://www.kakaocorp.com/page/"
            >
              <img src="./images/kakao.svg" />
            </Link>
          </div>
        </div>
      </div>
    </body>
  );
}
