import React from 'react'

import { Button } from 'neonbutton'
import 'neonbutton/dist/index.css'

const App = () => {
  return (
    <div>
      <Button
        text={'Click Me'}
        onClick={() => alert("Hello, i'm alert message")}
        className='new-button'
        type='blue'
      />
    </div>
  )
}

export default App
