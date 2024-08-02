import "./App.css";
import Landing from "./Pages/Landing/Landing";
import DCMain from "./Pages/MainPage/DCMain";
import { useState } from 'react';


function App() {
  const [gameIndex, setIndex] = useState(null);
  // const [activityId, setActivityId] = useState('');

  let content;
  switch (gameIndex) {
    case 0:
      content = <DCMain onClose={()=>{setIndex(null);}} onforw={()=>{setIndex(1);}}/>;
      break;
    default:
      content = <Landing onNext={() => { setIndex(0); }} />;
  }
  return (
    <div className="DC_Axtivity">{content}</div>
  );
}

export default App;