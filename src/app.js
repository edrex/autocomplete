import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';
import TextAreaAutocompleter from 'app/TextAreaAutocompleter.js';
import UserSuggester from 'app/UserSuggester.js';

fetch('data.json')
  .then(response => response.json())
  .then(users => {
    let container = document.getElementById('container');
    let component = ReactDOM.render(<TextAreaAutocompleter suggester={ UserSuggester(users)} />, container);
  });

