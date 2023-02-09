import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects'
import { fetchHotels, setHotels } from '../slices/hotelSlice'

const fetchFunc = async (location, checkIn, checkOut) => {
  const url = `https://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=20`
  const response = await axios.get(url)
  return response.data
}

function* fetchHotelsSaga(action) {
  try {
    const hotels = yield fetchFunc(...action.payload)
    yield put(setHotels(hotels))
  } catch (error) {
    console.log(error)
  }
}

export function* watchFetchHotels() {
  yield takeEvery(fetchHotels, fetchHotelsSaga)
}