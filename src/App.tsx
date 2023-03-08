import React from 'react';
import { Toaster } from 'react-hot-toast';
import './App.css';
import LoadingPage from './pages/LoadingPage/LoadingPage';
import MainPage from './pages/MainPage/MainPage';

function App() {
  const [isLoading, setIsloading] = React.useState<boolean>(true);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
        </div>

        {isLoading && <LoadingPage
          setIsloading={setIsloading}
        />}

        {!isLoading && <MainPage/>}
      </header>
    </div>
  );
}

export default App;
