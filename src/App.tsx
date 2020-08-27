import React, {Component} from 'react';
import './App.css';

import StageIdentifier from './StageIdentifier';
// import Randomizer from './Randomizer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <StageIdentifier />
                {/* <Randomizer /> */}
            </div>
        );
    }
}

export default App;
