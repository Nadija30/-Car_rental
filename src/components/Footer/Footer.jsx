import css from './Footer.module.css';

const Footer = () => {
  return (
    <div className={css.footer}>
      <p className={css.footerText}>
        &copy; {new Date().getFullYear()} Copyright
      </p>
      <a
        className={css.footerLink}
        href="https://github.com/Nadija30"
        target="_blank"
        rel="noreferrer"
      >
        Nadiia Sukhorukova
      </a>
    </div>
  );
};

export default Footer;
