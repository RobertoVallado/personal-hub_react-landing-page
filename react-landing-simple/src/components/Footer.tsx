import '../styles/Footer.css'
import instagramIcon from "../assets/instagram.svg";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import { KoFiButton } from "react-kofi";
import "react-kofi/dist/styles.css";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-branding">
            <div className="footer-title">Pensez Espagnol</div>
          </div>

          <div className="footer-links-col">
            <nav className="footer-nav-links">
              <Link to="/contact">Book a Class</Link>
              <Link to="/contact">Pricing</Link>
            </nav>
            <KoFiButton
              color="#f06f52"
              id="H2H2OBC05"
              label="Buy me a Tea"
              radius="12px"
            />
            <div className="social-links">
              <a
                href="https://www.instagram.com/vallado_rico"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a
                href="https://github.com/RobertoVallado"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/roberto-vallado/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-made-with">Made in CA with ❤️</p>
          <span className="footer-copyright">© {new Date().getFullYear()}, Pensez Espagnol</span>
        </div>
      </div>
    </footer>
  );
}
