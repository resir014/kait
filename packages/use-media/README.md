# `@kait/use-media`

> Media queries. Powered by React hooks.

## Install

```bash
# yarn
$ yarn add @kait/use-media
# npm
$ npm i @kait/use-media
```

## Usage

```tsx
import useMedia from '@kait/use-media'

function Drawer() {
  const mobile = useMedia('(max-width: 640px)')

  return <>{mobile ? <MobileDrawer /> : <DesktopDrawer />}</>
}
```
