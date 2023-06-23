/* eslint-disable @nx/enforce-module-boundaries */
import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '@the/data-access/user';
import { organizationSlice } from '@the/data-access/organization';
import { studySlice } from '@the/data-access/study';

// Create the store
export const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
        [organizationSlice.name]: organizationSlice.reducer,
        [studySlice.name]: studySlice.reducer,
    },
    devTools: false
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
