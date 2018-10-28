import * as React from 'react'
import { Router, Link } from '@reach/router'

import MediaExample from './pages/use-media'
import IndexPage from './pages'

const Main = () => (
  <div>
    <Router>
      <IndexPage path="/" />
      <MediaExample path="/use-media" />
    </Router>
  </div>
)

export default Main
