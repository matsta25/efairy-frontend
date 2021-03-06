export interface SharedState {
  isOnline: boolean
  loading: boolean
  isDarkMode: boolean
}

export const initialSharedState: SharedState = {
  isOnline: false,
  loading: false,
  isDarkMode: false,
}
