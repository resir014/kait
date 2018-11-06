import * as React from 'react'
import styled from 'styled-components'
import { Link, LinkGetProps } from '@reach/router'

interface NavLinkProps {
  className?: string
  to?: string
  replace?: boolean
  getProps?: (props: LinkGetProps) => {}
}

const NavLink: React.SFC<NavLinkProps> = ({ children, to }) => {
  return (
    <LinkBase to={to} getProps={({ isCurrent }) => (isCurrent ? { className: 'is-active' } : null)}>
      {children}
    </LinkBase>
  )
}

export default NavLink

const LinkBase = styled(Link)``
