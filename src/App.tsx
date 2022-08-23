import React from 'react';
import Hello from './components/hello'
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <Hello message='nihao'/>
      <Button>天地玄黄</Button>
      <Button>天地</Button>
      <h2>地</h2>
      <br/>
      <code>
        const a = 'hello';
      </code>
    </div>
  );
}

export default App;
