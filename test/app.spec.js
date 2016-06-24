import TextAreaAutocompleter from 'app/TextAreaAutocompleter';
import {boundsOfWordAtPosition} from 'app/TextAreaAutocompleter';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import React from 'react';

// https://facebook.github.io/react/docs/test-utils.html
// http://www.asbjornenge.com/wwc/testing_react_components.html

describe('TextAreaAutocompleter', () => {
  it('renders a textarea', () => {
    const shallowRenderer = ReactTestUtils.createRenderer();
    shallowRenderer.render(React.createElement(TextAreaAutocompleter));
    const result = shallowRenderer.getRenderOutput();
    expect(result.type).to.equal('textarea');
  });
});

describe('boundsOfWordAtPosition', () => {
  it('matches bounds of current word', () => {
    const text = "fooo fooooo ffo-oooo";
    for (const [pos, want] of [
      [6, [5, 11]],
      [0, [0, 0]],
      [15, [12, 20]]
    ]) {
      const have = boundsOfWordAtPosition(text, pos);
      expect(have).to.deep.equal(want);
    }
  });
});
