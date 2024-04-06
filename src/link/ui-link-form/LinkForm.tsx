<<<<<<< HEAD
import { Cta } from "@/src/sharing/ui-cta";
=======
import { Cta } from "sharing/ui-cta";
>>>>>>> 50171e98d424c44bb3c59d272d8e6e0538e98aee
import styles from "./LinkForm.module.scss";
import classNames from "classnames/bind";
import { ChangeEventHandler, FormEvent, FormEventHandler, forwardRef } from "react";

const cx = classNames.bind(styles);

type LinkFormProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

export const LinkForm = forwardRef<HTMLFormElement, LinkFormProps>(
  ({ value, onChange, onSubmit }: LinkFormProps, ref) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit(event);
    };

    return (
      <form ref={ref} className={cx("form")} onSubmit={handleSubmit}>
        <div className={cx("input-box")}>
          <img className={cx("icon")} src="images/link.svg" alt="링크 아이콘" />
          <input
            className={cx("input")}
            type="text"
            placeholder="링크를 추가해 보세요"
            value={value}
            onChange={onChange}
          />
        </div>
        <button className={cx("button")} type="submit">
          <Cta>추가하기</Cta>
        </button>
      </form>
    );
  }
);
