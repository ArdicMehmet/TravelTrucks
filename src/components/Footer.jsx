import { Link } from "react-router-dom"
import { Facebook, Instagram, Twitter } from "lucide-react"

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-info">
          <h3 className="footer-title">TravelTrucks</h3>
          <p>Karavan kiralama hizmetleri</p>
        </div>

        <div className="footer-links">
          <h4>Hızlı Bağlantılar</h4>
          <ul>
            <li>
              <Link to="/">Ana Sayfa</Link>
            </li>
            <li>
              <Link to="/catalog">Katalog</Link>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>İletişim</h4>
          <p>info@traveltrucks.com</p>
          <p>+90 555 123 4567</p>
        </div>

        <div className="footer-social">
          <h4>Sosyal Medya</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} TravelTrucks. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
