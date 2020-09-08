import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

import { createHashHistory } from 'history';

const history = createHashHistory()

class NewRecord extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      step: 0
    }
  }

  onNextHandler = (e) => {
    e.preventDefault();
    this.setState({
      step: this.state.step+1
    }, () => {
      history.replace(`/new_record/step${this.state.step}`);
    });    
  }

  onPreviousHandler = (e) => {
    e.preventDefault();
    this.setState({
      step: this.state.step-1
    }, () => {
      history.replace(`/new_record/step${this.state.step}`);
    });
    
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.step<=1 ? "" :
            <li>
              <button onClick={(e) => this.onPreviousHandler(e)}>Previous</button>
            </li>
          }
          {this.state.step>=3 ? "" :
            <li>
              <button onClick={(e) => this.onNextHandler(e)}>Next</button>
            </li>
          }
        </ul>
        This is New Record page
      </div>
    )
  }
}

export default NewRecord;
