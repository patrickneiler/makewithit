import { EntityState } from "@reduxjs/toolkit";

export type ReduxStore = { [x: string]: EntityState<[x: string]>; }