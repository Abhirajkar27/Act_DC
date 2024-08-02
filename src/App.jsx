import "./App.css";
import Landing from "./Pages/Landing/Landing";
import DCMain from "./Pages/MainPage/DCMain";
import { useState } from 'react';
import { DC_Provider } from './context/DC_Context';
import SendPage from "./Pages/SendScreen/SendPage";
import Disclosure from "./Pages/SendScreen/Disclosure";


function App() {
  const [gameIndex, setIndex] = useState(null);
  const [activityId, setActivityId] = useState('ab');

  let content;
  switch (gameIndex) {
    case 0:
      content = <DCMain onClose={() => { setIndex(null); }} onforw={() => { setIndex(1); }} />;
      break;
    case 1:
      content = <SendPage onClose={() => { setIndex(0); }} onforw={() => { setIndex(2); }} />;
      break;
    case 2:
      content = <Disclosure />;
      break;
    default:
      content = <Landing onNext={() => { setIndex(0); }} />;
  }
  return (
    <DC_Provider className="DC_Axtivity">{content}</DC_Provider>
  );
}

export default App;