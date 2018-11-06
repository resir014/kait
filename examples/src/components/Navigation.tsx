import styled from 'styled-components'

const Navigation = styled('nav')`
  padding: 1rem 1.5rem;

  background-color: #333;
  color: #fff;

  a {
    color: #fff;
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }

    &.is-active {
      text-decoration: underline;
    }
  }
`

export default Navigation
