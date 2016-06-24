import React from 'react';
import classnames from 'classnames';

export default class UserSuggestion extends React.Component {
  render() {
    return <div className={classnames('suggestion', {'is-selected': this.props.selected})}>
      <img class='suggestion-avatar' src={this.props.item.avatar_url}/>
      <div class='suggestion-username'>{this.props.item.username}</div>
      <div class='suggestion-name'>{this.props.item.name}</div>
    </div>;
  }
}

UserSuggestion.propTypes = {
  item: React.PropTypes.object,
  selected: React.PropTypes.bool
};
