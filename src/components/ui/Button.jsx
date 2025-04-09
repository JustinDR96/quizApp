import styles from "./Button.module.scss";
  import { classNames } from "../../utils/classNames";
  
  export default function Button({ children, variant = "primary" }) {
    return (
      <button className={classNames(styles.button, styles[variant])}>
        {children}
      </button>
    );
  }