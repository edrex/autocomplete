import escRegex from 'escape-string-regexp';

export default function UserSuggester(users){
  return (string) => {
    let r = new RegExp(escRegex(string), 'i')
    return users.filter(u => r.test(u.username) || r.test(u.name))
      .slice(0,8);
  }
}
