import { Link } from "react-router-dom"

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Maceranızı Karavanla Keşfedin</h1>
            <p className="hero-description">
              Konfor, stil ve özgürlük ile kendi hızınızda seyahat etmenin keyfini çıkarın. TravelTrucks ile unutulmaz
              bir yolculuğa çıkın.
            </p>
            <Link to="/catalog" className="cta-button">
              Hemen İncele
            </Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Neden TravelTrucks?</h2>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚐</div>
              <h3 className="feature-title">Geniş Araç Filosu</h3>
              <p className="feature-description">
                Her ihtiyaca uygun çeşitli karavan modellerimiz arasından seçim yapın.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3 className="feature-title">Uygun Fiyatlar</h3>
              <p className="feature-description">Bütçenize uygun kiralama seçenekleri ile tatil planınızı yapın.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🛠️</div>
              <h3 className="feature-title">Tam Donanımlı</h3>
              <p className="feature-description">Tüm karavanlarımız konforunuz için gerekli donanımlara sahiptir.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3 className="feature-title">Güvenli Seyahat</h3>
              <p className="feature-description">Düzenli bakımı yapılan araçlarımızla güvenli bir yolculuk yapın.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Hayalinizdeki Tatile Hemen Başlayın</h2>
            <p className="cta-description">Karavanlarımızı keşfedin ve rezervasyonunuzu yapın.</p>
            <Link to="/catalog" className="cta-button">
              Kataloga Göz At
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
