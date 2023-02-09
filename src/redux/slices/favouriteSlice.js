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
    removeFavourite: (state, action) => {
      state.favourites = state.favourites.filter(hotel => hotel.hotelId !== action.payload)
    },
    sortByRaitingDESC: (state) => {
      state.favourites = state.favourites.sort((hotel1, hotel2) => hotel2.stars - hotel1.stars)
    },
    sortByRaitingASC: (state) => {
      state.favourites = state.favourites.sort((hotel1, hotel2) => hotel1.stars - hotel2.stars)
    },
    sortByPriceDESC: (state) => {
      state.favourites = state.favourites.sort((hotel1, hotel2) => hotel2.priceFrom - hotel1.priceFrom)
    },
    sortByPriceASC: (state) => {
      state.favourites = state.favourites.sort((hotel1, hotel2) => hotel1.priceFrom - hotel2.priceFrom)
    }
  }
})

export const { setFavourite, removeFavourite, sortByRaitingDESC, sortByRaitingASC, sortByPriceDESC, sortByPriceASC } = favouriteSlice.actions

export default favouriteSlice.reducer