"use client"

import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Heart } from "lucide-react"
import { toggleFavorite } from "../redux/favoritesSlice"

function CamperCard({ camper }) {
  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.favorites.items)
  const isFavorite = favorites.includes(camper.id)

  const handleToggleFavorite = (e) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(toggleFavorite(camper.id))
  }

  const formatPrice = (price) => {
    return price.toFixed(2)
  }

  return (
    <div className="camper-card">
      <div className="camper-card-image">
        <img src={camper.gallery[0].thumb || "/placeholder.svg"} alt={camper.name} />
        <button
          className={`favorite-btn ${isFavorite ? "active" : ""}`}
          onClick={handleToggleFavorite}
          aria-label={isFavorite ? "Favorilerden çıkar" : "Favorilere ekle"}
        >
          <Heart fill={isFavorite ? "#ff385c" : "none"} color={isFavorite ? "#ff385c" : "#fff"} />
        </button>
      </div>

      <div className="camper-card-content">
        <div className="camper-card-header">
          <h3 className="camper-name">{camper.name}</h3>
          <div className="camper-rating">
            <span className="star">★</span>
            <span>{camper.rating}</span>
          </div>
        </div>

        <p className="camper-location">{camper.location}</p>

        <div className="camper-features">
          {camper.AC && <span className="feature">Klima</span>}
          {camper.bathroom && <span className="feature">Banyo</span>}
          {camper.kitchen && <span className="feature">Mutfak</span>}
        </div>

        <div className="camper-card-footer">
          <div className="camper-price">
            <span className="price-value">${formatPrice(camper.price)}</span>
            <span className="price-period">/gün</span>
          </div>

          <Link to={`/catalog/${camper.id}`} className="show-more-btn" target="_blank" rel="noopener noreferrer">
            Detayları Gör
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CamperCard
