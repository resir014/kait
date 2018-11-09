import * as React from 'react'
import styled, { ThemeProps } from 'styled-components'
import { RouteComponentProps } from '@reach/router'
import useTheme, { ThemeAttributes } from '../../../packages/use-theme/src'
import Page from '../components/Page'
import PageTitle from '../components/PageTitle'

const darkTheme: ThemeAttributes = {
  backgroundColor: '#333',
  textColor: 'yellow',
  borderColor: 'transparent'
}

const lightTheme: ThemeAttributes = {
  backgroundColor: '#fff',
  textColor: '#f00',
  borderColor: '#f00'
}

const ThemeDemo = styled('div')`
  margin: 1.5rem 0;
  padding: 1.5rem;
  border: 3px solid ${(props: ThemeProps<ThemeAttributes>) => props.theme.borderColor};
  border-radius: 8px;
  color: ${(props: ThemeProps<ThemeAttributes>) => props.theme.textColor};
  background-color: ${(props: ThemeProps<ThemeAttributes>) => props.theme.backgroundColor};
`

const ThemeExample: React.SFC<RouteComponentProps> = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false)
  const theme = useTheme(isDarkTheme ? darkTheme : lightTheme)

  return (
    <Page>
      <PageTitle>Media Queries</PageTitle>
      <ThemeDemo theme={theme}>{isDarkTheme ? 'dark theme' : 'light theme'}</ThemeDemo>
      <button onClick={() => setIsDarkTheme(!isDarkTheme)}>toggle theme</button>
    </Page>
  )
}

export default ThemeExample
