import TextAreaAutocompleter from 'app/TextAreaAutocompleter';
import {suggestableWord} from 'app/TextAreaAutocompleter';
import {mount} from 'enzyme';
import React from 'react';

function testSuggester(string){
  return [
    {
      "username": "pturner0",
      "avatar_url": "https://secure.gravatar.com/avatar/cd4318b7fb1cf64648f59198aca8757f?d=mm",
      "name": "Paula Turner"
    },
    {
      "username": "pdixon1",
      "avatar_url": "https://secure.gravatar.com/avatar/be09ed96613495dccda4eeffc4dd2daf?d=mm",
      "name": "Patrick Dixon"
    },
    {
      "username": "mhansen2",
      "avatar_url": "https://secure.gravatar.com/avatar/15442f219c2c472e0f1572aacc1cdfd7?d=mm",
      "name": "Michael Hansen"
    }
  ]
}


describe('TextAreaAutocompleter', () => {
  it('renders a textarea and suggestions', () => {
    let r = mount(<TextAreaAutocompleter initialText="foo"/>),
        t = r.find('textarea');
    expect(t.node.value).to.equal('foo');
    expect(r.find('.user-chooser-user').length).to.equal(0);
    r.setState( {text: 'bar', suggestions: testSuggester(''), selection: 2});
    expect(t.node.value).to.equal('bar');
    expect(r.find('.user-chooser-user').length).to.equal(3);
    expect(r.find('.user-chooser-user.is-selected').length).to.equal(1);
  });
  
  it('handles key input events', () => {
    let r = mount(<TextAreaAutocompleter suggester={testSuggester}/>),
        t = r.find('textarea');
    t.simulate('change', {target:{value: "@p", selectionStart:2}});
    expect(r.state("suggestions").length).to.equal(3);
    expect(r.state("cursor")).to.equal(0);
    t.simulate('keydown', {key:'ArrowUp'});
    expect(r.state("cursor")).to.equal(2);
    t.simulate('keydown', {key:'ArrowDown'});
    expect(r.state("cursor")).to.equal(0);
    t.simulate('keydown', {key:'Enter'});
    expect(r.state("text")).to.equal("@pturner0");
    expect(r.state("suggestions")).to.equal(null);
  });

  it('handles mouse input events', () => {
    let r = mount(<TextAreaAutocompleter suggester={testSuggester}/>),
        t = r.find('textarea');
    t.simulate('change', {target:{value: "a @abcd", selectionStart:5}});
    expect(r.state("suggestions").length).to.equal(3);
    let s = r.find('.user-chooser');
    s.childAt(0).simulate('mouseover');
    expect(r.state("cursor")).to.equal(0);
    s.childAt(2).simulate('click');
    expect(r.state("suggestions")).to.equal(null);
    expect(r.state("text")).to.equal("a @mhansen2");
  });
});

describe('suggestableWord', () => {
  it('matches bounds of current word', () => {
    const text = "fooo @fooooo @ffo-oooo";
    for (const [pos, want] of [
      [6, [6, 12]],
      [5, null],
      [0, null],
      [15, [14, 22]]
    ]) {
      const have = suggestableWord(text, pos);
      expect(have).to.deep.equal(want);
    }
  });
});
