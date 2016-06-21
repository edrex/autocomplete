import React from 'react';
export default class AutoCompleteDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: props.initialValue};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(event);
  }
  render() {
    return React.createElement('textarea', {
      type: "text",
      value: this.state.value,
      onChange: this.handleChange
    });
  }
}

AutoCompleteDemo.defaultProps = {initialValue: 'Hello!'};
