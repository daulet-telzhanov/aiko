import React from 'react';
import './App.css';
import HeartLoader from './components/HeartLoader/HeartLoader';
import LoadingPage from './pages/LoadingPage/LoadingPage';
import MainPage from './pages/MainPage/MainPage';

function App() {
  const [isLoading, setIsloading] = React.useState<boolean>(true);

  return (
    <div className="App">
      <header className="App-header">
        {isLoading && <LoadingPage
          setIsloading={setIsloading}
        />}

        {!isLoading && <MainPage/>}
      </header>
    </div>
  );
}

export default App;
