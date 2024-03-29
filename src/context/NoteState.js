import React from "react";
import NoteContext from "./noteContext.js";

const NoteState = (props) => {
    const state = {};
    return (
        < NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;