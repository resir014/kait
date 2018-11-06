import * as React from 'react'
import { Router } from '@reach/router'

import IndexPage from './pages'
import MediaExample from './pages/use-media'
import VerticalScrollExample from './pages/use-vertical-scroll'
import { Normalize } from './styles/normalize'

const Main = () => (
  <main>
    <Normalize />
    <Router>
      <IndexPage path="/" />
      <MediaExample path="use-media" />
      <VerticalScrollExample path="use-vertical-scroll" />
    </Router>
  </main>
)

export default Main
