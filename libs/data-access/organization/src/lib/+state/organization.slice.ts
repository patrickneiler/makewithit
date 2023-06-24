import { firestore } from './util-react-firebase';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

export const ORGANIZATION_FEATURE_KEY = 'organization';

/*
 * Update these interfaces according to your requirements.
 */
export interface OrganizationEntity {
  id?: number;
  uid?: string;
  name?: string;
  logo?: string;
}

export interface OrganizationState extends EntityState<OrganizationEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error?: string;
}

export const organizationAdapter = createEntityAdapter<OrganizationEntity>();

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
 *   dispatch(fetchOrganization())
 * }, [dispatch]);
 * ```
 */
export const fetchOrganization = createAsyncThunk(
  'organization/fetchStatus',
  async (uid: string, thunkAPI) => {
    const docRef = doc(firestore, "organizations", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const organization: OrganizationEntity =  {
        ...docSnap.data() as OrganizationEntity,
        id: docSnap.data().uid,
      }
      return Promise.resolve([organization]);
    } else {
      // docSnap.data() will be undefined in this case
      return Promise.reject({
        error: {
          message: 'Organization does not exist'
        }
      })
    }
  }
);

export const fetchOrganizations = createAsyncThunk(
  'organizations/fetchStatus',
  async (_, thunkAPI) => {
    const organizations: OrganizationEntity[] = [];
    const querySnapshot = await getDocs(collection(firestore, "organizations"));
    querySnapshot.forEach((doc) => {

      const organization: OrganizationEntity =  {
        ...doc.data() as OrganizationEntity,
        id: doc.data().uid,
      }
      organizations.push(organization);
    });
    if (organizations.length) {
      return Promise.resolve(organizations);
    } else {
      return Promise.reject({
        error: {
          message: 'Organizations dont exist'
        }
      })
    }
    
  }
);

export const initialOrganizationState: OrganizationState =
  organizationAdapter.getInitialState({
    loadingStatus: 'not loaded',
  });

export const organizationSlice = createSlice({
  name: ORGANIZATION_FEATURE_KEY,
  initialState: initialOrganizationState,
  reducers: {
    add: organizationAdapter.addOne,
    remove: organizationAdapter.removeOne,
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrganization.pending, (state: OrganizationState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchOrganization.fulfilled,
        (
          state: OrganizationState,
          action: PayloadAction<OrganizationEntity[]>
        ) => {
          organizationAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(
        fetchOrganization.rejected,
        (state: OrganizationState, action) => {
          state.loadingStatus = 'error';
          state.error = action.error.message;
        }
      )
      .addCase(fetchOrganizations.pending, (state: OrganizationState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchOrganizations.fulfilled,
        (
          state: OrganizationState,
          action: PayloadAction<OrganizationEntity[]>
        ) => {
          organizationAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(
        fetchOrganizations.rejected,
        (state: OrganizationState, action) => {
          state.loadingStatus = 'error';
          state.error = action.error.message;
        }
      );
  },
});

/*
 * Export reducer for store configuration.
 */
export const organizationReducer = organizationSlice.reducer;

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
 *   dispatch(organizationActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const organizationActions = organizationSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllOrganization);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = organizationAdapter.getSelectors();

export const getOrganizationState = (rootState: { [x: string]: OrganizationState; }): OrganizationState =>
  rootState[ORGANIZATION_FEATURE_KEY];

export const selectAllOrganization = createSelector(
  getOrganizationState,
  selectAll
);

export const selectOrganizationEntities = createSelector(
  getOrganizationState,
  selectEntities
);
