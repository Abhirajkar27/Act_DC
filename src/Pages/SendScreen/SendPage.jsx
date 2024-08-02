import React, { useContext } from 'react';
import './SendPage.css';
import { DC_Context } from '../../context/DC_Context';
import profpic from '../../assets/img/profile.png';
import lock from '../../assets/img/lock.png';
import AddNote from '../../components/AddNote';

const SendPage = (props) => {
    const { dcQues,
        senAns,
        noteTextareaValue,
        setNoteTextareaValue } = useContext(DC_Context);

    return (
        <div className='send-pg_SDC'>
            <div className="backbtnSDC" onClick={props.onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.165 11.9934L13.1634 11.6393C13.1513 10.2348 13.0666 8.98174 12.9206 8.18763C12.9206 8.17331 12.7613 7.38572 12.6599 7.12355C12.5006 6.74463 12.2126 6.42299 11.8515 6.2192C11.5624 6.0738
                     11.2592 6 10.9417 6C10.6922 6.01157 10.2806 6.13714 9.98692 6.24242L9.74283 6.33596C8.12612 6.97815 5.03561 9.07656 3.85199 10.3598L3.76473 10.4495L3.37527 10.8698C3.12982 11.1915 3 11.5847 3 12.0077C3 12.3866 3.11563 12.7656 3.3469 13.0718C3.41614 13.171
                     3.52766 13.2983 3.62693 13.4058L4.006 13.8026C5.31046 15.1243 8.13485 16.9782 9.59883 17.5924C9.59883 17.6057 10.5086 17.9857 10.9417 18H10.9995C11.6639 18 12.2846 17.6211 12.6021 17.0086C12.6888 16.8412 12.772 16.5132 12.8352 16.2252L12.949 15.6813C13.0788
                     14.8067 13.165 13.465 13.165 11.9934ZM19.4967 13.5183C20.3269 13.5183 21 12.8387 21 12.0004C21 11.1622 20.3269 10.4825 19.4967 10.4825L15.7975 10.8097C15.1463 10.8097 14.6183 11.3417 14.6183 12.0004C14.6183 12.6581 15.1463 13.1912 15.7975 13.1912L19.4967 13.5183Z"
                        fill="white" />
                </svg>
            </div>
            <div className='msgheading_SDC'><span>Choose your question</span></div>
            <div className='msgSubheading_SDC'><span>Choose a question for you both to answer</span></div>
            <div className="ques_ans_container_SDC">
            <svg className='thread_qasdc' xmlns="http://www.w3.org/2000/svg" width="143" height="152" viewBox="0 0 143 152" fill="none">
                    <path d="M9.99995 -9C-2.00002 34 37.4 88.8 85 74C132.6 59.2 123 15.6428 85 26.5C57.1116 34.4681 47 83 111.5 92.5C155 98.907 164.5 123.5 155 149" stroke="#FF8AFB" stroke-width="14" />
                </svg>
                <span className='ques_SDC'>{dcQues}</span>
                <div className='ans_area_SDC'>
                    <div className='prof_SDC'>
                        <img src={profpic} alt='profile_img'/></div>
                    <span className='Blur_text_SDE'>{senAns}</span>
                    <div className='lock_SDC'>
                        <img src={lock} alt='lock-icon' /></div>
                </div>
            </div>
            <AddNote noteTextareaValue={noteTextareaValue} setNoteTextareaValue={setNoteTextareaValue} />
            <button onClick={props.onforw} className={`nxtbtntp_SDC`}><span className={`nxtbtntp-txt_SDC`}>Send</span></button>
        </div>
    )
}
export default SendPage;
