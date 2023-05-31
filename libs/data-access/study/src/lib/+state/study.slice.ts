import { firestore } from '@the/util/react/firebase';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

export const STUDY_FEATURE_KEY = 'study';

/*
 * Update these interfaces according to your requirements.
 */
export type ICaseStudy = {
  title: string;
  publishedAt: string;
  summary: string;
  organizationId: string;
  tags?: string[];
  image?: string;
  body?: CaseStudyBody;
  slug?: string;
};

type CaseStudyBody = {
  problem: {
    text: string;
    image: string;
  };
  solution: {
    text: string;
    image: string;
  };
  images?: string[]
}

export interface StudyEntity extends ICaseStudy{
  id?: number;
  uid?: string;
}

export interface StudyState extends EntityState<StudyEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error?: string;
}

export const studyAdapter = createEntityAdapter<StudyEntity>();

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
 *   dispatch(fetchStudy())
 * }, [dispatch]);
 * ```
 */
export const fetchStudy = createAsyncThunk(
  'study/fetchStatus',
  async (uid: string, thunkAPI) => {
    const docRef = doc(firestore, "studies", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const study: StudyEntity =  {
        ...docSnap.data() as StudyEntity,
        id: docSnap.data().uid,
      }
      return Promise.resolve([study]);
    } else {
      // docSnap.data() will be undefined in this case
      return Promise.reject({
        error: {
          message: 'Study does not exist'
        }
      })
    }
  }
);

export const fetchStudies = createAsyncThunk(
  'studies/fetchStatus',
  async (_, thunkAPI) => {
    const studys: StudyEntity[] = [];
    const querySnapshot = await getDocs(collection(firestore, "studies"));
    querySnapshot.forEach((doc) => {

      const study: StudyEntity =  {
        ...doc.data() as StudyEntity,
        id: doc.data().uid,
      }
      studys.push(study);
    });
    if (studys.length) {
      return Promise.resolve(studys);
    } else {
      return Promise.reject({
        error: {
          message: 'Studies dont exist'
        }
      })
    }
    
  }
);

export const initialStudyState: StudyState =
  studyAdapter.getInitialState({
    loadingStatus: 'not loaded',
  });

export const studySlice = createSlice({
  name: STUDY_FEATURE_KEY,
  initialState: initialStudyState,
  reducers: {
    add: studyAdapter.addOne,
    remove: studyAdapter.removeOne,
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudy.pending, (state: StudyState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchStudy.fulfilled,
        (
          state: StudyState,
          action: PayloadAction<StudyEntity[]>
        ) => {
          studyAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(
        fetchStudy.rejected,
        (state: StudyState, action) => {
          state.loadingStatus = 'error';
          state.error = action.error.message;
        }
      )
      .addCase(fetchStudies.pending, (state: StudyState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchStudies.fulfilled,
        (
          state: StudyState,
          action: PayloadAction<StudyEntity[]>
        ) => {
          studyAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(
        fetchStudies.rejected,
        (state: StudyState, action) => {
          state.loadingStatus = 'error';
          state.error = action.error.message;
        }
      );
  },
});

/*
 * Export reducer for store configuration.
 */
export const studyReducer = studySlice.reducer;

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
 *   dispatch(studyActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const studyActions = studySlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllStudy);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = studyAdapter.getSelectors();

export const getStudyState = (rootState: any): StudyState =>
  rootState[STUDY_FEATURE_KEY];

export const selectAllStudy = createSelector(
  getStudyState,
  selectAll
);

export const selectStudyEntities = createSelector(
  getStudyState,
  selectEntities
);

