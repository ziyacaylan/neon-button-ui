# neonbutton

> colorfull neon buttons

[![NPM](https://img.shields.io/npm/v/neon-button-ui.svg)](https://www.npmjs.com/package/neon-button-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save neon-button-ui
```

## Usage

```jsx
import React, { Component } from 'react'

import { NeonButton as MyComponent } from 'neon-button-ui'
import 'neon-button-ui/dist/index.css'

class Example extends Component {
  render() {
    return (
      <MyComponent
        type='pink'
        text='Click Me'
        onClick={() => alert("Hello, I'm neon Button...")}
      />
      <MyComponent
        type='blue'
        text='Click Me'
        onClick={() => alert("Hello, I'm neon Button...")}
      />
      <MyComponent
        type='purple'
        text='Click Me'
        onClick={() => alert("Hello, I'm neon Button...")}
      />
      <MyComponent
        type='orange'
        text='Click Me'
        onClick={() => alert("Hello, I'm neon Button...")}
      />
      <MyComponent
        type='yellow'
        text='Click Me'
        onClick={() => alert("Hello, I'm neon Button...")}
      />
      <MyComponent
        type='green-dark'
        text='Click Me'
        onClick={() => alert("Hello, I'm neon Button...")}
      />
      <MyComponent
        type='green-light'
        text='Click Me'
        onClick={() => alert("Hello, I'm neon Button...")}
      />
      <MyComponent
        type='cyan'
        text='Click Me'
        onClick={() => alert("Hello, I'm neon Button...")}
      />
      <MyComponent
        type='black'
        text='Click Me'
        onClick={() => alert("Hello, I'm neon Button...")}
      />
      <MyComponent
        type='red'
        text='Click Me'
        onClick={() => alert("Hello, I'm neon Button...")}
      />
    )
  }
}
```

![gif](./HEAD/dist/React-App-Google-Chrome-2022-10-27-18-26-00.gif)

## License

MIT © [ziyacaylan](https://github.com/ziyacaylan)
