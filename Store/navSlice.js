import { createSlice } from '@reduxjs/toolkit';

export const navSlice = createSlice({
    name: 'nav',
    initialState: {
        origin: null,
        destination: null,
        travelTimeInfo: null,
    },

    reducers: {

        setOrigin: (state, action) => {
            state.origin = action.payload
        },

        setDestination: (state, action) => {
            state.destination = action.payload
        },

        setTravelTimeinfo: (state, action) => {
            state.travelTimeInfo = action.payload
        },
    },
});


export const {setOrigin, setDestination, setTravelTimeinfo} = navSlice.actions;
export const selectOrigin = state => state.nav.origin
export const selectDestination = state => state.nav.destination
export const selecttravelTimeInfo = state => state.nav.travelTimeInfo

export default navSlice.reducer;

