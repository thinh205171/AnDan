import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "react-toastify";

const LOGIN_STATUS = {
  SUCCESS: 1,
  USERNAME_NOT_FOUND: 2,
  WRONG_PASSWORD: 3,
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData: any, thunkAPI) => {
    try {
      const res = await authService.login(userData);
      console.log("res: ", res);
      return { res, status: LOGIN_STATUS.SUCCESS };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const res = await authService.logout();
      console.log(res);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

interface UserState {
  user: { name: string, email: string } | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string | null;
  loginStatus: number | null;
}

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: null,
  loginStatus: 0,
} as UserState;

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    resetState: (state) => {
      state.user = null;
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
      state.loginStatus = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload.res.user;
        state.loginStatus = 1;
        toast.success("User login successfully", { autoClose: 1500 });
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = null;
        state.loginStatus = 0;
        if (state.isSuccess === true) {
          toast.success("User logout successfully", { autoClose: 1500 });
        }
      })
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action: AnyAction) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
          console.log(action.payload.response);
          if (
            action.payload.response.data.status ===
            LOGIN_STATUS.USERNAME_NOT_FOUND
          )
            toast.error("Username does not exist", { autoClose: 1500 });
          else if (
            action.payload.response.data.status === LOGIN_STATUS.WRONG_PASSWORD
          )
            toast.error("Wrong password", { autoClose: 1500 });
        },
      );
  },
});

export default authSlice.reducer;
