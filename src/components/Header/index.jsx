import styles from './Header.module.css';
import ebacLogo from '../../images/ebac-logo.png';
import anotherLogo from '../../images/pilates.jpg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={ebacLogo} alt="Logo ebac" className={styles.logo} />
        <img src={anotherLogo} alt="pilates" className={styles.logo} />
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}><a href="#home">Inicio</a></li>
          <li className={styles.menuItem}><a href="#about">About</a></li>
          <li className={styles.menuItem}><a href="#services">Serviços</a></li>
          <li className={styles.menuItem}><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;