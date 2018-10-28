import * as React from 'react'
import { Router } from '@reach/router'

import IndexPage from './pages'
import MediaExample from './pages/use-media'
import VerticalScrollExample from './pages/use-vertical-scroll'

const Main = () => (
  <div>
    <Router>
      <IndexPage path="/" />
      <MediaExample path="/use-media" />
      <VerticalScrollExample path="/use-vertical-scroll" />
    </Router>
  </div>
)

export default Main
