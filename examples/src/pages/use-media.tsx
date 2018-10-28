import * as React from 'react'
import { RouteComponentProps, Link } from '@reach/router'
import useMedia from '../../../packages/use-media/src'

const MobileHeader = () => <div>MobileHeader</div>
const DesktopHeader = () => <div>DesktopHeader</div>

const MediaExample: React.SFC<RouteComponentProps> = () => {
  const mobile = useMedia('(max-width: 640px)')

  return (
    <div>
      <h1>Media Queries</h1>
      {mobile ? <MobileHeader /> : <DesktopHeader />}
      <Link to="/">Go back home</Link>
    </div>
  )
}

export default MediaExample
