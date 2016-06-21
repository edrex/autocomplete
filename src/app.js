import React from 'react';
import ReactDOM from 'react-dom';

import AutocompleteDemo from 'app/autocomplete_demo.js';

let container = document.getElementById('container');
let component = ReactDOM.render(React.createElement(AutocompleteDemo), container);
