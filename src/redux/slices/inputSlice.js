import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  date: new Date().toISOString().split('T')[0],
  days: 1
}

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setDate: (state, action) => {
      state.date = action.payload
    },
    setDays: (state, action) => {
      state.days = action.payload
    },
    resetInputs: () => initialState
  }
})

export const { setDate, setDays, resetInputs } = inputSlice.actions

export default inputSlice.reducer