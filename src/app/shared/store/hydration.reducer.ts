import { ActionReducer, INIT } from '@ngrx/store'
import { SharedState } from './shared.state'

export const hydrationMetaReducer = (reducer: ActionReducer<SharedState>): ActionReducer<SharedState> => {
  return (state, action) => {
    if (action.type === INIT) {
      const storageValue = localStorage.getItem('sharedState')
      if (storageValue) {
        try {
          return JSON.parse(storageValue)
        } catch {
          localStorage.removeItem('sharedState')
        }
      }
    }
    const nextState = reducer(state, action)
    localStorage.setItem('sharedState', JSON.stringify(nextState))
    return nextState
  }
}
