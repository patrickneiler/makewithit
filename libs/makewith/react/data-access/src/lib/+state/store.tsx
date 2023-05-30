/* eslint-disable @nx/enforce-module-boundaries */
import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '@the/feature/react/user';
import { organizationSlice } from '@the/feature/react/organization';

// Create the store
export const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
        [organizationSlice.name]: organizationSlice.reducer,
    },
    devTools: true
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
