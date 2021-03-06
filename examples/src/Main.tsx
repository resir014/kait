import * as React from 'react'
import { Router } from '@reach/router'

import IndexPage from './pages'
import MediaExample from './pages/use-media'
import VerticalScrollExample from './pages/use-vertical-scroll'
import ThemeExample from './pages/use-theme'

const Main = () => (
  <Router>
    <IndexPage path="/" />
    <MediaExample path="use-media" />
    <VerticalScrollExample path="use-vertical-scroll" />
    <ThemeExample path="use-theme" />
  </Router>
)

export default Main
