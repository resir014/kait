import * as React from 'react'
import { Link, RouteComponentProps } from '@reach/router'
import Page from '../../components/Page'

const IndexPage: React.SFC<RouteComponentProps> = () => (
  <Page>
    <h1>Examples</h1>
    <ul>
      <li>
        <Link to="/use-media">Media Queries</Link>
      </li>
      <li>
        <Link to="/use-vertical-scroll">Vertical Scroll</Link>
      </li>
    </ul>
  </Page>
)

export default IndexPage
