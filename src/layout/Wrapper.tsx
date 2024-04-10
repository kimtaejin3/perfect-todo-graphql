import { ReactNode } from "react";
import styles from "./Wrapper.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface WrapperProps {
  children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  return <div className={cx("container")}>{children}</div>;
}
