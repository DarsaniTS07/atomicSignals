import {configureStore} from '@reduxjs/toolkit'
import atomicSignalsReducer from './Slice'

const store = configureStore({
    reducer:{
        atomicSignals : atomicSignalsReducer,
    }
})

export default store;