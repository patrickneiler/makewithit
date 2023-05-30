import { firestore } from '@the/util/react/firebase';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import { User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

export const USER_FEATURE_KEY = 'user';

/*
 * Update these interfaces according to your requirements.
 */
export interface UserEntity extends User {
  id: number;
  organization?: string;
  organizationId?: string;
}

export interface UserState extends EntityState<UserEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string | null;
}

export const userAdapter = createEntityAdapter<UserEntity>();

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(fetchUser())
 * }, [dispatch]);
 * ```
 */
export const fetchUser = createAsyncThunk(
  'user/fetchStatus',
  async (uid: string, thunkAPI) => {
      const docRef = doc(firestore, "users", uid);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        const user: UserEntity =  {
          ...docSnap.data() as User,
          id: docSnap.data().uid,
        }
        return Promise.resolve([user]);
      } else {
        // docSnap.data() will be undefined in this case
        return Promise.reject({
          error: {
            message: 'User does not exist'
          }
        })
      }
  }
);

export const initialUserState: UserState = userAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: null,
});

export const userSlice = createSlice({
  name: USER_FEATURE_KEY,
  initialState: initialUserState,
  reducers: {
    add: userAdapter.addOne,
    remove: userAdapter.removeOne,
    clear: (state, payload) => {
      userAdapter.removeAll(state);
      state.loadingStatus = 'loaded';
    }
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state: UserState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchUser.fulfilled,
        (state: UserState, action: PayloadAction<UserEntity[]>) => {
          userAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchUser.rejected, (state: UserState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message || null;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const userReducer = userSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(userActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const userActions = userSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllUser);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = userAdapter.getSelectors();

export const getUserState = (rootState: any): UserState =>
  rootState[USER_FEATURE_KEY];

export const selectAllUser = createSelector(getUserState, selectAll);

export const selectUserEntities = createSelector(getUserState, selectEntities);