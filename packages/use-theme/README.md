# `@kait/use-theme`

> Theme. Powered by React hooks.

## Install

```bash
# yarn
$ yarn add @kait/use-theme
# npm
$ npm i @kait/use-theme
```

## Usage

```tsx
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import useTheme, { ThemeAttributes } from '@kait/use-theme'

const ThemeExample: React.SFC<RouteComponentProps> = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const theme = useTheme(isDarkTheme ? darkTheme : lightTheme)

  return (
    <ThemeProvider theme={theme}>
      <Page>
        <PageTitle>Media Queries</PageTitle>
        <ThemeDemo>{isDarkTheme ? 'dark theme' : 'light theme'}</ThemeDemo>
        <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
          toggle theme
        </button>
      </Page>
    </ThemeProvider>
  )
}
```
