import UserSuggester from 'app/UserSuggester';

const testData = [
  {
    "username": "pturner0",
    "avatar_url": "https://secure.gravatar.com/avatar/cd4318b7fb1cf64648f59198aca8757f?d=mm",
    "name": "Paula Turner"
  },
  {
    "username": "pdixon1",
    "avatar_url": "https://secure.gravatar.com/avatar/be09ed96613495dccda4eeffc4dd2daf?d=mm",
    "name": "Patrick Dixon"
  }
]

describe('UserSuggester', () => {
  it('returns suggestions from username', () => {
    const s = UserSuggester(testData);
    const result = s('n1');
    expect(result).to.deep.equal([testData[1]]);
  });
  it('returns case insensitive suggestions from name', () => {
    const s = UserSuggester(testData);
    const result = s('tur');
    expect(result).to.deep.equal([testData[0]]);
  });
});

