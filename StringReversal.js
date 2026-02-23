/*
Given a string, return a new string with revresed 
order of characters, 
 --- Examples 
    reverse('apple') === 'leppa'
    reverse('hello') == 'olleh'
    reverse('Greetings!') ===  '!sgniteerG'
*/

const reverse = (str) => {
  let reversed = "";
  for (const char of str) {
    reversed = char + reversed;
  }
  return reversed;
};
