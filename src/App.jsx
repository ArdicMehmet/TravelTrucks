import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CatalogPage from "./pages/CatalogPage"
import DetailPage from "./pages/DetailPage"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<DetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
