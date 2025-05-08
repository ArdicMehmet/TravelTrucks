"use client"

import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchCamperById, clearCurrentCamper } from "../redux/campersSlice"
import Gallery from "../components/Gallery"
import ReviewSection from "../components/ReviewSection"
import ReservationForm from "../components/ReservationForm"
import { Loader, Check, X } from "lucide-react"

function DetailPage() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { currentCamper, loading, error } = useSelector((state) => state.campers)

  useEffect(() => {
    dispatch(fetchCamperById(id))

    return () => {
      dispatch(clearCurrentCamper())
    }
  }, [dispatch, id])

  if (loading) {
    return (
      <div className="detail-page">
        <div className="container">
          <div className="loading-container">
            <Loader className="loading-icon" />
            <p>Karavan bilgileri yükleniyor...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="detail-page">
        <div className="container">
          <div className="error-container">
            <p>Karavan bilgileri yüklenirken bir hata oluştu.</p>
            <p>{error}</p>
          </div>
        </div>
      </div>
    )
  }

  if (!currentCamper) {
    return (
      <div className="detail-page">
        <div className="container">
          <div className="not-found-container">
            <p>Karavan bulunamadı.</p>
          </div>
        </div>
      </div>
    )
  }

  const formatPrice = (price) => {
    return price.toFixed(2)
  }

  const renderFeatureItem = (label, value) => (
    <div className="feature-item">
      <span className="feature-label">{label}</span>
      <span className="feature-value">
        {typeof value === "boolean" ? (
          value ? (
            <Check className="feature-icon available" />
          ) : (
            <X className="feature-icon unavailable" />
          )
        ) : (
          value
        )}
      </span>
    </div>
  )

  return (
    <div className="detail-page">
      <div className="container">
        <div className="detail-header">
          <h1 className="camper-name">{currentCamper.name}</h1>
          <div className="camper-meta">
            <div className="camper-rating">
              <span className="star">★</span>
              <span>{currentCamper.rating}</span>
            </div>
            <div className="camper-location">{currentCamper.location}</div>
          </div>
        </div>

        <Gallery images={currentCamper.gallery} />

        <div className="detail-content">
          <div className="detail-main">
            <section className="description-section">
              <h2 className="section-title">Açıklama</h2>
              <p className="description-text">{currentCamper.description}</p>
            </section>

            <section className="features-section">
              <h2 className="section-title">Özellikler</h2>

              <div className="features-grid">
                <div className="features-column">
                  <h3 className="features-subtitle">Temel Özellikler</h3>
                  <div className="features-list">
                    {renderFeatureItem("Şanzıman", currentCamper.transmission)}
                    {renderFeatureItem("Motor", currentCamper.engine)}
                    {renderFeatureItem("Klima", currentCamper.AC)}
                    {renderFeatureItem("Banyo", currentCamper.bathroom)}
                    {renderFeatureItem("Mutfak", currentCamper.kitchen)}
                  </div>
                </div>

                <div className="features-column">
                  <h3 className="features-subtitle">Ekstra Özellikler</h3>
                  <div className="features-list">
                    {renderFeatureItem("TV", currentCamper.TV)}
                    {renderFeatureItem("Radyo", currentCamper.radio)}
                    {renderFeatureItem("Buzdolabı", currentCamper.refrigerator)}
                    {renderFeatureItem("Mikrodalga", currentCamper.microwave)}
                    {renderFeatureItem("Gaz", currentCamper.gas)}
                    {renderFeatureItem("Su", currentCamper.water)}
                  </div>
                </div>

                <div className="features-column">
                  <h3 className="features-subtitle">Detaylar</h3>
                  <div className="features-list">
                    {renderFeatureItem("Gövde Tipi", currentCamper.form)}
                    {renderFeatureItem("Uzunluk", currentCamper.length)}
                    {renderFeatureItem("Genişlik", currentCamper.width)}
                    {renderFeatureItem("Yükseklik", currentCamper.height)}
                    {renderFeatureItem("Depo Kapasitesi", currentCamper.tank)}
                    {renderFeatureItem("Yakıt Tüketimi", currentCamper.consumption)}
                  </div>
                </div>
              </div>
            </section>

            <ReviewSection reviews={currentCamper.reviews} />
          </div>

          <div className="detail-sidebar">
            <div className="price-card">
              <div className="price-header">
                <span className="price-value">${formatPrice(currentCamper.price)}</span>
                <span className="price-period">/gün</span>
              </div>
            </div>

            <ReservationForm camperId={currentCamper.id} price={currentCamper.price} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPage
