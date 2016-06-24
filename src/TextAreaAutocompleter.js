import React from 'react';
import classnames from 'classnames';

const wordCharsPat = '[\\w\-]',
    startRegex = new RegExp(`@${wordCharsPat}*$`),
    endRegex = new RegExp(`^${wordCharsPat}*`);

export function suggestableWord(text, position) {
  const textBefore = text.slice(0, position),
    startMatch = startRegex.exec(textBefore);
  if (!startMatch) {
    return null;
  }
  const start = startMatch.index + 1;
  const textAfter = text.slice(position),
    endMatch = endRegex.exec(textAfter),
    end = position + endMatch[0].length;
  return [start, end];
}

export default class TextAreaAutocompleter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.initialText,
      cursor: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleChange(event) {
    let position = event.target.selectionStart
    const text = event.target.value,
          wordBounds = suggestableWord(text, position);
    let suggestions;

    if (wordBounds) {
      const word = text.slice(...wordBounds);
      suggestions = this.props.suggester(word);
    }
    this.setState({
      text: text,
      wordBounds: wordBounds,
      cursor: 0,
      suggestions: suggestions
    });
  }
  handleSelect() {
    const suggestion = this.state.suggestions[this.state.cursor],
          text = this.state.text,
          [start, end] = this.state.wordBounds;
    this.setState({
      text: text.slice(0,start) + suggestion + text.slice(end),
      suggestions: null
    })
  }
  render() {
    let userChooser;
    if (this.state.suggestions) {
      userChooser = <div className='user-chooser'>
        {this.state.suggestions.map((item,i) =>
          <div key={item.username}
            className={classnames('user-chooser-user', {'is-selected': this.state.cursor == i})}
            onClick={ () => {
              this.setState({cursor: i})
              this.handleSelect()
            } }
            onMouseOver={ () => { this.setState({cursor: i}) } } >
              <img class='user-chooser-user-avatar' src={item.avatar_url}/>
              <div class='user-chooser-user-username'>{item.username}</div>
              <div class='user-chooser-user-name'>{item.name}</div>
          </div>
        )}
      </div>
    }

    return <div class="autocompleter"
      tabIndex="1"
      onKeyDown={(e) => {
        if (this.state.suggestions) {
          switch (e.key) {
          case 'ArrowUp':
            this.moveCursorBy(-1)
            break;
          case 'ArrowDown':
            this.moveCursorBy(1)
            break;
          case 'Enter':
            this.handleSelect()
            break;
          default:
            console.log(e.key);
            return;
          }
          e.preventDefault();
        }
      }}
      onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            this.clearSuggestions()
          }
      }}>
      <textarea
        type="text"
        value={this.state.text}
        onChange={this.handleChange}
        onSelect={this.handleChange}
      />
      {userChooser}
    </div>;
  }
  moveCursorBy(d) {
    this.setState({cursor: (this.state.cursor+d) % this.state.suggestions.length})
  }
  clearSuggestions() {
    this.setState({suggestions: null})
  }
}

TextAreaAutocompleter.defaultProps = {
  initialText: ''
};
