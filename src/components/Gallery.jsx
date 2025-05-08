"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

function Gallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (index) => {
    setCurrentIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="gallery">
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => openModal(index)}>
            <img src={image.thumb || "/placeholder.svg"} alt={`Görsel ${index + 1}`} />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="gallery-modal">
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="modal-image-container">
              <img
                src={images[currentIndex].original || "/placeholder.svg"}
                alt={`Görsel ${currentIndex + 1}`}
                className="modal-image"
              />
            </div>

            <button className="nav-btn prev-btn" onClick={goToPrevious}>
              <ChevronLeft size={24} />
            </button>

            <button className="nav-btn next-btn" onClick={goToNext}>
              <ChevronRight size={24} />
            </button>

            <div className="image-counter">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
