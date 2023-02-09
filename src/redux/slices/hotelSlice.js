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
    fetchHotels: () => {

    }
  }
})

export const { setHotels, fetchHotels } = hotelSlice.actions

export default hotelSlice.reducer