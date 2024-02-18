import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { alertsSlice } from '../redux/alertsSlice'
import { userSlice } from './userSlice'

export const rootReducer = combineReducers({
    alerts: alertsSlice.reducer,
    user: userSlice.reducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store