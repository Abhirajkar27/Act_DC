import "./App.css";
import Landing from "./Pages/Landing/Landing";
import DCMain from "./Pages/MainPage/DCMain";
import { useState } from 'react';
import { DC_Provider } from './context/DC_Context';
import SendPage from "./Pages/SendScreen/SendPage";


function App() {
  const [gameIndex, setIndex] = useState(null);
  // const [activityId, setActivityId] = useState('');

  let content;
  switch (gameIndex) {
    case 0:
      content = <DCMain onClose={() => { setIndex(null); }} onforw={() => { setIndex(1); }} />;
      break;
    case 1:
      content = <SendPage onClose={() => { setIndex(null); }} onforw={() => { setIndex(1); }} />;
      break;
    default:
      content = <Landing onNext={() => { setIndex(0); }} />;
  }
  return (
    <DC_Provider className="DC_Axtivity">{content}</DC_Provider>
  );
}

export default App;