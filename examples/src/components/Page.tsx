import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import styled from 'styled-components'
import Wrapper from './Wrapper'

const Page: React.SFC<RouteComponentProps> = ({ children }) => (
  <Wrapper>
    <Root>{children}</Root>
  </Wrapper>
)

const Root = styled('article')`
  padding: 1.5rem;

  img {
    max-width: 100%;
  }
`

export default Page
