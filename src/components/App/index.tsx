import Button from '../Button';
import icon from '../../assets/person-through-window-solid.svg';

import { useGetDog } from '../../hooks/useGetDog';
import './App.css';

function App() {
  const { dog } = useGetDog();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          React Opinionated Folder Structure
        </p>
        { dog && <img src={dog} height="200" alt="dog" /> }
        <Button
          title="Testing button"
          onClick={() => alert("testing button")}
        />
        <img src={icon} alt="icon" height="50"/>
      </header>
    </div>
  );
}

export default App;
