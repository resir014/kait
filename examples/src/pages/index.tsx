import * as React from 'react'
import { Link, RouteComponentProps } from '@reach/router'

const IndexPage: React.SFC<RouteComponentProps> = () => (
  <div>
    <h1>Examples</h1>
    <ul>
      <li>
        <Link to="/use-media">Media Queries</Link>
      </li>
      <li>
        <Link to="/use-vertical-scroll">Vertical Scroll</Link>
      </li>
    </ul>
  </div>
)

export default IndexPage
