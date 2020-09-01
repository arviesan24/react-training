import React, {Component} from 'react';
import './App.css';

// import StageIdentifier from './StageIdentifier';
// import Randomizer from './Randomizer';
// import Anagram from './Anagram';
import FormExercise from './FormExercise';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <StageIdentifier /> */}
                {/* <Randomizer /> */}
                {/* <Anagram /> */}
                <FormExercise />
            </div>
        );
    }
}

export default App;
