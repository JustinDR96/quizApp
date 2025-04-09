import styles from './Footer.module.scss';
import { MagnifyingGlass, User } from '@phosphor-icons/react';

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchIcon}>
        <MagnifyingGlass size={25} />
      </div>
      <div className={styles.title}>Quizzie</div>
      <div className={styles.profileIcon}>
        <User size={25} />
      </div>
    </div>
  );
}
