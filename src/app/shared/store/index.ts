import { hydrationMetaReducer } from './hydration.reducer'
import { MetaReducer } from '@ngrx/store'

export const metaReducers: MetaReducer[] = [hydrationMetaReducer]
