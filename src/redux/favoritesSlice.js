import { createSlice } from "@reduxjs/toolkit"

const loadFavorites = () => {
  try {
    const favorites = localStorage.getItem("favorites")
    return favorites ? JSON.parse(favorites) : []
  } catch (error) {
    return []
  }
}

const initialState = {
  items: loadFavorites(),
}

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const camperId = action.payload
      const index = state.items.indexOf(camperId)

      if (index === -1) {
        state.items.push(camperId)
      } else {
        state.items.splice(index, 1)
      }

      localStorage.setItem("favorites", JSON.stringify(state.items))
    },
  },
})

export const { toggleFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
