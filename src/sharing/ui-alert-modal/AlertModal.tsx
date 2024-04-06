import styles from "./AlertModal.module.scss";
import classNames from "classnames/bind";
import { KeyboardEventHandler, MouseEventHandler } from "react";
<<<<<<< HEAD
import { Modal } from "@/src/sharing/ui-modal";
import { ModalContentBox } from "@/src/sharing/ui-modal-content-box";
import { ModalContentButton } from "@/src/sharing/ui-modal-content-button";
import { ModalContentDescription } from "@/src/sharing/ui-modal-content-description";
import { ModalContentTitle } from "@/src/sharing/ui-modal-content-title";
=======
import { Modal } from "sharing/ui-modal";
import { ModalContentBox } from "sharing/ui-modal-content-box";
import { ModalContentButton } from "sharing/ui-modal-content-button";
import { ModalContentDescription } from "sharing/ui-modal-content-description";
import { ModalContentTitle } from "sharing/ui-modal-content-title";
>>>>>>> 50171e98d424c44bb3c59d272d8e6e0538e98aee

const cx = classNames.bind(styles);

type AlertModalProps = {
  isOpen: boolean;
  title: string;
  description: string;
  buttonText: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  onCloseClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
};

export const AlertModal = ({
  isOpen,
  title,
  description,
  buttonText,
  onClick,
  onCloseClick,
  onKeyDown,
}: AlertModalProps) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={
          <div className={cx("modal-header")}>
            <ModalContentTitle>{title}</ModalContentTitle>
            <ModalContentDescription>{description}</ModalContentDescription>
          </div>
        }
        content={
          <ModalContentButton onClick={onClick} themeColor="red">
            {buttonText}
          </ModalContentButton>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
