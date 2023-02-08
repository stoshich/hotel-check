import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from './slices/hotelSlice'
import favouriteReducer from './slices/favouriteSlice'
import { watchFetchHotels } from "./saga";

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: {
    hotels: hotelReducer,
    favourites: favouriteReducer
  },
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(watchFetchHotels)