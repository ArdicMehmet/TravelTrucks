"use client"

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setLocation, setType, toggleFeature, resetFilters } from "../redux/filtersSlice"
import { fetchCampers, resetPage } from "../redux/campersSlice"
import { Search, X } from "lucide-react"

function FilterForm() {
  const dispatch = useDispatch()
  const filters = useSelector((state) => state.filters)
  const [isOpen, setIsOpen] = useState(false)

  const vehicleTypes = [
    { value: "alcove", label: "Alcove" },
    { value: "integrated", label: "Integrated" },
    { value: "van", label: "Van" },
  ]

  const features = [
    { value: "AC", label: "Klima" },
    { value: "bathroom", label: "Banyo" },
    { value: "kitchen", label: "Mutfak" },
    { value: "TV", label: "TV" },
    { value: "radio", label: "Radyo" },
    { value: "refrigerator", label: "Buzdolabı" },
    { value: "microwave", label: "Mikrodalga" },
    { value: "gas", label: "Gaz" },
    { value: "water", label: "Su" },
  ]

  const handleLocationChange = (e) => {
    dispatch(setLocation(e.target.value))
  }

  const handleTypeChange = (e) => {
    dispatch(setType(e.target.value))
  }

  const handleFeatureToggle = (feature) => {
    dispatch(toggleFeature(feature))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(resetPage())
    dispatch(fetchCampers())
    setIsOpen(false)
  }

  const handleReset = () => {
    dispatch(resetFilters())
    dispatch(resetPage())
    dispatch(fetchCampers())
  }

  const toggleFilterMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="filter-container">
      <button className="filter-toggle" onClick={toggleFilterMenu}>
        {isOpen ? <X size={20} /> : <Search size={20} />}
        <span>Filtreler</span>
      </button>

      <form className={`filter-form ${isOpen ? "open" : ""}`} onSubmit={handleSubmit}>
        <div className="filter-section">
          <h3>Konum</h3>
          <input
            type="text"
            placeholder="Konum ara..."
            value={filters.location}
            onChange={handleLocationChange}
            className="location-input"
          />
        </div>

        <div className="filter-section">
          <h3>Araç Tipi</h3>
          <div className="type-options">
            {vehicleTypes.map((type) => (
              <label key={type.value} className="type-option">
                <input
                  type="radio"
                  name="vehicleType"
                  value={type.value}
                  checked={filters.type === type.value}
                  onChange={handleTypeChange}
                />
                <span>{type.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="filter-section">
          <h3>Özellikler</h3>
          <div className="feature-options">
            {features.map((feature) => (
              <label key={feature.value} className="feature-option">
                <input
                  type="checkbox"
                  checked={filters.features[feature.value]}
                  onChange={() => handleFeatureToggle(feature.value)}
                />
                <span>{feature.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="filter-actions">
          <button type="button" className="reset-btn" onClick={handleReset}>
            Sıfırla
          </button>
          <button type="submit" className="apply-btn">
            Uygula
          </button>
        </div>
      </form>
    </div>
  )
}

export default FilterForm
