import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	cars: [ "Model S", "Model 3", "Model X", "Model Y"]
}

const carSlice = createSlice({
	name: "car",
	initialState, //for initially starting the application
	reducers: {}  //reduce strategies use to manipulate the state
})

export const selectCars = state => state.car.cars; //mapping directly

export default carSlice.reducer