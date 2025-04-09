import styles from "./CTAButton.module.scss";
import { classNames } from "../../utils/classNames";

export default function CTAButton({ children, onClick, size = "md", variant = "primary" }) {
  return (
    <button onClick={onClick} className={classNames(styles.button, styles[size], styles[variant])}>
      {children}
    </button>
  );
}