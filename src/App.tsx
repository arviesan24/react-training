import React, {Component} from 'react';
import './App.css';

// import StageIdentifier from './StageIdentifier';
// import Randomizer from './Randomizer';
// import Anagram from './Anagram';
// import SchoolForm from './SchoolForm';
// import Registration from './ReactRegistration/registration';
import Countries from './Countries';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <StageIdentifier /> */}
                {/* <Randomizer /> */}
                {/* <Anagram /> */}
                {/* <SchoolForm /> */}
                {/* <Registration /> */}
                <Countries />
            </div>
        );
    }
}

export default App;
