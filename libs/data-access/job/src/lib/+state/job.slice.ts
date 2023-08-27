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

export const JOB_FEATURE_KEY = 'job';

/*
 * Update these interfaces according to your requirements.
 */
export interface JobEntity {
  id?: number;
  uid?: string;
  name?: string;
  logo?: string;
}

export interface JobState extends EntityState<JobEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error?: string;
}

export const jobAdapter = createEntityAdapter<JobEntity>();

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
 *   dispatch(fetchJob())
 * }, [dispatch]);
 * ```
 */
export const fetchJob = createAsyncThunk(
  'job/fetchStatus',
  async (uid: string, thunkAPI) => {
    const docRef = doc(firestore, "jobs", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const job: JobEntity =  {
        ...docSnap.data() as JobEntity,
        id: docSnap.data().uid,
      }
      return Promise.resolve([job]);
    } else {
      // docSnap.data() will be undefined in this case
      return Promise.reject({
        error: {
          message: 'Job does not exist'
        }
      })
    }
  }
);

export const fetchJobs = createAsyncThunk(
  'jobs/fetchStatus',
  async (_, thunkAPI) => {
    const jobs: JobEntity[] = [];
    const querySnapshot = await getDocs(collection(firestore, "jobs"));
    querySnapshot.forEach((doc) => {

      const job: JobEntity =  {
        ...doc.data() as JobEntity,
        id: doc.data().uid,
      }
      jobs.push(job);
    });
    if (jobs.length) {
      return Promise.resolve(jobs);
    } else {
      return Promise.reject({
        error: {
          message: 'Jobs dont exist'
        }
      })
    }
    
  }
);

export const initialJobState: JobState =
  jobAdapter.getInitialState({
    loadingStatus: 'not loaded',
  });

export const jobSlice = createSlice({
  name: JOB_FEATURE_KEY,
  initialState: initialJobState,
  reducers: {
    add: jobAdapter.addOne,
    remove: jobAdapter.removeOne,
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJob.pending, (state: JobState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchJob.fulfilled,
        (
          state: JobState,
          action: PayloadAction<JobEntity[]>
        ) => {
          jobAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(
        fetchJob.rejected,
        (state: JobState, action) => {
          state.loadingStatus = 'error';
          state.error = action.error.message;
        }
      )
      .addCase(fetchJobs.pending, (state: JobState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchJobs.fulfilled,
        (
          state: JobState,
          action: PayloadAction<JobEntity[]>
        ) => {
          jobAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(
        fetchJobs.rejected,
        (state: JobState, action) => {
          state.loadingStatus = 'error';
          state.error = action.error.message;
        }
      );
  },
});

/*
 * Export reducer for store configuration.
 */
export const jobReducer = jobSlice.reducer;

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
 *   dispatch(jobActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const jobActions = jobSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllJob);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = jobAdapter.getSelectors();

export const getJobState = (rootState: { [x: string]: JobState; }): JobState =>
  rootState[JOB_FEATURE_KEY];

export const selectAllJob = createSelector(
  getJobState,
  selectAll
);

export const selectJobEntities = createSelector(
  getJobState,
  selectEntities
);
