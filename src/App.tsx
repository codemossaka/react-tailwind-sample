import React from 'react';
import './App.css';

function App() {
    return (
        <div className=" w-full flex justify-between rounded" >
            <div className="border w-[500px] h-[200px] rounded bg-blue-200">
                <button className="square">
                    click
                </button>
            </div>
            <div className="border w-[500px] h-[200px] rounded bg-orange-200">

            </div>
        </div>
    );
}

export default App;
