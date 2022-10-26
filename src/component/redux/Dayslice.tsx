import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export const daySlice = createSlice({
    name: "day",
    initialState: {
        dayNo: 0
    },
    reducers: {
        change: (state, action: PayloadAction<number>) => {
            state.dayNo = action.payload
        }
    }
})

export const { change } = daySlice.actions;
export default daySlice.reducer;