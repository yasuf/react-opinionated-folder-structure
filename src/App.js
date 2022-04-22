import logo from './assets/logo.svg';
import Button from './components/Button';

import { useGetDog } from './hooks/useGetDog';
import './App.css';

function App() {
  const { dog, isLoading } = useGetDog();

  if (isLoading) {
    return null;
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          React Opinionated Folder Structure
        </p>
        <img src={dog} height="200" />
        <Button
          title="Testing button"
          onClick={(event) => alert("testing button")}
        />
      </header>
    </div>
  );
}

export default App;
