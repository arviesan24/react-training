import React from 'react';

class InputBox extends React.Component {
  render(props) {
    return (
      <div>
        <label>{this.props.label} </label>
        <input type="text" value={this.props.value} onChange={this.props.onChangeHandler}/>
      </div>
    )
  }
}

export default InputBox;
