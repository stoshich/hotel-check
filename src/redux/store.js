import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from './slices/hotelSlice'
import favouriteReducer from './slices/favouriteSlice'
import inputReducer from './slices/inputSlice'
import { watchFetchHotels } from "./saga";

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: {
    hotels: hotelReducer,
    favourites: favouriteReducer,
    input: inputReducer
  },
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(watchFetchHotels)