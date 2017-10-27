# [Substance-UI](http://substance.mokko.surge.sh/)

> A Beautiful, reusable [React](http://facebook.github.io/react/) UI component library.

## Installation

Substance-UI is available as an [npm package](https://www.npmjs.com/package/substance-ui).

**Stable channel**
```sh
npm install substance-ui
```

## Usage

Here is a quick example to get you started, it's all you need:

```jsx
import React from 'react';
import { render } from 'react-dom';
import { Button } from 'substance-ui';

function App() {
  return (
    <Button size="small" color="primary">
      Small Button
    </Button>
  );
}

render(<App />, document.querySelector('#app'));
```

## Examples

Check out the demo [here](http://substance.mokko.surge.sh/)


## License

This project is licensed under the terms of the
[MIT license](https://github.com/mokko-lab/substance-ui/blob/master/LICENSE).
