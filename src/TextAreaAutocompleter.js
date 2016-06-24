import React from 'react';

const wordCharsPat = '[\\w\-]',
    startRegex = new RegExp(`${wordCharsPat}*$`),
    endRegex = new RegExp(`^${wordCharsPat}*`);

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

export default class TextAreaAutocompleter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: props.initialText};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const position = event.target.selectionEnd,
          text = event.target.value,
          wordBounds = boundsOfWordAtPosition(text, position),
          word = text.slice(...wordBounds);
    this.setState({
      text: text,
      wordBounds: wordBounds
    });
  }
  render() {
    return React.createElement('textarea', {
      type: "text",
      value: this.state.text,
      onChange: this.handleChange
    });
  }
}

TextAreaAutocompleter.defaultProps = {
  initialText: '',
  availableFolks: []
};
