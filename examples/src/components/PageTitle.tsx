import * as React from 'react'
import styled from 'styled-components'

const PageTitle: React.SFC = ({ children }) => (
  <Wrapper>
    <Title>{children}</Title>
  </Wrapper>
)

const Title = styled('h1')`
  color: #000;
`

const Wrapper = styled('article')`
  ${Title} {
    margin-top: 0;
    margin-bottom: 0;
  }
`

export default PageTitle
