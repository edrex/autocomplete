import AutocompleteDemo from 'app/autocomplete_demo';
import {boundsOfWordAtPosition} from 'app/autocomplete_demo';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import React from 'react';

// https://facebook.github.io/react/docs/test-utils.html
// http://www.asbjornenge.com/wwc/testing_react_components.html

describe('AutocompleteDemo', function(){
  it('renders a textarea', function(){
    const shallowRenderer = ReactTestUtils.createRenderer();
    shallowRenderer.render(React.createElement(AutocompleteDemo));
    const result = shallowRenderer.getRenderOutput();
    expect(result.type).to.equal('textarea');
  });
});

describe('boundsOfWordAtPosition', function(){
  it('matches bounds of current word', function(){
    const text = "fooo fooooo ffo-oooo";
    for (const [pos, want] of [
      [6, [5, 11]],
      [0, [0, 0]],
    ]) {
      const have = boundsOfWordAtPosition(text, pos);
      expect(have).to.deep.equal(want);
      
    }
  });
});
