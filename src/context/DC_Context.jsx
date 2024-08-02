import React, { createContext, useState, useEffect } from "react";

const DC_Context = createContext();

const DC_Provider = ({ children }) => {
    const [dcQues, setDcQues] = useState('Most random way that you have entertained yourself in the past week?');
    const [senAns, setSenAns] = useState('');
    const [noteTextareaValue, setNoteTextareaValue] = useState('');

    function handleInput_DC(event) {
        let value = event.target.value;
        if (value.length > 55) {
            value = value.slice(0, 55);
        }
        const lineCount = value.split('\n').length;
        if (lineCount <= 4) {
            const trimmedValue = value.replace(/^\s+/g, '');
            setSenAns(trimmedValue);
        }

    }


    return (
        <DC_Context.Provider
            value={{
                dcQues, 
                setDcQues,
                senAns, 
                setSenAns,
                handleInput_DC,
                noteTextareaValue, 
                setNoteTextareaValue,
            }}
        >
            {children}
        </DC_Context.Provider>
    );
};

export { DC_Context, DC_Provider };