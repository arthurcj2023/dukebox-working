import {Route, Routes} from 'react-router-dom';
import './App.css';
import { Artists } from './Artists.js'
import { Albums } from './Albums.js'
import { Songs } from './Songs.js'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Artists />}/>
        <Route path="/:artist" element={<Albums />}/>
        <Route path="/:artist/:album" element={<Songs />}/>
      </Routes>
    </div>
  );
}

export default App;
