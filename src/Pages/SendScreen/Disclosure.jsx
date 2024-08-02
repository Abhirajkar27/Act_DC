import React, { useEffect, useState } from 'react';
import './Disclosure.css'; 
import imag from '../../assets/img/Boxes3.png';

const Disclosure = (props) => {
  const [showMessage, setShowMessage] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 4000); 

    return () => clearTimeout(timer); 
  }, []);

  const handleCopy = () => {
    const url = `https://dumbdisclosureactivitywybtestingrec.netlify.app?activityId=${props.activityId}`;
    navigator.clipboard.writeText(url)
      .then(() => setCopyFeedback('Copied!'))
      .catch(() => setCopyFeedback('Copy failed. Please try again.'));
  };

  return (
    <div className="container_DDC">
      <div className="copy-box_DDC">
        <div className="copy-text_DDC">
          {`https://emojichactivitywybtestingv2rec.netlify.app/?activityId=${props.activityId}`}
        </div>
        <button className="copy-button_DDC" onClick={handleCopy}>
          Copy
        </button>
        {copyFeedback && <div className="copy-feedback_DDC">{copyFeedback}</div>}
      </div>
      {!showMessage ? (
        <div className="oscillate_DDC">
          <img src={imag} alt="Oscillating" className="image_DDC" />
        </div>
      ) : (
        <>
          <div className="message-container_DDC">
            <div className="main-message_DDC">Nailed It!😍</div>
            <div className="sub-message_DDC">Activity sent to Rahul</div>
          </div>
          <button className={`nxtbtntp_DDC`} onClick={()=>console.log(9)} ><span className={`nxtbtntp-txt_DDC`}>Continue</span></button>
        </>
      )}
    </div>
  );
};

export default Disclosure;