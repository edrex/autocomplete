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

// workaround js % mishandling of negative numbers
function mod(n, m) {
  return ((n % m) + m) % m;
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
      if (suggestions.length == 1 && suggestions[0].username == word) {
        suggestions = null;
      }
    }
    this.setState({
      text: text,
      wordBounds: wordBounds,
      cursor: 0,
      suggestions: suggestions
    });
  }
  handleSelect(i) {
    i = i || this.state.cursor
    const suggestion = this.state.suggestions[i],
          text = this.state.text,
          [start, end] = this.state.wordBounds;
    this.setState({
      text: text.slice(0,start) + suggestion.username + text.slice(end),
      suggestions: null,
      cursor: null
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
              this.handleSelect(i)
            } }
            tabIndex="1"
            onMouseOver={ () => { this.setState({cursor: i}) } } >
              <img className='user-chooser-user-avatar' src={item.avatar_url}/>
              <div className='user-chooser-user-detail'>
                <div className='user-chooser-user-username'>{item.username}</div>
                <div className='user-chooser-user-name'>{item.name}</div>
              </div>
          </div>
        )}
      </div>
    }

    return <div class="autocompleter"
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
            return;
          }
          e.preventDefault();
        }
      }}
      onBlur={(e) => {
          // no action if we moved focus within the component
          // along with tabindex on user-chooser, allows click selection to succeed
          // TODO(edrex): look at the accessibility implications of this. Maybe tabindex per-item?
          if (!e.currentTarget.contains(e.relatedTarget)) {
            this.clearSuggestions()
          }
      }}>
      <textarea
        type="text"
        value={this.state.text}
        onChange={this.handleChange}
        onSelect={this.handleChange}
        onFocus={this.handleChange}
      />
      {userChooser}
    </div>;
  }
  moveCursorBy(d) {
    this.setState({cursor: mod(this.state.cursor+d, this.state.suggestions.length)})
  }
  clearSuggestions() {
    this.setState({suggestions: null})
  }
}

TextAreaAutocompleter.defaultProps = {
  initialText: ''
};
