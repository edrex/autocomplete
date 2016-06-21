import React from 'react';

const wordCharsPat = '\\w',
    startRegex = new RegExp(wordCharsPat + '*$'),
    endRegex = new RegExp('^' + wordCharsPat + '*');

export function boundsOfWordAtPosition(text, position) {
  const textBefore = text.slice(0, position),
    startMatch = startRegex.exec(textBefore),
    start = startMatch.index;
  // don't match at the start of a word
  if (start == position) {
    return [0, 0];
  }
  const textAfter = text.slice(position),
    endMatch = endRegex.exec(textAfter),
    end = position + endMatch[0].length;
  return [start, end];
}

export default class AutoCompleteDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: props.initialText};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const currentPosition = event.target.selectionEnd
    const currentWord = event.target.value
    this.setState({text: event.target.value});
    console.log(event);
  }
  render() {
    return React.createElement('textarea', {
      type: "text",
      value: this.state.text,
      onChange: this.handleChange
    });
  }
}

AutoCompleteDemo.defaultProps = {initialText: 'Hello!'};
