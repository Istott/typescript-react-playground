import React, {useState} from 'react';
import './App.css';
interface SupIndex {
  
}
function App() {
  const [newSup, setNewSup] = useState<string>('');
  const [sup, setSup] = useState<string>('');

  const onSubmit = () => {
    setNewSup(sup);
    setSup('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{newSup}</p>
        <span><input 
          type='text'
          placeholder='give me sumthin'
          value={sup}
          onChange={(e) => setSup(e.target.value)}
        ></input>
        <button
          onClick={onSubmit}
        >hit it</button></span>
      </header>
    </div>
  );
}

export default App;
