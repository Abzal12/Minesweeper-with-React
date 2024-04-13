import React from 'react';
import Loading from "./loading/Loading";
import Fields from "./fields/Fields"
import "./App.css"
import ControlPanel from "./control-panel/ControlPanel";

function App() {
    return (
        <div className="App">
            <div className="Border">
                <Loading/>
                <ControlPanel/>
                <Fields/>
            </div>
        </div>
    )
}

export default App;