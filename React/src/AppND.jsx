import './App.css';
import './buttons.scss';
import R01 from './Components/R01';
import R02 from './Components/R02';
import R03 from './Components/R03';

function App() {

  return (
    <>
      <div className="app">
        <header className="app-header">
          <h4>React ND</h4>
          {/* <R01 />
          <R02 /> */}
          <R03 />

        </header>
      </div>
      
    </>

  );
}

export default App;