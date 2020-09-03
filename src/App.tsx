import React, {Component} from 'react';
import './App.css';

// import StageIdentifier from './StageIdentifier';
// import Randomizer from './Randomizer';
// import Anagram from './Anagram';
// import SchoolForm from './SchoolForm';
import Registration from './ReactRegistration/registration';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <StageIdentifier /> */}
                {/* <Randomizer /> */}
                {/* <Anagram /> */}
                {/* <SchoolForm /> */}
                <Registration />
            </div>
        );
    }
}

export default App;
