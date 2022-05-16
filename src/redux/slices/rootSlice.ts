import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'Sci-Fi cliche here',
        classification: "pew pew",
        description: "type, show",
        engine: 'environmentally friendly',
        max_speed: 'fast',
        range: 'over there',
        shield: 'bzzz....',
        size: 'regular',
        weapons: 'Many'
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseClassification: (state, action) => { state.classification = action.payload},
        chooseDescription: (state, action) => { state.description = action.payload},
        chooseEngine: (state, action) => { state.engine = action.payload},
        chooseSpeed: (state, action) => { state.max_speed = action.payload},
        chooseRange: (state, action) => { state.range = action.payload},
        chooseShield: (state, action) => { state.shield = action.payload},
        chooseSize: (state, action) => { state.size = action.payload},
        chooseWeapons: (state, action) => { state.weapons = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseClassification, chooseDescription, chooseEngine, chooseSpeed, chooseRange, chooseShield, chooseSize, chooseWeapons } = rootSlice.actions;