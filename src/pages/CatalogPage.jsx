"use client"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCampers, incrementPage } from "../redux/campersSlice"
import CamperCard from "../components/CamperCard"
import FilterForm from "../components/FilterForm"
import { Loader } from "lucide-react"

function CatalogPage() {
  const dispatch = useDispatch()
  const { items, total, loading, page } = useSelector((state) => state.campers)

  useEffect(() => {
    dispatch(fetchCampers())
  }, [dispatch])

  const handleLoadMore = () => {
    dispatch(incrementPage())
    dispatch(fetchCampers())
  }

  const displayedItems = items.slice(0, page * 6)
  const hasMoreItems = displayedItems.length < total

  return (
    <div className="catalog-page">
      <div className="container">
        <h1 className="page-title">Karavan Kataloğu</h1>

        <FilterForm />

        {loading && items.length === 0 ? (
          <div className="loading-container">
            <Loader className="loading-icon" />
            <p>Karavanlar yükleniyor...</p>
          </div>
        ) : items.length === 0 ? (
          <div className="no-results">
            <p>Aramanıza uygun karavan bulunamadı.</p>
            <p>Lütfen filtrelerinizi değiştirerek tekrar deneyin.</p>
          </div>
        ) : (
          <>
            <div className="campers-grid">
              {displayedItems.map((camper) => (
                <CamperCard key={camper.id} camper={camper} />
              ))}
            </div>

            {hasMoreItems && (
              <div className="load-more-container">
                <button className="load-more-btn" onClick={handleLoadMore} disabled={loading}>
                  {loading ? (
                    <>
                      <Loader className="loading-icon" />
                      Yükleniyor...
                    </>
                  ) : (
                    "Daha Fazla Yükle"
                  )}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default CatalogPage
