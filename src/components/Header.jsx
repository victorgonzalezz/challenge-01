
import styles from "./Header.module.css";
import mainLogo from "../assets/Logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={mainLogo} alt="Challenge Logo" />
    </header>
  );
}
