import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import styles from './MainLayout.module.scss';

export default function MainLayout({ children }) {
  return (
    <div className={styles.MainLayout}>
      <Footer />
      <main className={styles.container}>{children}</main>
      <Navbar />
    </div>
  );
}
