import { useContext } from 'react'
import ThemeContext from './context'
import { ThemeAttributes } from './types'

export { ThemeAttributes }

export default function useTheme<T extends ThemeAttributes>(theme: T) {
  const context = useContext(ThemeContext)

  const merged = Object.assign({}, context, theme)
  return merged
}
