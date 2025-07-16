import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUserData: (state, action) => {
            return action.payload;
        }
    }
});

export const { addUserData } = userSlice.actions;
export default userSlice.reducer;


