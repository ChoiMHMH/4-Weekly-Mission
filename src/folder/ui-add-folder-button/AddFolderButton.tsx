import styles from "./AddFolderButton.module.scss";
import classNames from "classnames/bind";
<<<<<<< HEAD
import AddIcon from "./add.svg";
=======
import { ReactComponent as AddIcon } from "./add.svg";
>>>>>>> 50171e98d424c44bb3c59d272d8e6e0538e98aee
import { MouseEventHandler } from "react";

const cx = classNames.bind(styles);

type AddFolderButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const AddFolderButton = ({ onClick }: AddFolderButtonProps) => {
  return (
    <button className={cx("container")} onClick={onClick}>
      <span>폴더 추가</span>
      <AddIcon className={cx("icon")} />
    </button>
  );
};
