import {configureStore} from '@reduxjs/toolkit';
import dayReducer from './Dayslice';

const store=configureStore({
    reducer:{
        day:dayReducer
    }
})

export default store;
export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;