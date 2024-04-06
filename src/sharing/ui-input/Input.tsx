<<<<<<< HEAD
import { ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute } from "react";
=======
import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
>>>>>>> 50171e98d424c44bb3c59d272d8e6e0538e98aee
import styles from "./Input.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

<<<<<<< HEAD
export type InputProps = {
  value: string | number;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  hasError?: boolean;
  helperText?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
};

export const Input = ({
  value,
  placeholder,
  type = "text",
  hasError = false,
  helperText,
  onChange,
  onBlur,
}: InputProps) => {
  return (
    <div className={cx("container")}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={cx("input", { error: hasError })}
      />
      {helperText && <p className={cx("helper-text", { error: hasError })}>{helperText}</p>}
    </div>
=======
type InputProps = {
  value: string | number;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const Input = ({ type = "text", value, onChange, placeholder }: InputProps) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={cx("input")}
    />
>>>>>>> 50171e98d424c44bb3c59d272d8e6e0538e98aee
  );
};
