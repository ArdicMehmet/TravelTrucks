import { Star } from "lucide-react"

function ReviewSection({ reviews }) {
  const renderStars = (rating) => {
    const stars = []

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star key={i} size={16} fill={i <= rating ? "#FFD700" : "none"} color={i <= rating ? "#FFD700" : "#ccc"} />,
      )
    }

    return stars
  }

  return (
    <div className="review-section">
      <h2 className="section-title">Kullanıcı Yorumları</h2>

      {reviews.length === 0 ? (
        <p className="no-reviews">Henüz yorum yapılmamış.</p>
      ) : (
        <div className="reviews-list">
          {reviews.map((review, index) => (
            <div key={index} className="review-item">
              <div className="review-header">
                <h3 className="reviewer-name">{review.reviewer_name}</h3>
                <div className="reviewer-rating">{renderStars(review.reviewer_rating)}</div>
              </div>
              <p className="review-comment">{review.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ReviewSection
