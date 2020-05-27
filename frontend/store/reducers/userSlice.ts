import { createSlice } from '@reduxjs/toolkit';

interface UsersState {
  userName: string
}

const initialState: UsersState = {
  userName: '',
};

const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
