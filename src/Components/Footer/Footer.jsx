import styles from './styles.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <span className={styles.footer__text}>footer</span>
    <span className={styles.footer__link}>
      app by{' '}
      <a
        href="https://tlgg.ru/NikitaPozdnyakov"
        target="_blank"
        rel="noreferrer"
      >
        Nikita Pozdnyakov
      </a>
    </span>
  </footer>
);

export default Footer;
