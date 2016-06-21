import AutocompleteDemo from 'app/autocomplete_demo';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import React from 'react';

// https://facebook.github.io/react/docs/test-utils.html
// http://www.asbjornenge.com/wwc/testing_react_components.html

describe('Autocomplete', function(){
  it('starts with a textarea', function(){
    let shallowRenderer = ReactTestUtils.createRenderer();
    shallowRenderer.render(React.createElement(AutocompleteDemo));
    let result = shallowRenderer.getRenderOutput();
    expect(result.type).to.equal('textarea');
  });
});
