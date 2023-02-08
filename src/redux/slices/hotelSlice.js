import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  hotels: []
}

const hotelSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    setHotels: (state, action) => {
      state.hotels = action.payload
    },
    clearHotels: (state) => {
      state.hotels = []
    },
    fetchHotels: () => {

    }
  }
})

export const { setHotels, clearHotels, fetchHotels } = hotelSlice.actions

export default hotelSlice.reducer