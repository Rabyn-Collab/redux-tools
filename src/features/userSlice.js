import { createSlice } from "@reduxjs/toolkit";




const initialState = {
  users: []
};

const userSlice = createSlice({
  name: 'userInfo',
  initialState: initialState,
  reducers: {

    addUser: (state, action) => {
      state.users.push(action.payload);
    }

  }

});


export const { addUser } = userSlice.actions;


export default userSlice.reducer;
