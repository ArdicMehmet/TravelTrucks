"use client"

import { useState } from "react"
import { Calendar, Users } from "lucide-react"

function ReservationForm({ camperId, price }) {
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    guestCount: 1,
    name: "",
    email: "",
    phone: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.startDate) newErrors.startDate = "Başlangıç tarihi gerekli"
    if (!formData.endDate) newErrors.endDate = "Bitiş tarihi gerekli"
    if (formData.startDate && formData.endDate && new Date(formData.startDate) >= new Date(formData.endDate)) {
      newErrors.endDate = "Bitiş tarihi başlangıç tarihinden sonra olmalı"
    }
    if (!formData.name) newErrors.name = "İsim gerekli"
    if (!formData.email) newErrors.email = "E-posta gerekli"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Geçerli bir e-posta adresi girin"
    if (!formData.phone) newErrors.phone = "Telefon numarası gerekli"

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        startDate: "",
        endDate: "",
        guestCount: 1,
        name: "",
        email: "",
        phone: "",
      })
    }, 3000)
  }

  const calculateTotalDays = () => {
    if (!formData.startDate || !formData.endDate) return 0

    const start = new Date(formData.startDate)
    const end = new Date(formData.endDate)
    const diffTime = Math.abs(end - start)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    return diffDays
  }

  const calculateTotalPrice = () => {
    const days = calculateTotalDays()
    return days * price
  }

  const formatPrice = (price) => {
    return price.toFixed(2)
  }

  return (
    <div className="reservation-form-container">
      <h2 className="form-title">Rezervasyon Yap</h2>

      {isSubmitted ? (
        <div className="success-message">
          <p>Rezervasyon talebiniz başarıyla alındı!</p>
          <p>En kısa sürede sizinle iletişime geçeceğiz.</p>
        </div>
      ) : (
        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              <Calendar size={16} />
              <span>Başlangıç Tarihi</span>
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              className={errors.startDate ? "error" : ""}
            />
            {errors.startDate && <span className="error-message">{errors.startDate}</span>}
          </div>

          <div className="form-group">
            <label>
              <Calendar size={16} />
              <span>Bitiş Tarihi</span>
            </label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              min={formData.startDate || new Date().toISOString().split("T")[0]}
              className={errors.endDate ? "error" : ""}
            />
            {errors.endDate && <span className="error-message">{errors.endDate}</span>}
          </div>

          <div className="form-group">
            <label>
              <Users size={16} />
              <span>Kişi Sayısı</span>
            </label>
            <input
              type="number"
              name="guestCount"
              value={formData.guestCount}
              onChange={handleChange}
              min="1"
              max="10"
            />
          </div>

          <div className="form-group">
            <label>İsim Soyisim</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="İsim Soyisim"
              className={errors.name ? "error" : ""}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label>E-posta</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-posta adresiniz"
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Telefon</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Telefon numaranız"
              className={errors.phone ? "error" : ""}
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <div className="price-summary">
            <div className="price-row">
              <span>
                ${formatPrice(price)} x {calculateTotalDays()} gün
              </span>
              <span>${formatPrice(calculateTotalPrice())}</span>
            </div>
            <div className="price-total">
              <span>Toplam</span>
              <span>${formatPrice(calculateTotalPrice())}</span>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Rezervasyon Yap
          </button>
        </form>
      )}
    </div>
  )
}

export default ReservationForm
