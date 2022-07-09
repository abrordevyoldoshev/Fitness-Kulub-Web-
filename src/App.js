import React from "react";
import './SASS/import.scss'
import Hero from "./Components/Hero";
import Programs from "./Programs/Programs";
import Reasons from "./Reasons/Reasons";

function App() {
    return (
        <div className='app'>
            <Hero/>
            <Programs/>
            <Reasons/>

        </div>
    );
}

export default App;
