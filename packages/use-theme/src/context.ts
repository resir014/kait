import * as React from 'react'
import { ThemeAttributes } from './types'

const defaultTheme: ThemeAttributes = {
  backgroundColor: '#eee',
  textColor: '#333'
}

const ThemeContext = React.createContext<ThemeAttributes>(defaultTheme)

export default ThemeContext
