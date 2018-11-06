import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import Navigation from './Navigation'
import NavLink from './NavLink'
import { Normalize } from '../styles/normalize'
import styled from 'styled-components'

const Wrapper: React.SFC = ({ children }) => (
  <Root>
    <Normalize />
    <Navigation>
      <NavLink to="/">home</NavLink> | <NavLink to="/use-media">use-media</NavLink> |{' '}
      <NavLink to="/use-vertical-scroll">use-vertical-scroll</NavLink>{' '}
    </Navigation>
    {children}
  </Root>
)

export default Wrapper

const Root = styled('main')`
  position: relative;
`
