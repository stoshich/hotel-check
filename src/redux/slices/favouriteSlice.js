import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  favourites: []
}

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    setFavourite: (state, action) => {
      state.favourites.push(action.payload)
    },
    removeFavouite: (state, action) => {
      state.favourites = state.favourites.filter(hotel => hotel.hotelId !== action.payload)
    }
  }
})

export const { setFavourite, removeFavouite } = favouriteSlice.actions

export default favouriteSlice.reducer