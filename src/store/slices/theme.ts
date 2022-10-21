import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type ColorScheme = 'light' | 'dark'

export interface ThemeState {
	colorScheme: ColorScheme
}

export const themeSlice = createSlice({
	name: 'theme',
	initialState: {
		colorScheme: 'light',
	},
	reducers: {
		changeColorScheme: (state, action: PayloadAction<ColorScheme>) => {
			state.colorScheme = action.payload
		},
	},
})

export const { changeColorScheme } = themeSlice.actions
export default themeSlice.reducer
