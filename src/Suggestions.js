import React from 'react';
import UserSuggestion from 'app/UserSuggestion.js';

export default class Suggestions extends React.Component {
  render() {
    return <div className='suggestions'>
      {this.props.items.map((item,i) => <UserSuggestion key={item.username} item={item}/>)}
    </div>;
  }
}

Suggestions.defaultProps = {
  items: []
};
