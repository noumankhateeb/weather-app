import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const API_KEY = "e316ccd0603344ac8ce214044242512";
const BASE_URL = "https://api.weatherapi.com/v1";

export const fetchForecastByCity = createAsyncThunk(
    "weather/fetchForecastByCity",
    async (city) => {
        const response = await axios.get(
            `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=5`
        );
        return response.data;
    }
);

const weatherSlice = createSlice({
    name:"weather",
    initialState:{
        forecast:{},
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchForecastByCity.fulfilled, (state, action)=>{
            state.forecast = action.payload
        })
    }
})

export default weatherSlice.reducer;