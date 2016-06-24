import React from 'react';
import ReactDOM from 'react-dom';

import TextAreaAutocompleter from 'app/TextAreaAutocompleter.js';
import Suggestions from 'app/Suggestions.js';

let container = document.getElementById('container');
// let component = ReactDOM.render(React.createElement(TextAreaAutocompleter), container);
let root = <div>
      <TextAreaAutocompleter/>
      <Suggestions items={[
        {
          "username": "pturner0",
          "avatar_url": "https://secure.gravatar.com/avatar/cd4318b7fb1cf64648f59198aca8757f?d=mm",
          "name": "Paula Turner"
        }, {
          "username": "pdixon1",
          "avatar_url": "https://secure.gravatar.com/avatar/be09ed96613495dccda4eeffc4dd2daf?d=mm",
          "name": "Patrick Dixon"
        }
      ]} />
  </div>;
let component = ReactDOM.render(root, container);
