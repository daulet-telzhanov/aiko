import React from 'react';
import './App.css';
import HeartLoader from './components/HeartLoader/HeartLoader';
import LoadingPage from './pages/LoadingPage/LoadingPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoadingPage/>
      </header>
    </div>
  );
}

export default App;
