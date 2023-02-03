import { createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Game} from "../../interfaces/Game";
import {fetchFake} from "./fetchAPI";
import axios from 'axios';

interface GameState{
    games: Game[] | null,
    loading: boolean,
    errors: any;
}

const initialState: GameState = {
    games: [],
    loading: false,
    errors: [],
}

//actions

export const getGames = createAsyncThunk<Game[]>(
    "games/getGames",
    async (_, thunkAPI) => {
        try{
            // const response = await axios.get("http://localhost:8080/api/games");
            // return response.data;

            // const result = await fetchFake();
            // return result;

            const fetchResult = await fetch("http://localhost:8080/api/games")
                .then((data) => data.json());
            console.log(fetchResult)
            return fetchResult;

        }catch(error){
            return thunkAPI.rejectWithValue(error);
            // return await fetch("http://localhost:8080/api/games");
        }
    }
)

const checkType = getGames.pending;

export const gameSlice = createSlice({
    name: "games",
    initialState,
    reducers: {
        setGames: (state, action: PayloadAction<Game[]>) => {
            state.games = action.payload
        },
    },
    
    extraReducers: (builder) => {
        builder
            .addCase(getGames.pending, (state) => {
                state.loading = true; 
            })
            .addCase(getGames.fulfilled, (state, action: PayloadAction<Game[]>) => {
                state.loading = false;
                state.games = action.payload;
            })
            .addCase(getGames.rejected, (state, action) => {

                console.log(action)
                state.errors = action.error;
            })
    }
})