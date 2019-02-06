import * as React from 'react'
import styled from 'styled-components'
import { RouteComponentProps } from '@reach/router'
import useMedia from '../../../packages/use-media/src'
import Page from '../components/Page'
import PageTitle from '../components/PageTitle'

interface HeaderProps {
  bgColor?: string
  textColor?: string
}

const Header = styled('div')`
  margin: 1.5rem 0;
  padding: 1.5rem;
  color: ${(props: HeaderProps) => props.textColor || '#fff'};
  background-color: ${(props: HeaderProps) => props.bgColor || '#006fe6'};
`

const MobileHeader = () => (
  <Header textColor="yellow" bgColor="#333">
    MobileHeader
  </Header>
)
const DesktopHeader = () => <Header bgColor="rebeccapurple">DesktopHeader</Header>

const MediaExample: React.SFC<RouteComponentProps> = () => {
  const mobile = useMedia('(max-width: 640px)')

  return (
    <Page>
      <PageTitle>Media Queries</PageTitle>
      {mobile ? <MobileHeader /> : <DesktopHeader />}
    </Page>
  )
}

export default MediaExample
