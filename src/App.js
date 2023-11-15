import logo from './logo.svg';
import './App.css';
import info from './models/info'
import ProfileImg from './components/ProfileImg';
import Name from './components/Name';
import WorkHistory from './components/WorkHistory';
import Buttons from './components/Buttons';
import symbols from './models/symbols';
import Contact from './components/Contact';
import Education from './components/Education';


import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)

  const decreaseCount = () => {
    setCount(count - 1)
  }

  const increaseCount = () => {
    setCount(count + 1)
    console.log(count)
  }

  return (
    <div style={{ backgroundColor: 'blue' }} className="App">
      <div style={{ width: '100%', height: '100%' }}>
        <ProfileImg pic={info.profImg} />
      </div>
      <Name profName={info.name} />

      <Contact contEmail={info.email} contPhone={info.phone} contAddress={info.address} />

      <Education eduInfo={info.education} />

      <WorkHistory workingHistory={info.workHistory[count]} />
      <>
        <Buttons toggleWorkHistory={decreaseCount} icon={symbols.left} />
        <Buttons toggleWorkHistory={increaseCount} icon={symbols.right} />
      </>
    </div>
  );
}

export default App;
