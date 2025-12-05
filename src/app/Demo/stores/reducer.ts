import { createFeature, createReducer, on } from "@ngrx/store";
import { GetUserStateInterface } from "../type/GetUserState.interface";
import { userActions } from "./action";


const initialState: GetUserStateInterface = {
  Loading: false,
  error: null,
  currentUser: null,
  isSuccess: null
};

const UserFeature = createFeature({
  name: 'user',
  reducer: createReducer(
    initialState,
    on(userActions.user, (state) => ({
      ...state,
      Loading: true,
      error: null,
      isSuccess: null
    })),
    on(userActions.userSuccess, (state, action) => ({
      ...state,
      Loading: false,
      currentUser: action.UserDetails,
      isSuccess: true,
      error: null
    })),
    on(userActions.userFailure, (state) => ({
      ...state,
      Loading: false,
      currentUser: null,
      isSuccess: false,
      error: 'Failed to fetch user'
    }))
  )
});

export const {
  name: UserFeatureKey,
  reducer: UserReducer,
  selectLoading,
  selectCurrentUser,
  selectError,
  selectIsSuccess
} = UserFeature;
