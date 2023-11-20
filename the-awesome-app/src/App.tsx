import React from 'react';
import logo from './logo.svg';
import Hello from './components/Hello';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <main>
        <Hello message="React"/>
        <Hello message="World"/>

        <Counter value={10} title='Count' />
        <Counter value={15}/>
        
      </main>
    </div>
  );
}

export default App;
