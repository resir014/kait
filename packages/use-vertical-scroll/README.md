# `@kait/use-vertical-scroll`

> Vertical scroll state. Powered by React hooks.

## Install

```bash
# yarn
$ yarn add @kait/use-vertical-scroll
# npm
$ npm i @kait/use-vertical-scroll
```

## Usage

```tsx
import classnames from 'classnames'
import useMedia from '@kait/use-vertical-scroll'

function Navigation() {
  // with topThreshold and bottomThreshold
  const shallowThreshold = useVerticalScroll(0, 299)
  // without bottomThreshold. state will remain true after passing topThreshold.
  const deepThreshold = useVerticalScroll(0, 300)

  return (
    <nav
      className={classnames(
        'navigation',
        shallowThreshold && 'is-shallow',
        deepThreshold && 'is-deep'
      )}
    >
      Navigation
    </nav>
  )
}
```
